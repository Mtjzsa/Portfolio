"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Typography } from "@mui/material";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        px: { xs: 3, sm: 6, md: 10, lg: 12 },
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: { xs: 2.5, md: 3.5 },
          maxWidth: "1400px",
          mx: "auto",
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
