'use client'

import { useContext } from 'react'
import { UserAgeContext } from '../../../context/UserAgeContext'
import { Card } from '../../ui/StyledUI'

export default function GrandParent2() {
  const { user, age, setUser, setAge } = useContext(UserAgeContext)

  return (
    <Card>
      <h3>Controls</h3>
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
    </Card>
  )
}
