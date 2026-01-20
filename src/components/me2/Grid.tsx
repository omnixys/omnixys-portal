"use client";

import { Box } from "@mui/material";
import { gridItems } from "@/data";
import { BentoGrid } from "./BentoGrid";
import { JSX } from "react";
import { BentoGridItem } from "./BentoGridItem";

const Grid = (): JSX.Element => {
  return (
    <Box component="section" id="about" sx={{ py: 10 }}>
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </Box>
  );
};

export default Grid;
