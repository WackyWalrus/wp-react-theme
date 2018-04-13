import normalizeResponseData from '../utilities/normalizeResponseData.js'

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

  if (categories.data.length !== 0) {
    for (let i = 0; i < categories.length; i += 1) {
      if (categories[i].slug === slug) {
        return categories[i]
      }
    }
  }

  return false
}