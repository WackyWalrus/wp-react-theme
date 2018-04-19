# React Wordpress Theme

Basic wordpress theme that runs on React and Redux.

## Installation

1. Clone project into your Wordpress `/wp-content/themes/` directory
2. Turn on `Cmccullough React` in `Appearance -> Themes`

## Customizing

Need to test how this will handle being a child theme first, but if you want to customize this directly:

1. `cd` into this theme's directory
2. Run `npm install`
3. Run `npm run start`
4. Start coding

## Breakdown
FYI: Many of these React components are split in two, use a component's Container (if available) in your markup to use the component.

### Components
- [CategoryList](js/src/components/CategoryList/)
  - Gives you a list of the post categories
- [Footer](js/src/components/Footer/)
  - The footer on every template
- [Header](js/src/components/Header/)
  - The header on every template
- [Post](js/src/components/Post/)
  - A single post
  - Accepts `post` as an attribute
- [App.jsx](js/src/components/App.jsx)
  - Sets up routes
  - Imports the `scss` file from [Bootstrap 4](https://github.com/twbs/bootstrap)

### Containers
All of these are HOCs that fetch data and applies it to the Redux store before rendering it's WrappedComponent
- [withCategories.js](js/src/containers/withCategories.js)
- [withPosts.js](js/src/containers/withPosts.js)
- [withSiteInfo.js](js/src/containers/withSiteInfo.js)
