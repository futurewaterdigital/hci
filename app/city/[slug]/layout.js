export async function generateMetadata({ params }) {
  // console.log('Fetching data for slug:', params.slug)

  const response = await fetch(
    `https://cdn.healthcareinternational.in/wp-json/wp/v2/posts?embed&slug=${params.slug}`
  )

  if (!response.ok) {
    console.error('Failed to fetch post data:', response.statusText)
    return {
      title: 'Healthcare International in India',
      description: 'Healthcare International in India',
      metadataBase: new URL('https://healthcareinternational.in/'),
      openGraph: {
        url: `https://healthcareinternational.in/treatment/${params.slug}`,
        title: 'Healthcare International in India',
        description: 'Healthcare International in India',
        images: [
          {
            url: '/social.png',
            width: 800,
            height: 600,
            alt: 'Healthcare International in India',
          },
        ],
      },
    }
  }

  const postData = await response.json()

  // Ensure postData has data
  const post = postData[0]

  // console.log('Fetched post data:', post)

  return {
    title: post
      ? `${post.title.rendered} - Healthcare International in India`
      : 'Healthcare International in India', // Assuming title is in 'rendered'
    description: post
      ? post.excerpt.rendered // Assuming you want the excerpt for the description
      : 'Healthcare International in India',
    metadataBase: new URL('https://healthcareinternational.in/treatment/'),
    openGraph: {
      url: `https://healthcareinternational.in/treatment/${params.slug}`,
      title: post
        ? `${post.title.rendered} - Healthcare International in India`
        : 'Healthcare International in India',
      description: post
        ? post.excerpt.rendered // Assuming you want the excerpt for the description
        : 'Healthcare International in India',
      images:
        post && post.acf && post.acf.banner
          ? [
              {
                url: post.acf.banner.url, // Adjust to your actual structure
                width: 800,
                height: 600,
                alt: post.title.rendered || 'Healthcare International in India',
              },
            ]
          : [
              {
                url: '/social.png',
                width: 800,
                height: 600,
                alt: 'Healthcare International in India',
              },
            ],
    },
  }
}

export default function RootLayout({ children }) {
  return <>{children}</>
}
