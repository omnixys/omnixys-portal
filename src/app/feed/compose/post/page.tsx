'use client';
import { Box } from "@mui/material";
import CreatePostBox from "../../components/feed/CreatePostBox";

export default function ComposePostPage() {
  return (
    <Box maxWidth={600} mx="auto" mt={4}>
      <CreatePostBox onCreate={() => {}} />
    </Box>
  );
}
