"use client";

import { Box, IconButton, Modal, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import CreatePostBox from "../../../components/feed/CreatePostBox";
import { motion } from "framer-motion";

export default function ComposePostModal() {
  const router = useRouter();

  return (
    <Modal open onClose={() => router.back()}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        mt={10}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Paper
            sx={{
              width: 600,
              borderRadius: 3,
              p: 2,
            }}
          >
            <Box display="flex" justifyContent="flex-end">
              <IconButton onClick={() => router.back()}>
                <CloseIcon />
              </IconButton>
            </Box>

            <CreatePostBox
              onCreate={() => {
                router.back();
              }}
            />
          </Paper>
        </motion.div>
      </Box>
    </Modal>
  );
}
