"use client";

import { useFormPrompt } from "@/hooks";
import Image from "next/image";

export interface IFormProps {}

export default function Form(props: IFormProps) {
  const {
    generateContent,
    getPrompt,
    snippet,
    keywords,
    prompt,
    isLoading,
    resetForm,
  } = useFormPrompt();

  return (
    <section className="flex">
      {snippet.length > 0 || keywords.length > 0 ? (
        isLoading ? (
          <div>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>{" "}
            Loading...
          </div>
        ) : (
          <aside>
            <button
              className="bg-slate-500 text-white p-2 mb-4"
              onClick={resetForm}
            >
              Go back
            </button>
            <p>{snippet && snippet}</p>
            {keywords.length > 0 &&
              keywords.map((keyword: string) => (
                <li key={keyword}>{keyword}</li>
              ))}
          </aside>
        )
      ) : (
        <aside className="max-w-md bg-slate-500 p-6 rounded-md">
          <div className="flex justify-center pb-2">
            <Image alt="Icon" src="/icon.svg" height="75" width="75" />
          </div>
          <h1 className="text-3xl text-white">Branding Generator</h1>
          <h4 className="pb-4 text-white">Your AI branding assistant</h4>
          <p className=" text-white">
            Provide some details about your brand and I will generate content
            and keywords for you!
          </p>
          <form onSubmit={generateContent} className="flex flex-col">
            <input
              type="text"
              name="prompt-input"
              className="my-4"
              value={prompt}
              onChange={getPrompt}
              minLength={3}
              maxLength={12}
              placeholder="A fresh take on green tea"
            />
            <label className="text-white pb-4">{prompt.length}/12</label>
            <button
              type="submit"
              disabled={isLoading || prompt.length <= 0}
              className="disabled:opacity-50 text-white bg-slate-700 rounded-md p-4"
            >
              Generate copy!
            </button>
          </form>
        </aside>
      )}
    </section>
  );
}
