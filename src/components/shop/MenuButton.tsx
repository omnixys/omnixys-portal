"use client";

import * as React from "react";
import Link from "next/link";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

/* ============================================================
   Types
============================================================ */
export interface MenuButtonItem {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
}

export interface MenuButtonProps {
  label: string;
  items: MenuButtonItem[];
  disabled?: boolean;
}

/* ============================================================
   Component
============================================================ */
export function MenuButton({
  label,
  items,
  disabled = false,
}: MenuButtonProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item: MenuButtonItem) => {
    if (item.onClick) {
      item.onClick();
    }
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        endIcon={<ArrowDropDownIcon />}
        disabled={disabled}
      >
        {label}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {items.map((item, index) => {
          const content = (
            <>
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  color: item.danger ? "error.main" : undefined,
                }}
              />
            </>
          );

          if (item.href) {
            return (
              <MenuItem
                key={index}
                component={Link}
                href={item.href}
                disabled={item.disabled}
                onClick={handleClose}
              >
                {content}
              </MenuItem>
            );
          }

          return (
            <MenuItem
              key={index}
              onClick={() => handleItemClick(item)}
              disabled={item.disabled}
            >
              {content}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
