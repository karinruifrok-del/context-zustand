'use client'

import { useUserAgeStore } from '@/app/store/useUserAgeStore'

export default function Child3() {
  const user = useUserAgeStore((state) => state.user)
  const age = useUserAgeStore((state) => state.age)
  console.log(`Child3 re-renderd, user: ${user}`)
  console.log(`Child3 re-renderd, age: ${age}`)
  return (
    <p>
      User: {user}, Age: {age}
    </p>
  )
}
