"use client";

import { Typography } from "@mui/material";
import { motion, stagger, useAnimate } from "framer-motion";
import { JSX, useEffect } from "react";

export const TextGenerateEffect = ({
  words,
}: {
  words: string;
}): JSX.Element => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
  }, []);

  return (
    <Typography
      component={motion.div}
      ref={scope}
      sx={{ fontWeight: 700, textAlign: "center", my: 4 }}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={idx}
          style={{
            opacity: 0,
            color: idx > 3 ? "#CBACF9" : "#FFFFFF",
            marginRight: "0.25rem",
          }}
        >
          {word}
        </motion.span>
      ))}
    </Typography>
  );
};
