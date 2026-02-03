import { Box, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        color: "grey.300",
        py: { xs: 6, md: 8 },
        borderTop: "1px solid",
        borderColor: "grey.800",
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto", px: { xs: 3, sm: 6, md: 10, lg: 12 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 6,
          }}
        >
          {/* Brand */}
          <Box>
            <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
              LOGO
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 320, opacity: 0.8 }}>
              Creating meaningful digital experiences with passion and precision.
            </Typography>
          </Box>

          {/* Navigation */}
          <Box>
            <Typography variant="subtitle1" fontWeight="600" gutterBottom>
              Navigation
            </Typography>
            <Box component="nav" sx={{ display: "flex", flexDirection: "column", gap: 1.5, maxWidth: "60px" }}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#a6a6a6" } }}>
                  Home
                </Typography>
              </Link>
              <Link href="/about" style={{ textDecoration: "none" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#a6a6a6" } }}>
                  About us
                </Typography>
              </Link>
              <Link href="/projects" style={{ textDecoration: "none" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#a6a6a6" } }}>
                  Projects
                </Typography>
              </Link>
              <Link href="/experience" style={{ textDecoration: "none" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#a6a6a6" } }}>
                  Experience
                </Typography>
              </Link>
            </Box>
          </Box>

          {/* Contact */}
          <Box>
            <Typography variant="subtitle1" fontWeight="600" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, fontSize: "0.95rem" }}>
              <div>
                <strong>Email:</strong> mate.jozsa03@gmail.com
              </div>
              <div>
                <strong>Phone:</strong> +36 20 543 7181
              </div>
              <div>
                <strong>Location:</strong> Budapest, Hungary
              </div>

              {/* <Box sx={{ mt: 2 }}>
                <MuiLink href="mailto:hello@yourdomain.com" color="primary.light" underline="hover" sx={{ fontWeight: 500 }}>
                  Send a message →
                </MuiLink>
              </Box> */}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: "1px solid",
            borderColor: "grey.800",
            textAlign: "center",
            fontSize: "0.875rem",
            opacity: 0.7,
          }}
        >
          © {new Date().getFullYear()} JZS-DRGCZ. All rights reserved.
        </Box>
      </Box>
    </Box>
  );
}
