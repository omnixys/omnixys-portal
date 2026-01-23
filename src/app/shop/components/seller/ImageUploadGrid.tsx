"use client";

import { Box, IconButton, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";

const MAX_IMAGES = 4;

export function ImageUploadGrid({
  onChange,
}: {
  onChange?: (files: File[]) => void;
}) {
  const [files, setFiles] = useState<(File | null)[]>(
    Array(MAX_IMAGES).fill(null),
  );

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleSelect = (index: number, file: File) => {
    const next = [...files];
    next[index] = file;
    setFiles(next);
    onChange?.(next.filter(Boolean) as File[]);
  };

  const handleRemove = (index: number) => {
    const next = [...files];
    next[index] = null;
    setFiles(next);
    onChange?.(next.filter(Boolean) as File[]);
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {files.map((file, index) => {
        const preview = file ? URL.createObjectURL(file) : null;

        return (
          <Box
            key={index}
            sx={{
              width: 120,
              height: 120,
              borderRadius: 2,
              border: "1px dashed #ccc",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              backgroundColor: "#fafafa",
            }}
            onClick={() => inputRefs.current[index]?.click()}
          >
            {/* Preview */}
            {preview ? (
              <Box
                component="img"
                src={preview}
                alt="Preview"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#999",
                }}
              >
                <CloudUploadIcon />
                <Typography fontSize={12}>Upload</Typography>
              </Box>
            )}

            {/* Remove */}
            {file && (
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(index);
                }}
                sx={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  backgroundColor: "#fff",
                  boxShadow: 1,
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            )}

            {/* Hidden input */}
            <input
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleSelect(index, file);
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}
