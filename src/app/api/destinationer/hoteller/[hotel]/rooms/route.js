import { supabase } from '@/utils/supabaseClient'
import { NextResponse } from 'next/server'

// Viser rooms for et specifikt hotel

export async function GET(req, { params }) {
  const hotel = params.hotel

  const { data: hotelData, error: hotelError } = await supabase
    .from('hotels')
    .select('id')
    .eq('slug', hotel)
    .single()

  if (hotelError) return NextResponse.error(hotelError)

  const hotelId = hotelData.id

  const { data, error } = await supabase
    .from('hotel_room_rel')
    .select(
      `
      num_rooms,
      rooms!inner (
       *
      )
    `
    )
    .eq('hotel_id', hotelId)

  if (error) return NextResponse.error(error)
  return NextResponse.json(data)
}
