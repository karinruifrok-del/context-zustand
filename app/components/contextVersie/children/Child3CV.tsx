'use client'

import { useContext } from 'react'
import { NameValueContext } from '@/app/context/NameValueContext'

export default function Child3() {
  const { name, value } = useContext(NameValueContext)
  console.log(`Child3 re-renderd, name: ${name}`)
  console.log(`Child3 re-renderd, value: ${value}`)
  return (
    <p>
      Name: {name}, Value: {value}
    </p>
  )
}
