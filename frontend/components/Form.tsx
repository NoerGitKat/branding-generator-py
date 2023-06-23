"use client"

import { useFormPrompt } from "@/hooks"

export interface IFormProps {}

export default function Form(props: IFormProps) {
  const { generateContent, getPrompt, snippet, keywords, prompt, isLoading } =
    useFormPrompt()

  return (
    <section>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <aside>
          <p>{snippet && snippet}</p>
          {keywords.length > 0 &&
            keywords.map((keyword: string) => <li key={keyword}>{keyword}</li>)}
        </aside>
      )}
      <aside>
        <div>logo</div>
        <h1>Branding Generator</h1>
        <sub>Your AI branding assistant</sub>
      </aside>
      <aside>
        <p>
          Provide some details about your brand and I will generate content and
          keywords for you!
        </p>
        <form onSubmit={generateContent}>
          <input
            type="text"
            name="prompt-input"
            value={prompt}
            onChange={getPrompt}
            minLength={3}
            maxLength={12}
            placeholder="A fresh take on green tea"
          />
          <label>{prompt.length}/12</label>
          <button type="submit" disabled={isLoading || prompt.length <= 0}>
            Generate copy!
          </button>
        </form>
      </aside>
    </section>
  )
}
