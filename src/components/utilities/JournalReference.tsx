import { Box, TextField } from "@mui/material";
import React from "react";
import { AuthorHandler, StringGenerator } from ".";

export default function JournalReference() {
  const [authors, setAuthors] = React.useState(["Nordmann, O"]);
  const [year, setYear] = React.useState<number>();
  const [title, setTitle] = React.useState("");
  const [journal, setJournal] = React.useState("");
  const [volume, setVolume] = React.useState<number>();
  const [issue, setIssue] = React.useState<number>(0);
  const [pages, setPages] = React.useState("");

  function generateResult() {
    let renderVolume = volume ? `: ${volume}` : "";
    let renderIssue = volume && issue ? `(${issue})` : "";
    let renderPages = pages ? ", " + "pp." + pages + "." : "";

    const result = `${authors.join(". ")} (${year || 2018}). ${
      title || "The Art of Reference"
    }. ${
      journal || "Reference Magazine"
    }${renderVolume}${renderIssue}${renderPages}`;
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
          title="Author"
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
          label="Journal"
          variant="outlined"
          size="small"
          value={journal}
          placeholder="Journal of Delivery"
          onChange={(e) => setJournal(e.target.value)}
        />
        <TextField
          label="Volume"
          variant="outlined"
          size="small"
          value={volume}
          placeholder="1"
          type="number"
          onChange={(e) => setVolume(Number(e.target.value))}
        />
        <TextField
          label="Issue"
          variant="outlined"
          size="small"
          value={issue}
          placeholder="1"
          type="number"
          onChange={(e) => setIssue(Number(e.target.value))}
        />
        <TextField
          label="Pages"
          variant="outlined"
          size="small"
          value={pages}
          placeholder="1-10"
          onChange={(e) => setPages(e.target.value)}
        />
      </Box>
      <StringGenerator text={generateResult()} />
    </>
  );
}
