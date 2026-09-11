"use client"
import { useUserAgeStore } from "@/app/store/useUserAgeStore";

export default function Child1() {
    const user = useUserAgeStore((state) => state.user)
      console.log(`Child1 re-renderd, user: ${user}`)
  return <p>User: {user}</p>
}