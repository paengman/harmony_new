import React, { useEffect, useRef, useState } from "react";

function ComposeSlideSection() {
  const textPathRef = useRef(null);
  const sectionRef = useRef(null);
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  // 회전 텍스트 애니메이션
  useEffect(() => {
    let offset = 0;
    let animationFrame;
    const animateOffset = () => {
      offset -= 100 / (60 * 60);
      if (offset < -100) offset = 0;
      if (textPathRef.current) {
        textPathRef.current.setAttribute("startOffset", `${offset}%`);
      }
      animationFrame = requestAnimationFrame(animateOffset);
    };
    animationFrame = requestAnimationFrame(animateOffset);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // 5초 후 스크롤 아이콘 등장
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIcon(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} style={styles.section}>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 50%); }
          50% { transform: translate(-50%, 45%); }
        }
      `}</style>

      <div style={styles.ellipse}>
        <svg viewBox="0 0 1650 950" width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
          <defs>
            <path
              id="grayEllipsePath"
              d="M 75,475 A 750,356 0 1,1 1575,475 A 750,356 0 1,1 75,475"
              fill="none"
            />
          </defs>

          <ellipse cx="825" cy="475" rx="800" ry="380" fill="#f7f2ea" />

          <text fill="#333" fontSize="28" fontFamily="Lexend Giga" fontWeight="400" letterSpacing="2">
            <textPath
              href="#grayEllipsePath"
              ref={textPathRef}
              startOffset="0%"
              textAnchor="start"
              dominantBaseline="hanging"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <React.Fragment key={i}>
                  <tspan fill="#F5BC62">Harmony</tspan>는{" "}
                  <tspan fill="#F5BC62">ElevenLabs</tspan>로 생성한 효과음을 시각적 기호로 정리해,
                  사용자가 <tspan fill="#F5BC62">기호만으로 직관적이고 창의적으로 작곡</tspan>할 수 있는 인터페이스를 제공합니다.{" "}
                  <tspan fill="#F5BC62">Elevenlabs</tspan>는 AI 기반 Text to Speech 도구로{" "}
                  <tspan fill="#F5BC62">원하는 효과음과 음성을 생성</tspan>할 수 있습니다.{"   "}
                </React.Fragment>
              ))}
            </textPath>
          </text>
        </svg>

        {/* 👇 스크롤 유도 아이콘 */}
        <div
          style={{
            ...styles.scrollIcon,
            ...(showScrollIcon && { opacity: 1 }),
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="90" height="82" viewBox="0 0 90 82" fill="none">
            <path d="M2 2L44.9259 27.6274" stroke="#DAD1C2" strokeWidth="3" strokeLinecap="round" />
            <path d="M88 2.18359L45.0741 27.811" stroke="#DAD1C2" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 28L44.9259 53.6274" stroke="#DAD1C2" strokeWidth="3" strokeLinecap="round" />
            <path d="M88 28.1836L45.0741 53.811" stroke="#DAD1C2" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 54L44.9259 79.6274" stroke="#DAD1C2" strokeWidth="3" strokeLinecap="round" />
            <path d="M88 54.1836L45.0741 79.811" stroke="#DAD1C2" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#4285f4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    scrollSnapAlign: "start",
  },
  ellipse: {
    width: "165vw",
    height: "95vw",
    maxWidth: "1650px",
    maxHeight: "950px",
    backgroundColor: "transparent",
    position: "relative",
  },
  scrollIcon: {
    position: "absolute",
    top: "43%", // 중앙보다 약간 위
    left: "50%",
    transform: "translate(-50%, 50%)",
    opacity: 0, // 시작 시 숨김
    filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.08))", // 약한 섀도우
    animation: "bounce 1.8s infinite ease-in-out", // 통통 튀는 애니메이션
    transition: "opacity 2.5s ease", // 페이드 인 부드럽게
  },
};

export default ComposeSlideSection;
