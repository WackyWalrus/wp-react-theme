export default function pageOrPostSelector (state, slug) {
  const {
    pages,
    posts,
    categories
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

  if (Object.keys(categories.data).length !== 0) {
    if (categories.data.hasOwnProperty(slug)) {
      return categories.data[slug]
    }
  }

  return false
}