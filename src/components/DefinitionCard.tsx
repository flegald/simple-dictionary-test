import React from "react";
import { DictionaryEntry } from "../types/DictionaryResponse";
import { Card, CardContent, CardHeader, Stack } from "@mui/material";

interface Props {
  data: DictionaryEntry;
}

const DefinitionCard = (props: Props) => {
  const { data } = props;

  return (
    <Card sx={{ width: "50%" }}>
      <CardHeader title={data.word} />
      <CardContent>
        <Stack direction="column" spacing={2}>
          {data.meanings.map((meaning) => (
            <Stack direction="column" spacing={1}>
              <strong>{meaning.partOfSpeech}</strong>
              <ul>
                {meaning.definitions.map((definition) => (
                  <li>{definition.definition}</li>
                ))}
              </ul>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DefinitionCard;
