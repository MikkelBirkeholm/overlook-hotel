import { supabase } from '@/utils/supabaseClient'
import { NextResponse } from 'next/server'

// Viser hvilke byer der findes hoteller i

export async function GET() {
  let { data: cities, error } = await supabase.from('cities').select()

  if (error) return NextResponse.error(error)
  return NextResponse.json(cities)
}
