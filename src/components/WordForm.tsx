import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";

interface Props {
  onSubmit: (word: string) => void;
  loading: boolean;
}

const WordForm = (props: Props) => {
  const { onSubmit, loading } = props;
  const [input, setInput] = useState("");

  return (
    <Box component="section" sx={{ p: 10 }}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Enter Word"
          variant="outlined"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          data-testid="word-input"
        />
        <Button
          disabled={loading}
          variant="contained"
          onClick={() => onSubmit(input)}
          data-testid="submit-button"
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default WordForm;
