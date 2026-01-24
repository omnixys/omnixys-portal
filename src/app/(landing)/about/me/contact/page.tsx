"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, TextField, Typography } from "@mui/material";
// import emailjs from "@emailjs/browser";

const MotionBox = motion(Box);
const MotionSpan = motion("span");

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    if (!formRef.current) return;

    // emailjs
    //   .sendForm(
    //     process.env.NEXT_PUBLIC_SERVICE_ID as string,
    //     process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
    //     formRef.current,
    //     process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
    //   )
    //   .then(
    //     () => {
    //       setSuccess(true);
    //       formRef.current?.reset();
    //     },
    //     () => {
    //       setError(true);
    //     },
    //   );
  };

  return (
    <MotionBox
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      sx={{ height: "100%" }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          px: { xs: 2, sm: 4, md: 6, lg: 10, xl: 24 },
        }}
      >
        {/* TEXT CONTAINER */}
        <Box
          sx={{
            height: { xs: "50%", lg: "100%" },
            width: { lg: "50%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3.75rem", // text-6xl
            fontWeight: 400,
          }}
        >
          <Box>
            {text.split("").map((letter, index) => (
              <MotionSpan
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </MotionSpan>
            ))}
            <span> 😊</span>
          </Box>
        </Box>

        {/* FORM CONTAINER */}
        <Box
          component="form"
          ref={formRef}
          onSubmit={sendEmail}
          sx={{
            height: { xs: "50%", lg: "100%" },
            width: { lg: "50%" },
            bgcolor: "rgb(254 226 226)", // red-50
            borderRadius: 3,
            fontSize: "1.25rem", // text-xl
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
            p: 12, // p-24
          }}
        >
          <Typography>Dear Lama Dev,</Typography>

          <TextField
            name="user_message"
            multiline
            rows={6}
            variant="standard"
            InputProps={{
              disableUnderline: false,
              sx: {
                bgcolor: "transparent",
              },
            }}
            sx={{
              "& .MuiInput-underline:before": {
                borderBottom: "2px solid black",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottom: "2px solid black",
              },
              "& .MuiInput-underline:after": {
                borderBottom: "2px solid black",
              },
            }}
          />

          <Typography>My mail address is:</Typography>

          <TextField
            name="user_email"
            type="text"
            variant="standard"
            InputProps={{
              sx: {
                bgcolor: "transparent",
              },
            }}
            sx={{
              "& .MuiInput-underline:before": {
                borderBottom: "2px solid black",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottom: "2px solid black",
              },
              "& .MuiInput-underline:after": {
                borderBottom: "2px solid black",
              },
            }}
          />

          <Typography>Regards</Typography>

          <Button
            type="submit"
            sx={{
              bgcolor: "rgb(233 213 255)", // purple-200
              color: "rgb(75 85 99)", // gray-600
              fontWeight: 600,
              p: 2,
              borderRadius: 2,
              "&:hover": {
                bgcolor: "rgb(216 180 254)",
              },
            }}
          >
            Send
          </Button>

          {success && (
            <Typography fontWeight={600} color="success.main">
              Your message has been sent successfully!
            </Typography>
          )}

          {error && (
            <Typography fontWeight={600} color="error.main">
              Something went wrong!
            </Typography>
          )}
        </Box>
      </Box>
    </MotionBox>
  );
}
