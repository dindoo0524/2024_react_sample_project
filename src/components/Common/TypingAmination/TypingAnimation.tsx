import { useEffect, useState } from "react";

interface TypingAnimationProps {
  fullText: string;
}

const TypingAnimation = ({ fullText }: TypingAnimationProps) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex === fullText.length) {
        setCurrentIndex(0); // currentIndex 초기화
        setText(""); // 텍스트 초기화
      } else {
        setText((prevText) => prevText + fullText[currentIndex]); // 한 글자씩 추가
        setCurrentIndex((prevIndex) => prevIndex + 1); // 인덱스 증가
      }
    }, 100); // 한 글자씩 추가되는 간격(ms)

    // 컴포넌트가 unmount되면 clearInterval로 타이머 제거
    return () => clearInterval(typingInterval);
  }, [currentIndex, fullText]); // currentIndex와 fullText가 변경될 때마다 useEffect 재실행

  return <div>{text}</div>;
};

export default TypingAnimation;
