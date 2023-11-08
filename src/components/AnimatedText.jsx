import { useState, useEffect } from "react";

function AnimatedText() {
  const typingText = [
    "Frontend Developer",
    "UI/UX Designer",
    "Copywriter",
    "Tourism Enthusiast",
  ];
  const typingSpeed = 125;
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("Frontend Developer");

  function typeText(index, text) {
    // if (index <= text.length) {
    //   setDisplayedText(text.slice(0, index));
      setTimeout(() => typeText(index + 1, text), typingSpeed);
    // } else {
    //   setTimeout(nextText, 1200);
    // }
  }

  function nextText() {
    if (textIndex < typingText.length) {
      typeText(0, typingText[textIndex]);
      setTextIndex(textIndex + 1);
    } else {
      setTextIndex(0);
      nextText();
    }
  }

  useEffect(() => {
    return () => {
      nextText();
      setTimeout(() => typeText(index + 1, text), typingSpeed);
    };
  }, []);

  return (
    <div>
      <h2>
        a
        <span className="font-semibold text-xl md:text-4xl text-[#FEBC39]">
          {displayedText}
        </span>
      </h2>
    </div>
  );
}

export default AnimatedText;
