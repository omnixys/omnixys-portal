import { Box } from "@mui/material";
import LeftSidebar from "./components/layout/LeftSidebar";
import Feed from "./components/feed/Feed";
import RightSidebar from "./components/layout/RightSidebar";


export default function HomePage() {
  return (
    <Box display="flex" maxWidth={1280} mx="auto" px={2} gap={2}>
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </Box>
  );
}
