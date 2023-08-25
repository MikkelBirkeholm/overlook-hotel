import { supabase } from '@/utils/supabaseClient'
import { NextResponse } from 'next/server'

export async function GET() {
  let { data: images, error } = await supabase
    .from('images')
    .select('id,filename')

  if (error) return NextResponse.error(error)

  return NextResponse.json(images)
}
