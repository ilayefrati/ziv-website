import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="loading-text">
          אנא המתן, חווית ניהול רכב יעילה וחסכונית בדרך אליך
        </div>
        <div className="truckWrapper">
          <div className="truckBody">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 198 93" className="trucksvg">
              <path strokeWidth={3} stroke="#282828" fill="#F83D3D" d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z" />
              <path strokeWidth={3} stroke="#282828" fill="#7D7C7C" d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z" />
              <path strokeWidth={2} stroke="#282828" fill="#282828" d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z" />
              <rect strokeWidth={2} stroke="#282828" fill="#FFFCAB" rx={1} height={7} width={5} y={63} x={187} />
              <rect strokeWidth={2} stroke="#282828" fill="#282828" rx={1} height={11} width={4} y={81} x={193} />
              <rect strokeWidth={3} stroke="#282828" fill="#DFDFDF" rx="2.5" height={90} width={121} y="1.5" x="6.5" />
              <rect strokeWidth={2} stroke="#282828" fill="#DFDFDF" rx={2} height={4} width={6} y={84} x={1} />
            </svg>
          </div>
          <div className="truckTires">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" className="tiresvg">
              <circle strokeWidth={3} stroke="#282828" fill="#282828" r="13.5" cy={15} cx={15} />
              <circle fill="#DFDFDF" r={7} cy={15} cx={15} />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" className="tiresvg">
              <circle strokeWidth={3} stroke="#282828" fill="#282828" r="13.5" cy={15} cx={15} />
              <circle fill="#DFDFDF" r={7} cy={15} cx={15} />
            </svg>
          </div>
          <div className="road" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ffffff 0%, #f0f2f5 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .loader {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;
  }

  .truckWrapper {
    width: 500px;
    height: 250px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    overflow-x: hidden;
  }

  .truckBody {
    width: 325px;
    height: fit-content;
    margin-bottom: 15px;
    animation: motion 1s linear infinite;
  }

  @keyframes motion {
    0% { transform: translateY(0px); }
    50% { transform: translateY(3px); }
    100% { transform: translateY(0px); }
  }

  .truckTires {
    width: 325px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 25px 0px 37px;
    position: absolute;
    bottom: 0;
  }

  .truckTires svg {
    width: 60px;
  }

  .road {
    width: 100%;
    height: 1.5px;
    background-color: #282828;
    position: relative;
    bottom: 0;
    align-self: flex-end;
    border-radius: 3px;
  }

  .road::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 100%;
    background-color: #282828;
    right: -50%;
    border-radius: 3px;
    animation: roadAnimation 1.4s linear infinite;
    border-left: 10px solid white;
  }

  .road::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 100%;
    background-color: #282828;
    right: -65%;
    border-radius: 3px;
    animation: roadAnimation 1.4s linear infinite;
    border-left: 4px solid white;
  }



  @keyframes roadAnimation {
    0% { transform: translateX(0px); }
    100% { transform: translateX(-350px); }
  }

  .loading-text {
    font-size: 3rem;
    color: #333;
    text-align: center;
    font-family: 'Aharoni CLM', sans-serif;
    max-width: 1000px;
    line-height: 1.4;
    position: relative;
    direction: rtl;
  }

  .loading-text::after {
    content: "";
    display: inline-block;
    animation: dots 1.5s steps(3, end) infinite;
  }

  @keyframes dots {
    0%   { content: ""; }
    33%  { content: "."; }
    66%  { content: ".."; }
    100% { content: "..."; }
  }

  @media (max-width: 768px) {
    .truckWrapper {
      width: 375px;
      height: 187px;
    }

    .truckBody {
      width: 244px;
    }

    .truckTires {
      width: 244px;
    }

    .truckTires svg {
      width: 45px;
    }

    .loading-text {
      font-size: 3rem;
      max-width: 700px;
      padding: 0 40px;
    }



    .loader {
      gap: 40px;
    }
  }

  @media (max-width: 480px) {
    .truckWrapper {
      width: 300px;
      height: 150px;
    }

    .truckBody {
      width: 195px;
    }

    .truckTires {
      width: 195px;
    }

    .truckTires svg {
      width: 36px;
    }

    .loading-text {
      font-size: 3rem;
      max-width: 400px;
      padding: 0 35px;
    }



    .loader {
      gap: 30px;
    }
  }
`;

export default Loader; 