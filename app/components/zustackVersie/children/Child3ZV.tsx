'use client'

import { useNameValueStore } from '@/app/store/useNameValueStore'

export default function Child3() {
  const name = useNameValueStore((state) => state.name)
  const value = useNameValueStore((state) => state.value)
  console.log(`Child3 re-renderd, name: ${name}`)
  console.log(`Child3 re-renderd, value: ${value}`)
  return (
    <p>
      Name: {name}, Value: {value}
    </p>
  )
}
