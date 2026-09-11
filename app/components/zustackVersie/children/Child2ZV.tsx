'use client'

import { useNameValueStore } from '@/app/store/useNameValueStore'

export default function Child2() {
  const value = useNameValueStore((state) => state.value)
  console.log(`Child2 re-renderd, value: ${value}`)
  return <p>Value: {value}</p>
}
