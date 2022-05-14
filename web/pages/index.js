import Link from 'next/link'
import client from '../client'

// runs on the server
export async function getStaticProps() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

// runs on the client
const Index = ({posts}) => {
  console.log({ posts });
    return (
      <div>
        <h1>Welcome to a blog!</h1>
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                {/* ({new Date(publishedAt).toDateString()}) */}
                {/* ({new Date(publishedAt)}) */}
              </li>
            )
        )}
      </div>
    )
}

export default Index