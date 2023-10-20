import { DeliveryForm } from "..";
import { Box } from "@mui/material";

const CodeGeneratorPage = () => {
  return (
    <Box
      sx={{
        padding: 4,
        borderRadius: 2,
        boxShadow: "0 0 10px 1px #00000029",
        backgroundColor: "#fafafa",
        width: { md: "100%", lg: "800px" },
        overflow: "scroll",
        maxHeight: "calc(80vh - 4rem)",
      }}
    >
      <DeliveryForm />
    </Box>
  );
};

export default CodeGeneratorPage;
