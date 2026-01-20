"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { JSX, useState } from "react";

interface Card {
  id: number;
  content: React.ReactNode;
  thumbnail: string;
}

export const LayoutGrid = ({ cards }: { cards: Card[] }): JSX.Element => {
  const [selected, setSelected] = useState<Card | null>(null);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(4, 1fr)",
        },
        gap: 10,
        maxWidth: "1280px",
        mx: "auto",
        p: 5,
        position: "relative",
      }}
    >
      {cards.map((card) => (
        <Box key={card.id} sx={{ position: "relative" }}>
          <motion.div
            layout
            onClick={() => setSelected(card)}
            style={{
              borderRadius: 16,
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <Image
              src={card.thumbnail}
              alt=""
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </Box>
      ))}

      {selected && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          onClick={() => setSelected(null)}
          sx={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#000",
            zIndex: 10,
          }}
        />
      )}

      {selected && (
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{
            position: "fixed",
            inset: 0,
            m: "auto",
            maxWidth: "50%",
            maxHeight: "50%",
            zIndex: 20,
            borderRadius: 16,
            backgroundColor: "#000",
            p: 4,
          }}
        >
          {selected.content}
        </Box>
      )}
    </Box>
  );
};
