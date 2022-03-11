export const WwwSeriouseatsComExtractor = {
  domain: 'www.seriouseats.com',

  title: {
    selectors: [
      // enter title selectors
      'h1.heading__title',
    ],
  },

  author: {
    selectors: [
      // enter author selectors
      "div[class*='bylines'] a",
    ],
  },

  date_published: {
    selectors: [
      // enter selectors
    ],
  },

  dek: {
    selectors: [
      // enter selectors
    ],
  },

  lead_image_url: {
    selectors: [
      // enter selectors
    ],
  },

  content: {
    selectors: [
      // enter content selectors
      'article-content',
    ],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
