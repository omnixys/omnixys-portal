"use client";

import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Box } from "@mui/material";
import PostCard from "./PostCard";
import { Post } from "../../lib/mock/posts";
import XFeedItem from "./items/XFeedItem";
import InstagramFeedItem from "./items/InstagramFeedItem";

const settings =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("settings") ?? "{}")
    : {};

const layout = settings.feedLayout ?? "x";

export default function VirtualFeedList({ posts }: { posts: Post[] }) {
  const parentRef = useRef<HTMLDivElement>(null);

  const Item = layout !== "instagram" ? InstagramFeedItem : XFeedItem;


  const rowVirtualizer = useVirtualizer({
    count: posts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 180,
    overscan: 5,
  });

  return (
    <Box
      ref={parentRef}
      sx={{ height: "calc(100vh - 200px)", overflow: "auto" }}
    >
      <Box height={rowVirtualizer.getTotalSize()} position="relative">
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const post = posts[virtualRow.index];
          
          return (
            <Box
              ref={rowVirtualizer.measureElement}
              data-index={virtualRow.index}
              sx={{ width: "100%" }}

              key={post.id}
              position="absolute"
              top={0}
              left={0}
              width="100%"
              style={{
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <Item post={post} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
