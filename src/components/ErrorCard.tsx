import React from "react";
import { Box, Card } from "@mui/material";

interface Props {
  message: string;
}

const ErrorCard = (props: Props) => {
  const { message } = props;

  return (
    <Card sx={{ width: "50%" }}>
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <strong>{message}</strong>
      </Box>
    </Card>
  );
};

export default ErrorCard;
