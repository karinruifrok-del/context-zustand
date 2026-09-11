'use client'

import { useUserAgeStore } from '@/app/store/useUserAgeStore'

export default function Child2() {
  const age = useUserAgeStore((state) => state.age)
  console.log(`Child2 re-renderd, age: ${age}`)
  return <p>Age: {age}</p>
}
