import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box className="flex flex-row justify-center items-center h-screen gap-10 p-10 text-center">
      <Box className="max-w-1/2 flex flex-col gap-20 items-center justify-center">
        <Box>
          <Typography variant="h2">Dergecz Ákos</Typography>
          <Typography variant="h6">Age: {new Date().getFullYear() - 2002}</Typography>
        </Box>

        <Typography variant="body1" className="max-w-1/2">
          Ty Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dicta voluptas similique nulla, expedita beatae aut rerum atque nostrum
          autem temporibus assumenda facere magni illo explicabo unde quod recusandae odio. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Ut aliquam voluptas nihil reiciendis rerum quia consectetur delectus ullam animi, atque minus obcaecati expedita iste, in commodi dolores?
          Esse, eligendi rerum.
        </Typography>

        <Typography>Tech Stack</Typography>
      </Box>
      <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "#a6a6a6" }}></Divider>

      <Box className="max-w-1/2 flex flex-col gap-20 items-center justify-center">
        <Box>
          <Typography variant="h2">Józsa Máté Szabolcs</Typography>
          <Typography variant="h6">Age: {new Date().getFullYear() - 2003}</Typography>
        </Box>

        <Typography variant="body1" className="max-w-1/2">
          Ty Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dicta voluptas similique nulla, expedita beatae aut rerum atque nostrum
          autem temporibus assumenda facere magni illo explicabo unde quod recusandae odio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iure nemo reprehenderit neque et, quam odit esse veritatis nostrum nulla dolor voluptas, alias voluptatem temporibus incidunt cumque modi!
          Modi, quo veniam.
        </Typography>

        <Typography>Tech Stack</Typography>
      </Box>
    </Box>
  );
};

export default page;
