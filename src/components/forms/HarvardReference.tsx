import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { BookReference, JournalReference, WebsiteReference } from "..";

const references = [
  {
    value: "Book",
  },
  {
    value: "Website",
  },
  {
    value: "Journal",
  },
];

const HarvardReference = () => {
  const [reference, setReference] = React.useState("Book");

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          color: "#2d5391",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: 8,
          width: "fit-content",
          marginX: "auto",
          marginY: 4,
        }}
        component={"h1"}
      >
        Harvard Citation Generator
      </Typography>
      <FormControl
        sx={{
          width: 250,
          margin: "2em auto 4em",
          boxShadow: "0 0 10px 1px #00000010",
          padding: 2,
          borderRadius: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <InputLabel id="reference">What are you referencing?</InputLabel>
        <Select
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          labelId="reference"
          label="Reference"
          variant="outlined"
          color="primary"
        >
          {references.map((r) => (
            <MenuItem value={r.value}>{r.value}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {reference === "Book" && <BookReference />}
      {reference === "Website" && <WebsiteReference />}
      {reference === "Journal" && <JournalReference />}
    </Box>
  );
};

export default HarvardReference;
