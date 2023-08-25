import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  const userId = params.id
  const supabase = createRouteHandlerClient({ cookies })

  let { data: bookings, error } = await supabase
    .from('bookings')
    .select()
    .eq('user_id', userId)

  if (error) return NextResponse.error(error)
  return NextResponse.json(bookings)
}
