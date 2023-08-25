import { supabase } from '@/utils/supabaseClient'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  const cityId = params.id

  const { data, error } = await supabase
    .from('cities')
    .select('id, slug, description, name')
    .eq('id', cityId)
  if (error) return NextResponse.error(error)
  return NextResponse.json(data)
}
