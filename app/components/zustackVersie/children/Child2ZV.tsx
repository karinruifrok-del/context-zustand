'use client'

import { useUserAgeStore } from '@/app/store/useUserAgeStore'
import { ValueDisplay } from '../../ui/StyledUI'

export default function Child2() {
  const age = useUserAgeStore((state) => state.age)
  console.log(`Child2 re-renderd, age: ${age}`)
  return <ValueDisplay>Currently {age} years old</ValueDisplay>
}
