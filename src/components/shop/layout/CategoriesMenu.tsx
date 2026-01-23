"use client";

import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const CATEGORIES = ["Headphones", "Earbuds", "Speakers", "Accessories"];

export function CategoriesMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <Button
        endIcon={<KeyboardArrowDownIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ fontWeight: 500 }}
      >
        Categories
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {CATEGORIES.map((c) => (
          <MenuItem key={c} onClick={() => setAnchorEl(null)}>
            {c}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
