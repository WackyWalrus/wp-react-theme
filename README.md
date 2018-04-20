# React Wordpress Theme

Basic wordpress theme that runs on React and Redux.

![Screenshot](screenshot.png#1)

## Installation

1. Clone project into your Wordpress `/wp-content/themes/` directory
2. Turn on `Cmccullough React` in `Appearance -> Themes`

    ### **If you're using [Wordfence](https://www.wordfence.com/)**

    Some parts of the WP JSON API get blocked by Wordfence, so the theme might not work unless you turn off `Prevent discovery of usernames through '/?author=N' scans, the oEmbed API, and the WordPress REST API` under `All Options > Firewall Options > Brute Force Protection` 

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

### Ducks
I'm using [ducks](https://github.com/erikras/ducks-modular-redux) to help tame Redux

- [categories.js](js/src/ducks/categories.js)
- [current.js](js/src/ducks/current.js)
- [pages.js](js/src/ducks/pages.js)
- [posts.js](js/src/ducks/posts.js)
- [siteInfo.js](js/src/ducks/siteInfo.js)

### Pages

- [Category](js/src/pages/Category/)
  - Lists all the posts for a specific category
- [Determine](js/src/pages/Determine/)
  - This figures out if a permalink is a page or a post, and redirects accordingly
- [Home](js/src/pages/Home/)
  - The home page 🤷‍
- [Page](js/src/pages/Page/)
  - Displays content for a page
- [Post](js/src/pages/Post)
  - Displays content for a single post

### Templates
- [MainTemplate.jsx](js/src/templates/MainTemplate.jsx)
  - Essentially a page with no layout
- [TwoColumnTemplate.jsx](js/src/templates/TwoColumnTemplate.jsx)
  - col-md-8 and col-md-4 style layout
  - Should be renamed, probably