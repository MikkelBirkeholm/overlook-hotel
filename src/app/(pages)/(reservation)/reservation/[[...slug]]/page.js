import { ReservationForm } from '@/components/Reservations/ReservationForm/ReservationForm'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export default async function ReservationPage() {
  const supabase = createServerComponentClient({ cookies })

  // henter session i server component
  const {
    data: { session },
  } = await supabase.auth.getSession()

  async function getProfileData() {
    let { data: profiles, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
    if (error) return console.log(error.message)
    return profiles
  }

  return (
    <main>
      <section>
        <h1>Reservation</h1>
        {session && (
          <div className="sidebyside">
            <span>
              Du er logget ind som <strong>{session.user.email}</strong>
            </span>
            <form
              action="/auth/login"
              method="post"
            >
              <button formAction="/auth/logout">Log ud</button>
            </form>
          </div>
        )}
        <p>
          Udfyld nedenstående formular for at reservere et af vores værelser
        </p>
        <ReservationForm profile={session ? await getProfileData() : ''} />
      </section>
    </main>
  )
}
