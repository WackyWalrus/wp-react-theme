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

## Files

- js
  - src
    - components
      - CategoryList
        - [Container.jsx](js/src/components/CategoryList/Container.jsx)
        - [Presentation.jsx](js/src/components/CategoryList/Presentation.jsx)
      - Footer
        - [Container.jsx](js/src/components/Footer/Container.jsx)
        - Presentation.jsx
      - Header
        - Container.jsx
        - Presentation.jsx
      - Post
        - Container.jsx
        - Presentation.jsx
      - App.jsx
    - Containers
      - withCategories.js
      - withPosts.js
      - withSiteInfo.js
    - ducks
      - categories.js
      - current.js
      - pages.js
      - posts.js
      - siteInfo.js
    - pages