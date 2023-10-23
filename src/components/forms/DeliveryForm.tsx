import {
  Box,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import { StringGenerator } from "..";

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
  const [firstLetterSurname, setFirstLetterSurname] = useState("N");
  const storedData = localStorage.getItem("data");
  const initialData = storedData ? JSON.parse(storedData) : {};

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const initialData = storedData ? JSON.parse(storedData) : {};
    const { weekNum, subject, firstName, lastName } = initialData;

    setWeekNum(weekNum || 0);
    setSubject(subject || subjects[0].code);
    setFirstName(firstName || "Ola");
    setFirstLetterSurname(lastName || "N");
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
            marginBottom: 6,
            marginTop: 2,
          }}
          component={"h1"}
        >
          Delivery Name Generator
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          marginBlock: { xs: 1, md: 0 },
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
      <StringGenerator text={result} />
    </Box>
  );
};

export default DeliveryForm;
