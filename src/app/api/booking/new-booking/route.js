import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function PUT(req) {
  const { data } = await request.json()
  const supabase = createRouteHandlerClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  try {
    // Calls the saved procedure to add the new protocol to the user's protocols
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          user_id: session.user.id,
          hotel: 'otherValue',
          city: 'otherValue',
          start_date: 'otherValue',
          end_date: 'otherValue',
          room_type: 'otherValue',
          is_flex: false,
          comments: 'otherValue',
        },
      ])
      .select()
    return NextResponse.json('Success')
  } catch (error) {
    console.log('error', error)
    return NextResponse.json({ data: 'error' })
  }
}
