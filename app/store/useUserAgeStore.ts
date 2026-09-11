import { create } from 'zustand'
import { UserAgeType } from '../types/userAgeType'

export const useUserAgeStore = create<UserAgeType>((set) => ({
  user: 'Karin',
  age: 22,
  setUser: (user) => set({ user }),
  setAge: (age) => set({ age }),
}))
