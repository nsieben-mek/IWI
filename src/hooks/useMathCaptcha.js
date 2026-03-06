import { useState, useCallback } from 'react'

function generateTask() {
  const a = Math.floor(Math.random() * 10) + 1
  const b = Math.floor(Math.random() * 10) + 1
  return { a, b, answer: a + b }
}

export default function useMathCaptcha() {
  const [task, setTask] = useState(generateTask)
  const [input, setInput] = useState('')

  const isCorrect = parseInt(input, 10) === task.answer

  const reset = useCallback(() => {
    setTask(generateTask())
    setInput('')
  }, [])

  return { task, input, setInput, isCorrect, reset }
}
