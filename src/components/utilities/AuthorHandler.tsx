import { Box, Button, TextField } from "@mui/material";
import React from "react";

type AuthorsProps = {
  authors: string[];
  title: string;
  setAuthors: (authors: string[]) => void;
};

const AuthorHandler = ({ ...props }: AuthorsProps) => {
  const { authors, setAuthors, title } = props;
  const index = authors.length - 1;

  React.useEffect(() => {
    const element = document.getElementById(title + index) as HTMLInputElement;
    if (element) {
      element.focus();
      element.select();
    }
  }, []);

  function handleAddAuthor() {
    setAuthors([...authors, ""]);
  }

  function removeAuthor(index: number) {
    const updatedAuthors = [...authors];
    updatedAuthors.splice(index, 1);
    setAuthors(updatedAuthors);
  }

  function handleChangeAuthor(index: number, value: string) {
    const updatedAuthors = [...authors];
    updatedAuthors[index] = value;
    setAuthors(updatedAuthors);
  }

  return (
    <Box>
      {authors.map((author, index) => (
        <Box
          sx={{ marginBottom: ".5rem", display: "flex", flexDirection: "row" }}
        >
          <TextField
            fullWidth
            key={index}
            id={title + index}
            label={title + " " + (index + 1)}
            variant="outlined"
            value={author}
            size="small"
            placeholder="Nordmann, O"
            onChange={(e) => handleChangeAuthor(index, e.target.value)}
          />
          {index > 0 && (
            <Button
              size="small"
              sx={{ fontSize: ".7rem", marginLeft: ".5rem" }}
              color="error"
              onClick={() => removeAuthor(index)}
            >
              Remove
            </Button>
          )}
        </Box>
      ))}
      <Button onClick={handleAddAuthor}>Add {title}</Button>
    </Box>
  );
};

export default AuthorHandler;
