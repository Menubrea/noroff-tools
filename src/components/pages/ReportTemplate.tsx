import React from "react";
import { Box, TextField } from "@mui/material";
import { Remarkable } from "remarkable";

const md = new Remarkable();

const ReportTemplatePage = () => {
  const [markdown, setMarkdown] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarkdown(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 2,
        width: "1000px",
        margin: "auto",
        alignItems: "center",
      }}
    >
      <Box>
        <TextField
          id="outlined-multiline-static"
          label="Start writing your report here..."
          multiline
          value={markdown}
          onChange={handleChange}
          rows={30}
          fullWidth
          sx={{
            height: "80vh",
            backgroundColor: "#fafafa",
          }}
        />
      </Box>
      <Box
        sx={{
          boxShadow: "0 0 10px 1px #1515151b",
          backgroundColor: "#fafafa",
          height: "80vh",
        }}
        dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
      ></Box>
    </Box>
  );
};

export default ReportTemplatePage;
