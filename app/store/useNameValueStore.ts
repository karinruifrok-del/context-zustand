import { create } from 'zustand'
import { NameValueType } from '../types/nameValueType'

export const useNameValueStore = create<NameValueType>((set) => ({
  name: 'Tennisballs',
  value: 0,
  setName: (name) => set({ name }),
  setValue: (value) => set({ value }),
}))
