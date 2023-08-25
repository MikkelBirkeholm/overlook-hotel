import { supabase } from '@/utils/supabaseClient'
import { NextResponse } from 'next/server'

// Viser data for et specifikt hotel

export async function GET(req, { params }) {
  const hotel = params.hotel

  let { data: hotelData, error } = await supabase
    .from('hotels')
    .select('*')
    .eq('slug', hotel)

  if (error) return NextResponse.error(error)

  return NextResponse.json(hotelData)
}
