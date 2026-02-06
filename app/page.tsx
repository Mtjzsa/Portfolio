import { Box, Button, Divider, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 4, md: 10 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1400px",
          gap: { xs: 6, md: 10, lg: 16 },
        }}
      >
        <Box sx={{ flex: "0 0 35%", maxWidth: "380px" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#f5f5f5",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            We're two programmers who love turning ideas into clean, functional software. Small team, full focus, and a strong eye for quality.
          </Typography>
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: "#f5f5f5",
            opacity: 0.7,
            height: "60vh",
            alignSelf: "center",
            mx: { xs: 1, md: 2, lg: 3 },
          }}
        />

        <Box
          sx={{
            flex: "1 1 80%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-start",
            maxWidth: "800px",
          }}
        >
          <Typography variant="h4" sx={{ color: "#f5f5f5" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsa error laudantium
          </Typography>

          <Button
            variant="outlined"
            sx={{
              color: "#f5f5f5",
              borderColor: "#f5f5f5",
              textTransform: "none",
              px: 3,
              py: 1,
              borderRadius: "999px",
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                color: "#000",
                borderColor: "#f5f5f5",
              },
            }}
          >
            Projects
          </Button>

          <Typography variant="h4" sx={{ color: "#f5f5f5", mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsa error laudantium
          </Typography>

          <Button
            variant="outlined"
            sx={{
              color: "#f5f5f5",
              borderColor: "#f5f5f5",
              textTransform: "none",
              px: 3,
              py: 1,
              borderRadius: "999px",
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                color: "#000",
                borderColor: "#f5f5f5",
              },
            }}
          >
            About us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
