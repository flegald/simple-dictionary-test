import { useCallback, useState } from "react";
import {
  DictionaryEntry,
  UseDictionaryResult,
} from "../types/DictionaryResponse";

const useDictionary = (): UseDictionaryResult => {
  const [data, setData] = useState<DictionaryEntry[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (word: string) => {
    if (!word) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Word not found");
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      }

      const dataJSON: DictionaryEntry[] = await response.json();
      setData(dataJSON);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(data);
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    search,
  };
};

export default useDictionary;
