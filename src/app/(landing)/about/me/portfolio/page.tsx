"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";

const MotionBox = motion(Box);

interface PortfolioItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  link: string;
  gradient: string;
}

const items: PortfolioItem[] = [
  {
    id: 1,
    gradient: "linear-gradient(to right, rgb(252 165 165), rgb(147 197 253))",
    title: "React Commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi?",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "https://lama.dev",
  },
  {
    id: 2,
    gradient: "linear-gradient(to right, rgb(147 197 253), rgb(196 181 253))",
    title: "Next.js Medium Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi?",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "https://lama.dev",
  },
  {
    id: 3,
    gradient: "linear-gradient(to right, rgb(196 181 253), rgb(216 180 254))",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi?",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "https://lama.dev",
  },
  {
    id: 4,
    gradient: "linear-gradient(to right, rgb(216 180 254), rgb(252 165 165))",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi?",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "https://lama.dev",
  },
];

export default function PortfolioPage() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <MotionBox
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      sx={{ height: "100%" }}
    >
      {/* SCROLL SECTION */}
      <Box ref={ref} sx={{ height: "600vh", position: "relative" }}>
        <Box
          sx={{
            width: "100vw",
            height: "calc(100vh - 6rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "6rem",
            textAlign: "center",
          }}
        >
          My Works
        </Box>

        <Box
          sx={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            gap: 2,
          }}
        >
          <MotionBox sx={{ display: "flex" }} style={{ x }}>
            {/* INTRO SLIDE */}
            <Box
              sx={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(to right, rgb(216 180 254), rgb(252 165 165))",
              }}
            />

            {/* ITEMS */}
            {items.map((item) => (
              <Box
                key={item.id}
                sx={{
                  height: "100vh",
                  width: "100vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: item.gradient,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    color: "white",
                  }}
                >
                  <Typography
                    fontWeight="bold"
                    sx={{
                      fontSize: {
                        xs: "1.25rem",
                        md: "2.25rem",
                        lg: "3.75rem",
                        xl: "6rem",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Box
                    sx={{
                      position: "relative",
                      width: {
                        xs: 320,
                        md: 384,
                        lg: 500,
                        xl: 600,
                      },
                      height: {
                        xs: 224,
                        md: 256,
                        lg: 350,
                        xl: 420,
                      },
                    }}
                  >
                    <Image src={item.img} alt="" fill />
                  </Box>

                  <Typography
                    sx={{
                      width: {
                        xs: 320,
                        md: 384,
                        lg: 500,
                        xl: 600,
                      },
                      fontSize: { lg: "1.125rem" },
                    }}
                  >
                    {item.desc}
                  </Typography>

                  <Box display="flex" justifyContent="flex-end">
                    <Link href={item.link}>
                      <Button
                        sx={{
                          bgcolor: "white",
                          color: "rgb(75 85 99)",
                          fontWeight: 600,
                          p: { xs: 1, md: 2, lg: 4 },
                          fontSize: {
                            xs: "0.875rem",
                            md: "1rem",
                            lg: "1.125rem",
                          },
                          borderRadius: 2,
                          m: 2,
                          "&:hover": {
                            bgcolor: "rgb(243 244 246)",
                          },
                        }}
                      >
                        See Demo
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            ))}
          </MotionBox>
        </Box>
      </Box>

      {/* CTA SECTION */}
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography fontSize="6rem">Do you have a project?</Typography>

        <Box position="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            width={500}
            height={500}
          >
            <defs>
              <path
                id="circlePath"
                d="M 150,150 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
            </defs>
            <text fill="black">
              <textPath href="#circlePath" fontSize={20}>
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>

          <Link href="/contact">
            <Box
              sx={{
                width: { xs: 64, md: 112 },
                height: { xs: 64, md: 112 },
                bgcolor: "black",
                color: "white",
                borderRadius: "50%",
                position: "absolute",
                inset: 0,
                m: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              Hire Me
            </Box>
          </Link>
        </Box>
      </Box>
    </MotionBox>
  );
}
