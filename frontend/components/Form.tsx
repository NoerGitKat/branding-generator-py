"use client"

import { useFormPrompt } from "@/hooks"

export interface IFormProps {}

export default function Form(props: IFormProps) {
  const { generateContent, getPrompt } = useFormPrompt()
  return (
    <section>
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
            onChange={getPrompt}
            minLength={3}
            maxLength={12}
            placeholder="A fresh take on green tea"
          />
          <button type="submit" className="">
            Generate copy!
          </button>
        </form>
      </aside>
    </section>
  )
}
