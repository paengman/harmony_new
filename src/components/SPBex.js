import React, { useState, useEffect, useRef } from "react";
import SoundPatternBuilder from '../SoundPatternBuilder';


// 예제 도형 배열 (편집 불가, 재생 전용)
const presetShapes = [
  {
    "id": "6a1d5867-15dc-46da-a227-3437e6ce46fe",
    "xPercent": 6.809569160588813,
    "yPercent": 86.51832460732984,
    "type": "박자-1",
    "size": 40,
    "group": "p3",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#FE6E3D"
  },
  {
    "id": "ae8703a8-8928-4efc-83cc-3152e1b6b88d",
    "xPercent": 19.174581057845323,
    "yPercent": 86.51832460732984,
    "type": "박자-5",
    "size": 40,
    "group": "p2",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#F5BC62"
  },
  {
    "id": "f4ad60a6-a621-4fca-bf0d-45b430247ea0",
    "xPercent": 40.5204963331092,
    "yPercent": 85.86387434554975,
    "type": "박자-1",
    "size": 40,
    "group": "p3",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#FE6E3D"
  },
  {
    "id": "d5f942bf-e6de-473a-b97b-ae1df5d9e840",
    "xPercent": 73.97110746568735,
    "yPercent": 85.99476439790575,
    "type": "박자-1",
    "size": 40,
    "group": "p3",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#FE6E3D"
  },
  {
    "id": "bf9bae38-00df-4c0b-befc-2b95fcac78e9",
    "xPercent": 53.60137734020688,
    "yPercent": 85.86387434554975,
    "type": "박자-5",
    "size": 40,
    "group": "p12",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#F5BC62"
  },
  {
    "id": "055f70d2-f215-4f1c-a5f6-f07d32cf95e7",
    "xPercent": 86.66151441287167,
    "yPercent": 86.64921465968587,
    "type": "박자-5",
    "size": 40,
    "group": "p9",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#F5BC62"
  },
  {
    "id": "b19790a7-0ffe-4433-aa06-443ffe1b90c6",
    "xPercent": 28.22056344583825,
    "yPercent": 86.51832460732984,
    "type": "박자-9",
    "size": 40,
    "group": "p18",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#4284F3"
  },
  {
    "id": "31d88da5-2dee-4062-bd01-9d332aaf4b74",
    "xPercent": 62.25688566828644,
    "yPercent": 85.99476439790575,
    "type": "박자-9",
    "size": 40,
    "group": "p1",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#4284F3"
  },
  {
    "id": "39665327-b8eb-4029-a214-bc76c0382174",
    "xPercent": 95.44718076092235,
    "yPercent": 86.64921465968587,
    "type": "박자-9",
    "size": 40,
    "group": "p11",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#4284F3"
  },
  {
    "id": "a50d3f85-d5dc-4e4f-8f4b-52c2cf2ceaa8",
    "xPercent": 4.011171731209707,
    "yPercent": 57.85340314136126,
    "type": "음계-1",
    "size": 40,
    "group": "p30",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#6EC1A1"
  },
  {
    "id": "f9c236b3-49c9-4710-95d6-36c4d1645fe6",
    "xPercent": 8.046070350314464,
    "yPercent": 52.617801047120416,
    "type": "음계-2",
    "size": 40,
    "group": "p3",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#FE6E3D"
  },
  {
    "id": "99d1a942-5717-4620-8a58-e669dbd35dd9",
    "xPercent": 1.9937224216573284,
    "yPercent": 42.14659685863874,
    "type": "음계-3",
    "size": 40,
    "group": "p25",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#EF7A88"
  },
  {
    "id": "708e5194-aa3c-4cfc-a34c-3c23c31b98a2",
    "xPercent": 13.187312139173752,
    "yPercent": 36.910994764397905,
    "type": "음계-4",
    "size": 40,
    "group": "p29",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#6EC1A1"
  },
  {
    "id": "b15d3952-9034-493d-a23b-7f0e866d8f38",
    "xPercent": 13.187312139173752,
    "yPercent": 42.14659685863874,
    "type": "음계-4",
    "size": 40,
    "group": "p29",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#6EC1A1"
  },
  {
    "id": "4774e5bb-4b27-463c-8f8d-a610a6443c66",
    "xPercent": 56.855327839484914,
    "yPercent": 42.14659685863874,
    "type": "음계-5",
    "size": 40,
    "group": "p13",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#6EC1A1"
  },
  {
    "id": "34645e3a-2301-445e-a1af-ac4f2be6531b",
    "xPercent": 62.38704368825756,
    "yPercent": 36.910994764397905,
    "type": "음계-7",
    "size": 40,
    "group": "p7",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#F5BC62"
  },
  {
    "id": "5c66cda6-a4c2-4f71-8b40-4ba59b752287",
    "xPercent": 70.19652488652484,
    "yPercent": 33.90052356020942,
    "type": "음계-10",
    "size": 40,
    "group": "p3",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#FE6E3D"
  },
  {
    "id": "46cb3adc-bc81-4dc4-b44b-ae7db69a642e",
    "xPercent": 18.263474918047475,
    "yPercent": 47.38219895287958,
    "type": "음계-6",
    "size": 40,
    "group": "p8",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#F5BC62"
  },
  {
    "id": "30695441-28e1-4dbb-b751-d030ad85a266",
    "xPercent": 25.942798096343626,
    "yPercent": 57.85340314136126,
    "type": "음계-12",
    "size": 40,
    "group": "p3",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#FE6E3D"
  },
  {
    "id": "cb080201-ccdc-48d4-b318-9f8f83c611f5",
    "xPercent": 80.4790084642434,
    "yPercent": 47.38219895287958,
    "type": "음계-18",
    "size": 40,
    "group": "p19",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#4284F3"
  },
  {
    "id": "1165935e-a702-4a4e-9b02-77f2d158fbe3",
    "xPercent": 89.13451679232296,
    "yPercent": 47.38219895287958,
    "type": "음계-8",
    "size": 40,
    "group": "p25",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#EF7A88"
  },
  {
    "id": "e2b205c7-0e14-460f-a0a8-1a840705ece2",
    "xPercent": 15.465077488668372,
    "yPercent": 57.85340314136126,
    "type": "음계-9",
    "size": 40,
    "group": "p18",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#4284F3"
  },
  {
    "id": "dfd490b8-3037-4853-8762-39b1e2416a67",
    "xPercent": 25.877719086358063,
    "yPercent": 31.675392670157066,
    "type": "음계-9",
    "size": 40,
    "group": "p11",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#4284F3"
  },
  {
    "id": "c91ed69e-9ad4-4af6-a615-d7562a40f56a",
    "xPercent": 32.51577810488524,
    "yPercent": 63.089005235602095,
    "type": "음계-2",
    "size": 40,
    "group": "p4",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#EF7A88"
  },
  {
    "id": "8d2fcc31-076e-4b93-a119-0e784cf6b744",
    "xPercent": 35.18401751429323,
    "yPercent": 42.14659685863874,
    "type": "음계-3",
    "size": 40,
    "group": "p18",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#4284F3"
  },
  {
    "id": "ed806f16-2cdb-4d8c-9955-3e8c4b253ba3",
    "xPercent": 38.30780999360014,
    "yPercent": 47.38219895287958,
    "type": "음계-1",
    "size": 40,
    "group": "p30",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#6EC1A1"
  },
  {
    "id": "722d5b14-5340-4a98-a2b1-51d3186776a0",
    "xPercent": 40.325259303152514,
    "yPercent": 36.910994764397905,
    "type": "음계-15",
    "size": 40,
    "group": "p25",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#EF7A88"
  },
  {
    "id": "53026404-215b-49f3-b3e6-e025fe1c445e",
    "xPercent": 43.774446832387234,
    "yPercent": 52.617801047120416,
    "type": "음계-9",
    "size": 40,
    "group": "p13",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#6EC1A1"
  },
  {
    "id": "9683ee8d-cd39-4472-86ea-e3e7b704e884",
    "xPercent": 43.774446832387234,
    "yPercent": 57.85340314136126,
    "type": "음계-4",
    "size": 40,
    "group": "p15",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#F5BC62"
  },
  {
    "id": "93511b4c-be01-40e2-8846-c263e8e4a4b3",
    "xPercent": 49.95695278101549,
    "yPercent": 52.617801047120416,
    "type": "음계-2",
    "size": 40,
    "group": "p3",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#FE6E3D"
  },
  {
    "id": "54c9618c-aeab-4b69-a899-43d4a44f3f12",
    "xPercent": 54.96803654990365,
    "yPercent": 68.32460732984293,
    "type": "음계-11",
    "size": 40,
    "group": "p11",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#4284F3"
  },
  {
    "id": "60169d07-c974-48df-87db-5b6e43e17607",
    "xPercent": 95.12178571099454,
    "yPercent": 57.85340314136126,
    "type": "음계-6",
    "size": 40,
    "group": "p22",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#6EC1A1"
  },
  {
    "id": "3be752d9-7c94-480b-b58e-f242859bcf8a",
    "xPercent": 55.81406367971594,
    "yPercent": 52.617801047120416,
    "type": "음계-3",
    "size": 40,
    "group": "p3",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#FE6E3D"
  },
  {
    "id": "da9ed17f-5528-4cea-b733-c610523e5632",
    "xPercent": 65.1203621076511,
    "yPercent": 47.38219895287958,
    "type": "음계-1",
    "size": 40,
    "group": "p24",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#EF7A88"
  },
  {
    "id": "160b2c3b-eb50-46b4-8474-6a942a6a2c85",
    "xPercent": 68.11399656698688,
    "yPercent": 47.38219895287958,
    "type": "음계-1",
    "size": 40,
    "group": "p25",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#EF7A88"
  },
  {
    "id": "41f3a231-2442-477e-a891-930408effab8",
    "xPercent": 68.7647866668425,
    "yPercent": 63.089005235602095,
    "type": "음계-7",
    "size": 40,
    "group": "p5",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#F5BC62"
  },
  {
    "id": "1ecbd78a-5d26-4903-800e-6ca18cefd932",
    "xPercent": 71.2377890462938,
    "yPercent": 63.089005235602095,
    "type": "음계-8",
    "size": 40,
    "group": "p15",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#F5BC62"
  },
  {
    "id": "b0da3777-16ee-4b29-93c6-2e056703d2c0",
    "xPercent": 75.33776667538412,
    "yPercent": 63.089005235602095,
    "type": "음계-9",
    "size": 40,
    "group": "p18",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#4284F3"
  },
  {
    "id": "e92458ed-310d-4f65-95bf-c740a8a3e148",
    "xPercent": 78.26632212473434,
    "yPercent": 63.089005235602095,
    "type": "음계-9",
    "size": 40,
    "group": "p18",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#4284F3"
  },
  {
    "id": "5d947507-3d01-4736-baf3-bc89f4bad6a8",
    "xPercent": 46.312528221824095,
    "yPercent": 49.86910994764398,
    "type": "배경음-3",
    "size": 40,
    "group": "p1",
    "pitch": "C",
    "lastPlayed": 0,
    "customColor": "#4284F3"
  }
];

const styles = {
  scrollIcon: {
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    transition: "opacity 0.5s ease",
    opacity: 0,
    zIndex: 999,
  },
};


// 🔽 함수 정의는 여기서 시작!
function SPBex() {
  const [showModal, setShowModal] = useState(false);
  const [resetPlayback, setResetPlayback] = useState(false);
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  useEffect(() => {
  const timer = setTimeout(() => {
    setShowScrollIcon(true);
  }, 2000); // 2초 후 보여주기
  return () => clearTimeout(timer);
}, []);



  const handlePlaybackEnd = () => {
    setShowModal(true);
  };

  const handleRetry = () => {
    setShowModal(false);
    setResetPlayback(true);
    setTimeout(() => setResetPlayback(false), 100);
  };

  return (
    <div
      style={{
        backgroundColor: "#F7F2EA",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <SoundPatternBuilder
        presetShapes={presetShapes}
        readOnly={true}
        onPlaybackEnd={handlePlaybackEnd}
        resetPlayback={resetPlayback}
      />

      {showModal && (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    }}
  >
    {/* 🔸 중앙 창 모양 */}
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: "20px",
        padding: "30px 40px",
        textAlign: "center",
        maxWidth: "300px",
      }}
    >
      <div style={{ fontSize: "20px", marginBottom: "20px", color: "#333" }}>
        다시 들으시겠어요?
      </div>

      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#FE6E3D",
          color: "white",
          cursor: "pointer",
          marginBottom: "30px",
        }}
        onClick={handleRetry}
      >
        다시 듣기
      </button>

      <div style={{ textAlign: "center" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="82" viewBox="0 0 90 82" fill="none">
          <path d="M2 2L44.9259 27.6274" stroke="#4C3A2E" strokeWidth="3" strokeLinecap="round" />
          <path d="M88 2.18359L45.0741 27.811" stroke="#4C3A2E" strokeWidth="3" strokeLinecap="round" />
          <path d="M2 28L44.9259 53.6274" stroke="#4C3A2E" strokeWidth="3" strokeLinecap="round" />
          <path d="M88 28.1836L45.0741 53.811" stroke="#4C3A2E" strokeWidth="3" strokeLinecap="round" />
          <path d="M2 54L44.9259 79.6274" stroke="#4C3A2E" strokeWidth="3" strokeLinecap="round" />
          <path d="M88 54.1836L45.0741 79.811" stroke="#4C3A2E" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div style={{ marginTop: "10px", fontSize: "16px", color: "#4C3A2E" }}>
          스크롤해서 작곡하러 가기
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default SPBex;