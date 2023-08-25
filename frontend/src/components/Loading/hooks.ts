import { useEffect, useState } from "react";

export const useAnimatedText = () => {
  const [text, setText] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((text) => {
        if (text === "Loading...") {
          return "Loading";
        }
        return text + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return {
    text,
  };
};
