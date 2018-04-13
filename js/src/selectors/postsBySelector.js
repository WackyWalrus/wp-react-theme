export default function postsBySelector (state, params) {
  let posts = []

  if (state.posts.data === undefined) {
    return posts
  }
  
  for (let i in state.posts.data) {
    let post = state.posts.data[i]

    let doNotFilter = true

    for (let x in params) {
      let param = params[x]

      if (post.hasOwnProperty(x)) {
        if (typeof post[x] === 'object') {
          if (post[x].indexOf(param) === -1) {
            doNotFilter = false
          }
        } else if (post[x] !== param) {
          doNotFilter = false
        }
      } else {
        doNotFilter = false
      }
    }
    
    if (doNotFilter) {
      posts.push(post)
    }
  }

  return posts
}