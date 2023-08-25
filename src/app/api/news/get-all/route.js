import { supabase } from '@/utils/supabaseClient'
import { NextResponse } from 'next/server'

export async function GET() {
  let { data: news, error } = await supabase.from('news').select('*')
  if (error) return NextResponse.error(error)
  return NextResponse.json(news)
}
