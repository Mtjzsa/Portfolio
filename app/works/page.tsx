import { Box, Card, CardContent, Typography } from "@mui/material";

const works = [
  {
    title: "Önmegismerés",
    description:
      "A clean, professional website designed to feel calm, trustworthy, and accessible. The project included a custom layout, responsive design, and a structure tailored to clearly present services and contact options.",
    techStack: ["Nextjs", "Google Services"],
    img: "https://plus.unsplash.com/premium_photo-1681566925312-948c8a896b37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VicGFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "DreamParking",
    description: "A profesionel website designed for an engineering company. Lorem ipsum dolores anaojfgn  asja aja asan ",
    techStack: ["Nextjs", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const WorkCard = ({ title, description, techStack }: { title: string; description: string; techStack: string[] }) => (
  <Card sx={{ mb: 3, maxWidth: 600 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2 }}>
        {description}
      </Typography>

      <Typography variant="caption">Tech stack: {techStack.join(", ")}</Typography>
    </CardContent>
  </Card>
);

const Works = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 4, md: 10 },
        overflow: "hidden",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", maxWidth: "80%" }}>
        Here are some of the projects we’ve worked on. Each project reflects our focus on clarity, performance, and real-world usability.
      </Typography>

      <Box className="flex gap-10 mt-20">
        {works.map((work) => (
          <WorkCard key={work.title} {...work} />
        ))}
      </Box>
    </Box>
  );
};

export default Works;
