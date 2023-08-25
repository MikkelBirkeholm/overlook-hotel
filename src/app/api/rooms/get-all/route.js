import { supabase } from '@/utils/supabaseClient'
import { NextResponse } from 'next/server'

export async function GET() {
  let { data: rooms, error } = await supabase.from('rooms').select('*')
  if (error) return NextResponse.error(error)
  return NextResponse.json(rooms)
}
