import { ChangeEvent, FormEvent, useState } from "react"

function useFormPrompt() {
  const [prompt, setPrompt] = useState<string>("")

  const getPrompt = function (event: ChangeEvent<HTMLInputElement>) {
    setPrompt(() => event.target.value)
  }

  const generateContent = async function (event: FormEvent) {
    event.preventDefault()
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/generate/snippet?prompt=${prompt}`
      )
      const json = await response.json()

      console.log("json is what", json)
    } catch (error) {
      console.error(`Couldn't make API call! ${error}`)
    }
  }

  return { prompt, generateContent, getPrompt }
}

export default useFormPrompt
