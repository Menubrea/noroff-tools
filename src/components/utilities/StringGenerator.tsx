import { Alert, Box, Button, Typography } from "@mui/material";
import React from "react";

type StringGeneratorProps = {
  text: string;
};

const StringGenerator = ({ text }: StringGeneratorProps) => {
  const [wasCopied, setWasCopied] = React.useState(false);

  function copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setWasCopied(true);
        setTimeout(() => {
          setWasCopied(false);
        }, 3000);
      })
      .catch((error) => {
        alert("Error copying text to clipboard" + error);
      });
  }
  return (
    <Box>
      <Box
        sx={{
          boxShadow: "0 0 10px 1px #00000029",
          padding: 2,
          borderRadius: 2,
          display: "flex",
          justifyContent: "space-between",
          gap: 4,
          margin: "1em auto",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography sx={{ width: "100%", textAlign: "right" }} fontSize={18}>
          {text}
        </Typography>
        <Button
          variant="contained"
          disabled={wasCopied}
          color={wasCopied ? "success" : "primary"}
          onClick={() => copyToClipboard(text)}
        >
          {wasCopied ? "Copied" : "Copy"}
        </Button>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Alert severity={wasCopied ? "success" : "info"}>
          {wasCopied
            ? "Copied to clipboard"
            : 'Click "COPY to copy to clipboard'}
        </Alert>
      </Box>
    </Box>
  );
};

export default StringGenerator;
