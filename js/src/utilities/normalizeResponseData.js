export default function normalizeResponseData (data) {
  let result = {}

  for (let i = 0; i < data.length; i += 1) {
    let d = data[i]

    if (d.hasOwnProperty('slug')) {
      result[d.slug] = d
    }
  }

  return result
}