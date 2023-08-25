import { supabase } from '@/utils/supabaseClient'
import { NextResponse } from 'next/server'

// Viser hoteller i et specifikt land

export async function GET(req, { params }) {
  const land = params.land

  const { data, error } = await supabase
    .from('cities')
    .select(
      `
      country_id, slug, countries!inner(slug),
       hotels!inner (
          *
        )
      `
    )
    .eq('countries.slug', land)

  return NextResponse.json(data)
}

// async function getCitiesByCountry() {
//   let { data: countries, error } = await supabase
//     .from('countries')
//     .select('id')
//     .eq('slug', `${land}`)
//   if (error) return NextResponse.error(error)
//   if (countries) {
//     let { data: citites, error } = await supabase
//       .from('cities')
//       .select('*')
//       .eq('country_id', countries[0].id)
//     if (error) return NextResponse.error(error)
//     return citites
//   }
// }
// const cities = await getCitiesByCountry()
