export default function headerDataSelector (state) {
  if (state.siteInfo !== undefined) {
    if (Object.keys(state.siteInfo.data).length !== 0) {
      return {
        name: state.siteInfo.data.name,
        description: state.siteInfo.data.description
      }
    }
  }
}