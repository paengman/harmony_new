import React from "react";

function LastSection() {
  return (
    <section style={styles.section}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 900"
        preserveAspectRatio="xMidYMid meet"
        style={styles.svg}
      >
        {/* 큰 원 */}
        <circle cx="900" cy="450" r="350" fill="#FE6E3D" />

        {/* 오른쪽 원 (배경 + 테두리) */}
        <circle
          cx="1300"
          cy="250"
          r="180"
          fill="#F7F2EA"
          stroke="#FE6E3D"
          strokeWidth="6"
        />

        {/* 왼쪽 상단 점 두 개 */}
        <circle cx="50" cy="80" r="14" fill="#FE6E3D" />
        <circle cx="50" cy="130" r="14" fill="#FE6E3D" />

        {/* 왼쪽 하단 직선 */}
        <rect x="40" y="800" width="14" height="60" fill="#FE6E3D" />
      </svg>

      {/* 회전 이미지 (테두리 없음) */}
      <img
        src={`${process.env.PUBLIC_URL}/img/ab.png`}
        alt="Anthony Braxton"
        style={{
          position: "absolute",
          top: "300px",
          left: "250px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          objectFit: "cover",
          animation: "spin 10s linear infinite",
        }}
      />

      {/* 설명 텍스트 */}
      <div style={styles.textBlock}>
        <div style={styles.name}>Anthony Braxton</div>
        <div style={styles.subtitle}>소리를 그리는 작곡가</div>
        <div style={styles.paragraph}>
          Braxton은 다양한 소리를 시각적 도형으로 분류해,<br />
          실험적이고 논리적인 방식으로 작곡했습니다.<br />
          그의 방식처럼, 소리를 직관적으로 다룰 수 있는 <br />
          창의적인 인터페이스를 개발하고자 했습니다.
        </div>
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
}

const styles = {
  section: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#F7F2EA",
    fontFamily: "Lexend Giga, sans-serif",
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  textBlock: {
    position: "absolute",
    right: "120px",
    bottom: "50px", // ⬅️ 살짝 더 아래로 이동
    textAlign: "right",
    color: "#000",
    lineHeight: "1.6",
  },
  name: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "20px",
    color: "#FE6E3D",
    fontWeight: "600",
    marginBottom: "16px",
  },
  paragraph: {
    fontSize: "18px",
    color: "#333",
  },
};

export default LastSection;
