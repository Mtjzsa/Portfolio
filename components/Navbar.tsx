"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight / 16);
    };

    const rafHandleScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll);
    requestAnimationFrame(handleScroll);

    return () => window.removeEventListener("scroll", rafHandleScroll);
  }, []);

  return (
    <Box className={`px-25 top-0 left-0 w-full fixed z-9999 transition-all ease-in-out duration-300 ${scrolled ? "bg-[#121212e3]" : "transparent"}`}>
      <Box
        className="flex flex-row justify-between items-center px-5 py-0.5 text-sm z-100"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: { xs: 2.5, md: 3.5 },
          mx: "10rem",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          LOGO
        </Typography>

        <Box sx={{ display: "flex", gap: { xs: 4, md: 6 }, fontWeight: 500 }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: isActive ? "#f5f5f5" : "#a6a6a6",
                    fontWeight: isActive ? 700 : 500,
                    position: "relative",
                    transition: "color 0.2s",
                    "&:hover": {
                      color: "#a6af5f5f56a6",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: isActive ? "100%" : "0%",
                      height: "2px",
                      bottom: "-6px",
                      left: 0,
                      bgcolor: "#f5f5f5",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
