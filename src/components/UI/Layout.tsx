import React from "react";
import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { CustomLink } from "../links";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box
        component={"header"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingX: { xs: 1, lg: 2 },
          paddingBottom: 2,
          width: { xs: "calc(100% - 1rem)", lg: "calc(100% - 2rem)" },
          borderBottom: "1px solid #2d539118",
          textAlign: "left",
        }}
      >
        <Typography
          variant="body1"
          component="div"
          sx={{
            color: "#2d5391",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: 8,
          }}
        >
          Student Toolbox
        </Typography>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <CustomLink href="/">Name Generator</CustomLink>
          <CustomLink href="/harvardize-it">Citation Generator</CustomLink>
        </Box>
      </Box>

      <Box component={"main"}>{children}</Box>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          paddingX: { xs: 1, lg: 2 },
          paddingY: 1,
          width: { xs: "calc(100% - 1rem)", lg: "calc(100% - 2rem)" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        component={"footer"}
      >
        <Typography variant="body2" marginRight={1}>
          By Truls Haakenstad &copy; 2023 |
        </Typography>
        <Link
          sx={{
            display: "flex",
            gap: 0.5,
            alignItems: "center",
            fontWeight: 700,
            textDecoration: "none",
          }}
          href="https://github.com/Menubrea/noroff-tools"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon sx={{ fontSize: 18 }} />
          Github
        </Link>
      </Box>
    </>
  );
};

export default Layout;
