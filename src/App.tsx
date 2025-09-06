import React from "react";
import WordForm from "./components/WordForm";
import useDictionary from "./service/useDictionary";
import DefinitionCard from "./components/DefinitionCard";
import { Box, CircularProgress, Stack } from "@mui/material";
import ErrorCard from "./components/ErrorCard";

function App() {
  const { data, loading, error, search } = useDictionary();

  return (
    <div className="App">
      <Box display="flex" justifyContent="center">
        <WordForm loading={loading} onSubmit={(word) => search(word)} />
      </Box>

      {loading && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}

      {!loading && error && (
        <Box display="flex" justifyContent="center">
          <ErrorCard message={error} />
        </Box>
      )}

      {!loading && !error && data && data.length > 0 && (
        <Stack direction="column" spacing={2} alignItems="center">
          {data.map((entry) => (
            <DefinitionCard data={entry} />
          ))}
        </Stack>
      )}
    </div>
  );
}

export default App;
