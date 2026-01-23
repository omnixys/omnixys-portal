"use client";

import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { followedCommunities } from "../../lib/mock/communities";

type Props = {
  onChange: (value: string) => void;
};

export default function FeedTabs({ onChange }: Props) {
  const tabs = ["For you", "Following", ...followedCommunities];
  const [value, setValue] = useState(0);

  return (
    <Box borderBottom="1px solid #222">
      <Tabs
        value={value}
        onChange={(_, v) => {
          setValue(v);
          onChange(tabs[v]);
        }}
        variant="scrollable"
        scrollButtons={false}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            sx={{ textTransform: "none", fontWeight: 600 }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
