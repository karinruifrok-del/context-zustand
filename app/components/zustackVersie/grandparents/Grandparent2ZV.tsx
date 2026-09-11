"use client"

import { useUserAgeStore } from "@/app/store/useUserAgeStore"

export default function Grandparent2() {
  const user = useUserAgeStore((state) => state.user)
  const age = useUserAgeStore((state) => state.age)
  const setUser = useUserAgeStore((state) => state.setUser)
  const setAge = useUserAgeStore((state) => state.setAge)

return (
    <div>
      <h3>Grandparent 2</h3>
      <label>
        User:{' '}
        <input
          value={user}
          type="string"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <br />
      <label>
        Age:{' '}
        <input
          value={age}
          type="number"
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </label>
    </div>
  )}
