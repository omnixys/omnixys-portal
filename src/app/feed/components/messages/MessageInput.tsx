"use client";

import { Box, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";

export default function MessageInput({
  onSend,
}: {
  onSend: (data: { content?: string; image?: string }) => void;
}) {
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const canSend = text.trim() || image;

  return (
    <Box p={2} borderTop="1px solid #222">
      {image && (
        <Box position="relative" mb={1}>
          <Box
            component="img"
            src={image}
            sx={{ width: 160, borderRadius: 2 }}
          />
          <IconButton
            size="small"
            onClick={() => setImage(null)}
            sx={{
              position: "absolute",
              top: 4,
              right: 4,
              bgcolor: "rgba(0,0,0,0.6)",
              color: "#fff",
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      )}

      <Box display="flex" gap={1}>
        <IconButton onClick={() => fileRef.current?.click()}>
          <ImageIcon />
        </IconButton>

        <input
          ref={fileRef}
          type="file"
          hidden
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setImage(URL.createObjectURL(file));
            }
          }}
        />

        <TextField
          fullWidth
          size="small"
          placeholder="Start a new message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <IconButton
          disabled={!canSend}
          onClick={() => {
            onSend({ content: text || undefined, image: image || undefined });
            setText("");
            setImage(null);
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
