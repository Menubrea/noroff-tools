import {
  Box,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Alert,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import React, { useEffect, useState } from "react";

const subjects = [
  {
    name: "Introduction Course",
    code: "IC",
  },
  {
    name: "Design Foundations",
    code: "DF",
  },
  {
    name: "Design Styles",
    code: "DS",
  },
  {
    name: "Design Systems",
    code: "DSS",
  },
  {
    name: "Semester Project",
    code: "SP",
  },
  {
    name: "Template Design",
    code: "TD",
  },
  {
    name: "Prototyping",
    code: "PT",
  },
  {
    name: "Evaluative Research",
    code: "ER",
  },
  {
    name: "Exam Project",
    code: "EP",
  },
  {
    name: "Portfolio",
    code: "IKP",
  },
];

const DeliveryForm = () => {
  const [weekNum, setWeekNum] = useState(1);
  const [subject, setSubject] = useState(subjects[0].code);
  const [firstName, setFirstName] = useState("Ola");
  const [firstLetterSurname, setFirstLetterSurname] = useState("o");
  const [wasCopied, setWasCopied] = useState(false);
  const storedData = localStorage.getItem("data");
  const initialData = storedData ? JSON.parse(storedData) : {};

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const initialData = storedData ? JSON.parse(storedData) : {};
    const { weekNum, subject, firstName, lastName } = initialData;

    setWeekNum(weekNum || 0);
    setSubject(subject || subjects[0].code);
    setFirstName(firstName || "Ola");
    setFirstLetterSurname(lastName || "o");
  }, []);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>,
    key: string,
    setState: React.Dispatch<React.SetStateAction<string | number>>
  ): void {
    const newData = { ...initialData, [key]: event.target.value };
    setState(event.target.value);
    localStorage.setItem("data", JSON.stringify(newData));
  }

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

  let weekNumString;
  if (weekNum && weekNum < 10) {
    weekNumString = "0" + weekNum;
  } else if (weekNum === 0) {
    weekNumString = "00";
  } else {
    weekNumString = weekNum;
  }

  let result = `w${weekNumString}.${subject.toLowerCase()}.${firstName.toLowerCase()}.${firstLetterSurname.toLowerCase()}`;

  return (
    <Box>
      <Box sx={{ marginBottom: 2, position: "relative" }}>
        <Typography
          component={"h1"}
          fontSize={32}
          fontWeight={700}
          marginBottom={4}
          color={"black"}
          textAlign={"center"}
        >
          Delivery Name Generator
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TextField
          fullWidth
          value={weekNum}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e, "weekNum", (value) => setWeekNum(Number(value)))
          }
          label="Week"
          variant="outlined"
          type="number"
          inputProps={{ min: 0, max: 40 }}
        />
        <FormControl fullWidth>
          <InputLabel id="subject">Subject</InputLabel>
          <Select
            labelId="subject"
            label="Subject"
            value={subject}
            onChange={(e: SelectChangeEvent<string>) =>
              handleChange(e, "subject", (value) => setSubject(String(value)))
            }
          >
            {subjects.map((subject) => (
              <MenuItem value={subject.code}>{subject.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e, "firstName", (value) => setFirstName(String(value)))
          }
          inputProps={{ minLength: 1 }}
        />
        <TextField
          fullWidth
          label="Surname"
          variant="outlined"
          title="Please only enter the first letter of your surname"
          value={firstLetterSurname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e, "lastName", (value) =>
              setFirstLetterSurname(String(value))
            )
          }
          inputProps={{ maxLength: 1 }}
        />
      </Box>
      <Box
        sx={{
          boxShadow: "0 0 10px 1px #00000029",
          color: "black",
          padding: 2,
          borderRadius: 2,
          display: "flex",
          justifyContent: "space-between",
          gap: 4,
          margin: "1em auto",
          alignItems: "center",
        }}
      >
        <Typography>
          <Typography width={"max-content"} variant="h6" component={"p"}>
            Generated string:
          </Typography>
        </Typography>
        <Typography sx={{ width: "100%", textAlign: "right" }} fontSize={24}>
          {result}
        </Typography>
        <Button
          variant="contained"
          disabled={wasCopied}
          color={wasCopied ? "success" : "primary"}
          onClick={() => copyToClipboard(result)}
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

export default DeliveryForm;
