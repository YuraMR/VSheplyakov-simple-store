"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { ROUTES } from "@/app/components/Header/routes";

const Error = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray"
      }}
    >
      <Typography variant="h2" gutterBottom>
        An error occurred
      </Typography>
      <Typography variant="h4">
        Failed to fetch data. Try again later.
      </Typography>
      <Link href={ROUTES.HOME.href} style={{ marginTop: "30px" }}>
        <Button variant="contained">Return Home page</Button>
      </Link>
    </Box>
  );
};

export default Error;
