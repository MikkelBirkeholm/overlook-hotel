'use client'
import React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const LoginSwitcher = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    const supabase = createClientComponentClient()
    const getData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (session) {
        setSession(session)
      }
    }

    getData()
  }, [])

  return (
    <li>
      {session ? (
        <Link href={'/dashboard'}>DASHBOARD</Link>
      ) : (
        <Link href={'/login'}>LOGIN</Link>
      )}
    </li>
  )
}
