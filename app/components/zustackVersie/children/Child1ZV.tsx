"use client"
import { useNameValueStore } from "@/app/store/useNameValueStore";

export default function Child1() {
    const name = useNameValueStore((state) => state.name)
      console.log(`Child1 re-renderd, name: ${name}`)
  return <p>Name: {name}</p>
}