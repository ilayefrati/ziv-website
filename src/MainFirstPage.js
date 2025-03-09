import React, { useState, useEffect, useRef, Suspense } from "react";
import "./MainFirstPage.css";
import Navbar from "./Navbar";
import NavbarContainer from "./NavbarContainer";
import { Link } from "react-router-dom";
import Model from "./Model";
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
  const [visible, setVisible] = useState(false);
  const loadedRef = useRef(false);
  
  // Animation constants with smaller vertical adjustment
  const DURATION = 2.2;
  const FINAL_Y = -0.7; // Less extreme adjustment
  const START_Y = -1.0; // Less extreme adjustment 
  const START_SCALE = 0.65;
  const FINAL_SCALE = 0.85;
  const START_X = -0.7;
  
  // Ensure we notify the parent when the model is mounted
  useEffect(() => {
    // Using a timeout ensures the model has had time to load
    const timer = setTimeout(() => {
      if (!loadedRef.current) {
        loadedRef.current = true;
        setModelLoaded(true);
      }
    }, 300);
    
    return () => {
      clearTimeout(timer);
      // Reset animation when component unmounts
      startTime.current = null;
      animationComplete.current = false;
      loadedRef.current = false;
    };
  }, [setModelLoaded]);
  
  // Control model visibility based on animation start
  useEffect(() => {
    if (animationStart && !visible) {
      // Show model only when animation starts
      setVisible(true);
      
      // Set initial position
      if (ref.current) {
        ref.current.position.set(START_X, START_Y, 0);
        ref.current.rotation.set(0, Math.PI / 3, 0);
        ref.current.scale.set(START_SCALE, START_SCALE, START_SCALE);
      }
    }
    
    if (!animationStart && visible) {
      // Hide model when animation resets
      setVisible(false);
    }
  }, [animationStart, visible]);
  
  // Animation frame handler
  useFrame((state) => {
    if (!ref.current || !visible || !animationStart) return;
    
    // Initialize start time on first frame after animation starts
    if (startTime.current === null) {
      startTime.current = state.clock.getElapsedTime();
    }
    
    // Only animate if not complete
    if (!animationComplete.current) {
      const elapsed = state.clock.getElapsedTime() - startTime.current;
      let progress = Math.min(elapsed / DURATION, 1);
      
      // Easing function for smooth animation
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      
      // Simplified rotation - just one full turn
      ref.current.rotation.y = Math.PI / 3 + easedProgress * Math.PI * 2;
      
      // Smoother rise up
      ref.current.position.y = START_Y + (FINAL_Y - START_Y) * easedProgress;
      
      // Smoother scale transition
      const scale = START_SCALE + (FINAL_SCALE - START_SCALE) * easedProgress;
      ref.current.scale.set(scale, scale, scale);
      
      // Simplified z-movement
      ref.current.position.z = easedProgress * -0.3;
      
      // Mark animation as complete
      if (progress >= 1) {
        animationComplete.current = true;
      }
    }
  });
  
  if (!visible) return null;
  
  return (
    <group ref={groupRef}>
      <group ref={ref}>
        <Model />
      </group>
    </group>
  );
}

function MainFirstPage() {
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
      
      // Start animation after a short delay
      startTimeoutRef.current = setTimeout(() => {
        setAnimationStart(true);
      }, 500);
    }
    
    return () => {
      if (startTimeoutRef.current) {
        clearTimeout(startTimeoutRef.current);
      }
    };
  }, [modelLoaded]);
  
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
            <p className="slide-in-right delay-2">
              מערכת זיו מספקת פתרון מקיף לניהול צי הרכב בארגון שלך, מאפשרת חיסכון משמעותי בעלויות, 
              מעקב אחר טיפולים, ביטוחים ורישיונות, וניהול יעיל של כל היבטי צי הרכב.
            </p>
            <div className="main-hero-buttons slide-in-right delay-3">
              <Link to="/home" className="main-primary-button">למידע נוסף</Link>
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
              {/* Dark background for dramatic effect */}
              <color attach="background" args={['#000']} />
              
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
    </div>
  );
}

export default MainFirstPage;
