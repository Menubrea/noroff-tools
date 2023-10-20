import React from "react";
import { Link, Button } from "@mui/material";

interface ICustomLink {
  href: string;
  children: React.ReactNode;
}

const CustomLink = ({ children, href }: ICustomLink) => {
  return (
    <Link href={href} sx={{ textDecoration: "none" }}>
      <Button variant="outlined" color="primary">
        {children}
      </Button>
    </Link>
  );
};

export default CustomLink;
