import { supabase } from '@/utils/supabaseClient'
import { NextResponse } from 'next/server'

// Viser alle hoteller

export async function GET() {
  let { data: hotels, error } = await supabase.from('hotels').select()

  if (error) return NextResponse.error(error)
  return NextResponse.json(hotels)
}
