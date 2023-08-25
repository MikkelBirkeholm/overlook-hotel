import { supabase } from '@/utils/supabaseClient'
import { NextResponse } from 'next/server'

// Viser hoteller i en specifik by

export async function GET(req, { params }) {
  const by = params.by

  const { data, error } = await supabase
    .from('cities')
    .select(
      `
        id, slug, name, description,
       hotels!inner (
          *
        )
      `
    )
    .eq('slug', by)
  if (error) return NextResponse.error(error)
  return NextResponse.json(data)
}
