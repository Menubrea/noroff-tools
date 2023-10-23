import React from "react";
import { AuthorHandler, StringGenerator } from ".";
import { Box, TextField } from "@mui/material";

export default function BookReference() {
  const [authors, setAuthors] = React.useState(["Nordmann, O"]);
  const [year, setYear] = React.useState<number>();
  const [title, setTitle] = React.useState("");
  const [publisher, setPublisher] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [pages, setPages] = React.useState("");

  function generateResult() {
    let renderPages = pages ? ", " + "pp." + pages + "." : "";
    let renderPlace = place ? ": " + place : "";

    const result = `${authors.join(". ")} (${year || 2019}). ${
      title || "The Art of Delivery"
    }. ${publisher || "ABC Publications"}${renderPlace}${renderPages}`;
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
          label="Publisher"
          variant="outlined"
          size="small"
          value={publisher}
          placeholder="Publisher"
          onChange={(e) => setPublisher(e.target.value)}
        />
        <TextField
          label="Place"
          size="small"
          variant="outlined"
          value={place}
          placeholder="Oslo"
          onChange={(e) => setPlace(e.target.value)}
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
