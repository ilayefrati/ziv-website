import React, { useState, useEffect, useRef, Suspense } from "react";
import "../styles/MainFirstPage.css";
import Navbar from "../components/Navbar";
import NavbarContainer from "../components/NavbarContainer";
import { Link } from "react-router-dom";
import Model from "../components/Model";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Environment, 
  PresentationControls,
  useProgress,
  ContactShadows,
} from "@react-three/drei";

// Model component with optimized premium animation
function AnimatedModel({ animationStart, setModelLoaded }) {
  const ref = useRef();
  const groupRef = useRef();
  const startTime = useRef(null);
  const animationComplete = useRef(false);
  const [visible, setVisible] = useState(true); // Always make the model visible
  const loadedRef = useRef(false);
  
  // Responsive scale factors based on window width
  const [scales, setScales] = useState({
    start: 0.65,
    final: 0.85,
    startX: 0
  });
  
  // Update scale based on window size
  useEffect(() => {
    const updateScales = () => {
      // Base scales for smaller screens
      let startScale = 0.65;
      let finalScale = 0.85;
      // Default starting X position
      let startX = 0;
      
      // Increased scaling for larger screens to fill more space
      if (window.innerWidth >= 1600) {
        // Extra large screens - increased to fill space
        startScale = 0.90;
        finalScale = 1.15;
      } else if (window.innerWidth >= 1400) {
        // Large screens - increased to fill space
        startScale = 0.75;
        finalScale = 1.00;
      } else if (window.innerWidth >= 1200) {
        // Medium-large screens - increased to fill space
        startScale = 0.65;
        finalScale = 0.85;
      }
      else if (window.innerWidth < 1200 && window.innerWidth >= 600) {
        // Tablet range - reduced scaling
        startScale = 0.60;
        finalScale = 0.80;
        startX = 0; // Ensure it's centered for this range
      }
      else if (window.innerWidth < 600) {
        // Mobile - reduced scaling
        startScale = 0.40;
        finalScale = 0.50;
        startX = 0; // Ensure it's centered for smaller screens
      }
      
      setScales({ 
        start: startScale, 
        final: finalScale,
        startX: startX // Add X position to the state
      });
    };
    
    // Set initial scale
    updateScales();
    
    // Update on resize
    window.addEventListener('resize', updateScales);
    return () => window.removeEventListener('resize', updateScales);
  }, []);
  
  // Animation constants with smaller vertical adjustment
  const DURATION = 2.2;
  const FINAL_Y = -0.7; // Less extreme adjustment
  const START_Y = -1.0; // Less extreme adjustment 
  const START_SCALE = scales.start;
  const FINAL_SCALE = scales.final;
  const START_X = scales.startX !== undefined ? scales.startX : 0;
  
  // Reset animation when component unmounts
  useEffect(() => {
    return () => {
      // Reset animation when component unmounts
      startTime.current = null;
      animationComplete.current = false;
      loadedRef.current = false;
    };
  }, []);
  
  // Set initial position as soon as component mounts
  useEffect(() => {
    if (ref.current) {
      ref.current.position.set(START_X, START_Y, 0);
      ref.current.rotation.set(0, Math.PI / 3, 0);
      ref.current.scale.set(START_SCALE, START_SCALE, START_SCALE);
    }
  }, []);
  
  // Animation frame handler
  useFrame((state) => {
    if (!ref.current || !animationStart) return;
    
    // Initialize start time on first frame after animation starts
    if (startTime.current === null) {
      startTime.current = state.clock.getElapsedTime();
    }
    
    const elapsed = state.clock.getElapsedTime() - startTime.current;
    
    // Initial animation for position, scale, and z-movement (first 2.2 seconds)
    if (!animationComplete.current) {
      let progress = Math.min(elapsed / DURATION, 1);
      
      // Easing function for smooth animation
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      
      // Smoother rise up
      ref.current.position.y = START_Y + (FINAL_Y - START_Y) * easedProgress;
      
      // Smoother scale transition
      const scale = START_SCALE + (FINAL_SCALE - START_SCALE) * easedProgress;
      ref.current.scale.set(scale, scale, scale);
      
      // Simplified z-movement
      ref.current.position.z = easedProgress * -0.3;
      
      // Mark initial animation as complete
      if (progress >= 1) {
        animationComplete.current = true;
      }
    }
    
    // Simple continuous rotation using built-in time
    ref.current.rotation.y += 0.005; // Small constant increment for smooth rotation
  });
  
  return (
    <group ref={groupRef}>
      <group ref={ref}>
        <Model onLoad={() => setModelLoaded(true)} />
      </group>
    </group>
  );
}

function MainFirstPage({ onPageLoaded }) {
  const [navbarDisplay, setNavbarDisplay] = useState(window.innerWidth > 481);
  const [isVisible, setIsVisible] = useState(false);
  const [animationStart, setAnimationStart] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [canvasKey, setCanvasKey] = useState(Date.now());
  const startTimeoutRef = useRef(null);
  
  // Reset canvas on navigation
  useEffect(() => {
    // Generate a new key for the Canvas to force a remount
    setCanvasKey(Date.now());
    setModelLoaded(false);
    setAnimationStart(false);
    
    // Clean up any pending timeouts on unmount
    return () => {
      if (startTimeoutRef.current) {
        clearTimeout(startTimeoutRef.current);
      }
    };
  }, []);
  
  // Start animation when model is ready
  useEffect(() => {
    if (modelLoaded) {
      // Clear any existing timeout
      if (startTimeoutRef.current) {
        clearTimeout(startTimeoutRef.current);
      }
      
      // Start animation immediately to avoid the lag
      setAnimationStart(true);
      
      // Notify parent component that page is loaded
      if (onPageLoaded) {
        // Small delay to ensure animation has started
        setTimeout(() => {
          onPageLoaded();
        }, 300);
      }
    }
    
    return () => {
      if (startTimeoutRef.current) {
        clearTimeout(startTimeoutRef.current);
      }
    };
  }, [modelLoaded, onPageLoaded]);
  
  // Handle screen size changes
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth <= 481 && navbarDisplay) {
        setNavbarDisplay(false);
      } else if (window.innerWidth > 481 && !navbarDisplay) {
        setNavbarDisplay(true);
      }
    };

    setIsVisible(true);
    
    window.addEventListener("resize", checkScreen);
    checkScreen();
    
    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, [navbarDisplay]);

  return (
    <div className="main-hero-page">
      {navbarDisplay ? <Navbar darkMode={true} /> : <NavbarContainer darkMode={true} />}
      
      <div className="main-hero-section">
        <div className="main-hero-content">
          <div className="main-hero-text">
            <h1 className="slide-in-right">מערכת זיו</h1>
            <h2 className="slide-in-right delay-1">הפתרון המושלם לניהול צי הרכב שלך</h2>
            <h3 className="slide-in-right delay-2">
              מערכת זיו מספקת פתרון מקיף לניהול צי הרכב בארגון שלך, מאפשרת חיסכון משמעותי בעלויות, 
              מעקב אחר טיפולים, ביטוחים ורישיונות, וניהול יעיל של כל היבטי צי הרכב.
            </h3>
            <div className="main-hero-buttons slide-in-right delay-3">
              <Link to="/about" className="main-primary-button">למידע נוסף</Link>
              <Link to="/contact" className="main-secondary-button">צור קשר</Link>
            </div>
          </div>
        </div>
        
        <div className="model-container">
          <Suspense fallback={null}>
            <Canvas 
              key={canvasKey}
              camera={{ position: [0, 0, 6], fov: 35 }} 
              dpr={[1, 2]} 
              gl={{ 
                alpha: true, 
                antialias: true,
                premultipliedAlpha: false,
                preserveDrawingBuffer: true
              }}
            >
              {/* Change background color to match the page */}
              <color attach="background" args={['#0A0A0A']} />
              
              {/* Enhanced dramatic lighting */}
              <ambientLight intensity={0.4} />
              <spotLight 
                position={[10, 10, 10]} 
                angle={0.15} 
                penumbra={1} 
                intensity={1.5} 
                castShadow 
              />
              <spotLight 
                position={[-10, 10, -10]} 
                angle={0.3} 
                penumbra={1} 
                intensity={1} 
                color="#d8a64e" 
                castShadow 
              />
              <spotLight 
                position={[0, -10, 0]} 
                angle={0.5} 
                penumbra={1} 
                intensity={0.5} 
                color="#ffffff" 
              />
              
              {/* Auto-rotating model with loading callback */}
              <AnimatedModel 
                animationStart={animationStart} 
                setModelLoaded={setModelLoaded} 
              />
              
              {/* Enhanced ground shadow for better grounding */}
              <ContactShadows 
                opacity={0.8}
                scale={15}
                blur={2}
                far={4.5}
                position={[0, -1.2, 0]}
                color="#000000"
              />
              
              <Environment preset="night" />
            </Canvas>
          </Suspense>
        </div>
      </div>
      
      {/* Scroll indicator in original position - outside the main-hero-section */}
      <div className="main-scroll-indicator">
        <div className="main-arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default MainFirstPage;
