import React from "react";
import { Box, TextField } from "@mui/material";
import { AuthorHandler, StringGenerator } from ".";

export default function WebsiteReference() {
  const [authors, setAuthors] = React.useState(["Harvard University"]);
  const [year, setYear] = React.useState<number>();
  const [title, setTitle] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [url, setUrl] = React.useState("");

  function generateResult() {
    const result = `${authors.join(". ")} (${year || 2018}). ${
      title || "Reference Guide"
    }. ${website || "Harvard.org"}. Retrieved from ${
      url || "https://harvard.org"
    }`;
    return result;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          marginBlock: { xs: 1, md: 0 },
        }}
      >
        <AuthorHandler
          title="Author/Org"
          authors={authors}
          setAuthors={setAuthors}
        />
        <TextField
          label="Year"
          variant="outlined"
          size="small"
          value={year}
          placeholder="2018"
          type="number"
          onChange={(e) => setYear(Number(e.target.value))}
        />
        <TextField
          label="Title"
          variant="outlined"
          size="small"
          value={title}
          placeholder="The Art of Delivery"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Website"
          variant="outlined"
          size="small"
          value={website}
          placeholder="Google"
          onChange={(e) => setWebsite(e.target.value)}
        />
        <TextField
          label="URL"
          variant="outlined"
          size="small"
          value={url}
          placeholder="https://google.com"
          onChange={(e) => setUrl(e.target.value)}
        />
      </Box>
      <StringGenerator text={generateResult()} />
    </>
  );
}
