import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cache } from 'react'
import { redirect } from 'next/navigation'
import { UserDashboard } from '@/components/Reservations/UserDashboard/UserDashboard'

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  let { data: bookings, error } = await supabase
    .from('bookings')
    .select()
    .eq('user_id', session.user.id)

  return (
    <main>
      <section>
        <h1>Reservationer</h1>
        <p>Her kan du se dine reservationer</p>
        <form
          action="/auth/login"
          method="post"
        >
          <button formAction="/auth/logout">Log ud</button>
        </form>
        {bookings && <UserDashboard bookings={bookings} />}
      </section>
    </main>
  )
}
