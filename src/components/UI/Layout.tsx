import React from "react";
import { Box, Typography, Link } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import GitHubIcon from "@mui/icons-material/GitHub";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box
        component={"header"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#fafafa",
          padding: 2,
          top: 0,
          left: 0,
          position: "fixed",
          width: "calc(100% - 2rem)",
          boxShadow: "0 0 10px 1px #00000019",
        }}
      >
        <Typography
          fontSize={20}
          fontWeight={900}
          component="div"
          sx={{ display: "flex", gap: 1.5, alignItems: "center" }}
        >
          <ConstructionIcon
            color="primary"
            sx={{
              padding: 0.5,
              borderRadius: 1,
              boxShadow: "0 0 10px 1px #00000010",
            }}
          />
          Delivery Name Generator
        </Typography>
        {/* <Box sx={{ display: "flex", gap: 2 }}>
          <CustomLink href="/">Name Generator</CustomLink>
          <CustomLink href="/report-template">Report Template</CustomLink>
        </Box> */}
      </Box>

      <Box component={"main"}>{children}</Box>
      <Box
        sx={{
          backgroundColor: "#fafafa",
          padding: 2,
          bottom: 0,
          left: 0,
          position: "fixed",
          width: "calc(100% - 2rem)",
          display: "flex",
          justifyContent: "center",
        }}
        component={"footer"}
      >
        <Box marginRight={1}>By Truls Haakenstad &copy; 2023 |</Box>
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
          <GitHubIcon sx={{ fontSize: 20 }} />
          Github
        </Link>
      </Box>
    </>
  );
};

export default Layout;
