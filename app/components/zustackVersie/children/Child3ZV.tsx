'use client'

import { useUserAgeStore } from '@/app/store/useUserAgeStore'
import { ValueDisplay } from '../../ui/StyledUI'

export default function Child3() {
  const user = useUserAgeStore((state) => state.user)
  const age = useUserAgeStore((state) => state.age)
  console.log(`Child3 re-renderd, user: ${user}`)
  console.log(`Child3 re-renderd, age: ${age}`)
  return (
    <ValueDisplay>
      {user} is {age} years old.
    </ValueDisplay>
  )
}
