"use client";
import { ChangeEvent, FormEvent, useState } from "react";

function useFormPrompt() {
  const [prompt, setPrompt] = useState<string>("");
  const [snippet, setSnippet] = useState<string>("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPrompt = function (event: ChangeEvent<HTMLInputElement>) {
    setPrompt(() => event.target.value);
  };

  const generateContent = async function (event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const snippetRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/generate/snippet?prompt=${prompt}`
      );
      const { snippet } = await snippetRes.json();
      setSnippet(snippet);
    } catch (error) {
      console.error(`Couldn't make snippet API call! ${error}`);
    }

    try {
      const keywordsRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/generate/keywords?prompt=${prompt}`
      );
      const { keywords } = await keywordsRes.json();

      setKeywords(keywords);
    } catch (error) {
      console.error(`Couldn't make keywords API call! ${error}`);
    }
    setIsLoading(false);
    setPrompt("");
  };

  const resetForm = function () {
    setSnippet("");
    setKeywords([]);
  };

  return {
    prompt,
    generateContent,
    getPrompt,
    snippet,
    keywords,
    isLoading,
    resetForm,
  };
}

export default useFormPrompt;
