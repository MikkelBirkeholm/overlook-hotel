import { supabase } from '@/utils/supabaseClient'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  const slug = params.slug
  let { data: post, error } = await supabase
    .from('news')
    .select('*')
    .eq('slug', `${slug}`)
  if (error) return NextResponse.error(error)
  return NextResponse.json(post)
}
