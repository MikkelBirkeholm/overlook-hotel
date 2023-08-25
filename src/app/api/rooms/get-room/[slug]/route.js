import { supabase } from '@/utils/supabaseClient'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  const roomSlug = params.slug

  const { data: roomData, error: roomError } = await supabase
    .from('rooms')
    .select('id')
    .eq('slug', roomSlug)
    .single()

  if (roomError) return NextResponse.error(roomError)

  const roomId = roomData.id

  const { data: roomFacilities, error: facilityError } = await supabase
    .from('room_facility_rel')
    .select(
      `
      room_id, room_facility_id,
      room_facilities!inner (
          title, id
          )
      `
    )
    .eq('room_id', roomId)
  if (facilityError) return NextResponse.error(facilityError)
  return NextResponse.json(roomFacilities)
}
