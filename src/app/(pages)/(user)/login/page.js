'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './login.module.scss'

export default function Login() {
  const user_email = process.env.NEXT_PUBLIC_USER_EMAIL
  const user_password = process.env.NEXT_PUBLIC_USER_PASSWORD

  const [email, setEmail] = useState(user_email)
  const [password, setPassword] = useState(user_password)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.push('/dashboard')
  }

  useEffect(() => {
    const user_email = process.env.NEXT_PUBLIC_USER_EMAIL
    const user_password = process.env.NEXT_PUBLIC_USER_PASSWORD
    setEmail(user_email)
    setPassword(user_password)
  }, [])

  return (
    <main>
      <section>
        <h1>Log in</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className={styles.loginForm}
        >
          <input
            type="email"
            name="email"
            defaultValue={user_email}
          />
          <input
            type="password"
            name="password"
            defaultValue={user_password}
          />
          <button onClick={handleSignIn}>Log in</button>
        </form>
      </section>
    </main>
  )
}
