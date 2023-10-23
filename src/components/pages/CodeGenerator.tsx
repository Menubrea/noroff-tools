import { DeliveryForm } from "..";
import { Box } from "@mui/material";

const CodeGeneratorPage = () => {
  return (
    <Box
      sx={{
        padding: { xs: 2, lg: 4 },
        borderRadius: 2,
      }}
    >
      <DeliveryForm />
    </Box>
  );
};

export default CodeGeneratorPage;
