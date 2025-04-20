import { create } from "zustand"

const userStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  loadUser: async () => {
    set({ isLoading: true })
    const user = await new Promise((resolve) =>
      setTimeout(() => {
        resolve({ name: "John Doe", email: "jd@gmail.com" })
      }, 1000)
    )
    set({ isLoading: false })
    set({ user })
  },
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),
}))

export const useUser = () => {
  const { user, setUser, clearUser, loadUser, isLoading } = userStore()
  return { user, setUser, clearUser, loadUser, isLoading }
}