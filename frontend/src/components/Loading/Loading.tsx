import React from "react";
import { useAnimatedText } from "@/components/Loading/hooks.ts";

export const Loading: React.FC = () => {
  const { text } = useAnimatedText();
  return (
    <div className="text-xl text-white text-center border-2 border-gray-500 animate-pulse bg-gradient-to-tl from-indigo-500 to-pink-500">
      {text}
    </div>
  );
};
