interface Phonetic {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: {
    name: string;
    url: string;
  };
}

interface Definition {
  definition: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms? : string[];
  antonyms?: string[];
}

export interface DictionaryEntry {
  word: string;
  phonetic?: string;
  phonetics?: Phonetic[];
  meanings: Meaning[];
  license?: {
    name: string;
    url: string;
  };
  sourceUrls?: string[];
}

export interface UseDictionaryResult {
  data: DictionaryEntry[] | null;
  loading: boolean;
  error: string | null;
  search: (word: string) => Promise<void>;
}
