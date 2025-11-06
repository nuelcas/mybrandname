import { useState } from 'react'

export default function useAuth(){
  const [user, setUser] = useState<any>(null)
  const signIn = async ({email, password}: any) => {
    // Mock sign-in
    setUser({email})
    return {user: {email}}
  }
  const signOut = () => setUser(null)
  return { user, signIn, signOut }
}
