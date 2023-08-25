import { TitleBanner } from '@/components/TitleBanner/TitleBanner'

export async function generateStaticParams() {
  const posts = await fetch('http://localhost:3000/api/news/get-all').then(
    (res) => res.json()
  )

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

async function getPost(slug) {
  const res = await fetch(`http://localhost:3000/api/news/get-post/${slug}`)
  const data = await res.json()
  return data
}

export default async function Page({ params }) {
  const { slug } = params
  const post = await getPost(slug)

  return (
    <main>
      <TitleBanner
        heading={post[0].title}
        src={post[0].image_id}
      />
      <section>
        <p>{post[0].content}</p>
      </section>
    </main>
  )
}
