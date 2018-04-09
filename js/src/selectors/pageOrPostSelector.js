export default function pageOrPostSelector (state, slug) {
  const {
    pages,
    posts
  } = state

  if (Object.keys(pages.data).length !== 0) {
    if (pages.data.hasOwnProperty(slug)) {
      return pages.data[slug]
    }
  }

  if (Object.keys(posts.data).length !== 0) {
    if (posts.data.hasOwnProperty(slug)) {
      return posts.data[slug]
    }
  }

  return false
}