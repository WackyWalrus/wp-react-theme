export default function normalizeResponseData (data, key = 'slug') {
  let result = {}

  for (let i = 0; i < data.length; i += 1) {
    let d = data[i]

    if (d.hasOwnProperty(key)) {
      result[d[key]] = d
    }
  }

  return result
}