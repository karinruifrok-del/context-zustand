'use client'
import { useUserAgeStore } from '@/app/store/useUserAgeStore'
import { ValueDisplay } from '../../ui/StyledUI'

export default function Child1() {
  const user = useUserAgeStore((state) => state.user)
  console.log(`Child1 re-renderd, user: ${user}`)
  return <ValueDisplay>Meet {user}</ValueDisplay>
}
