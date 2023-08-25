import { supabase } from '@/utils/supabaseClient'
import { NextResponse } from 'next/server'

export async function GET() {
  let { data: countries, error } = await supabase.from('countries').select()

  if (error) return NextResponse.error(error)
  return NextResponse.json(countries)
}
