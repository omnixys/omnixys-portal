"use client";

import {
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";
import { Post } from "../../lib/mock/posts";

type Props = {
  onCreate: (post: Post) => void;
};

export default function CreatePostBox({ onCreate }: Props) {
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const canPost = text.trim().length > 0 || image;

  const handlePost = () => {
    if (!canPost) return;

    onCreate({
      id: crypto.randomUUID(),
      user: "Lama Dev",
      avatar: "https://i.pravatar.cc/150?img=12",
      content: text,
      image: image ?? undefined,
      likes: 0,
    });

    setText("");
    setImage(null);
  };

  return (
    <Box borderBottom="1px solid #222" px={2} py={2} display="flex" gap={2}>
      <Avatar src="https://i.pravatar.cc/150?img=12" />

      <Box flex={1}>
        <TextField
          fullWidth
          placeholder="What’s happening?!"
          variant="standard"
          multiline
          value={text}
          onChange={(e) => setText(e.target.value)}
          InputProps={{ disableUnderline: true }}
        />

        {/* Image Preview */}
        {image && (
          <Box mt={1} position="relative" borderRadius={2} overflow="hidden">
            <Box
              component="img"
              src={image}
              sx={{ width: "100%", maxHeight: 320, objectFit: "cover" }}
            />
            <IconButton
              size="small"
              onClick={() => setImage(null)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                bgcolor: "rgba(0,0,0,0.6)",
                color: "#fff",
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        )}

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <Box>
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
          </Box>

          <Button
            variant="contained"
            disabled={!canPost}
            onClick={handlePost}
            sx={{ borderRadius: 999, px: 3 }}
          >
            Post
          </Button>
        </Box>

        {!canPost && (
          <Typography variant="caption" color="text.secondary">
            Add text or an image to post
          </Typography>
        )}
      </Box>
    </Box>
  );
}
