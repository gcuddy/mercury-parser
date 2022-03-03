export const WwwTheinfatuationComExtractor = {
  domain: 'www.theinfatuation.com',

  title: {
    selectors: [
      // enter title selectors
      ['meta[name="og:title"]', 'value'],
      'title',
    ],
  },

  author: {
    selectors: [
      // enter author selectors
      ['meta[name="author"]', 'value'],
      ['meta[name="og:author"]', 'value'],
      "div[class*='byLine'] p[class*='contributorsList'] span[class*='contributorName']",
    ],
  },

  date_published: {
    selectors: [
      // enter selectors
      ['meta[name="article:published_time"]', 'value'],
    ],
  },

  dek: {
    selectors: [
      // enter selectors
      ['meta[name="og:description"]', 'value'],
      ['meta[name="description"]', 'value'],
      ['meta[name="twitter:description"]', 'value'],
    ],
  },

  lead_image_url: {
    selectors: [
      // enter selectors
      ['meta[name="og:image"]', 'value'],
      ['meta[name="twitter:image"]', 'value'],
      ['meta[name="twitter:image:src"]', 'value'],
    ],
  },

  content: {
    selectors: [
      // enter content selectors
      ['div[class*="_richText_"]'],
    ],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      // remove img
      /**
       *
       * @param {HTMLElement} $node
       */
      img: $node => {
        $node.remove();
      },
      // turn noscript into figure
      noscript: ($node, $) => {
        const $children = $.browser ? $($node.text()) : $node.children();
        if (
          $children.length === 1 &&
          $children.get(0) !== undefined &&
          $children.get(0).tagName.toLowerCase() === 'img'
        ) {
          return 'figure';
        }

        return null;
      },
    },

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
  extend: {
    score: {
      selectors: ['h2 div', "div[class*='rating']"],
    },
    'perfect for': {
      selectors: [],
    },
    website: {
      selectors: [
        [
          "div[class*='venueContainer'] p[class*='infoText'] a:not([href*='google.com/maps'])",
          'href',
        ],
      ],
    },
  },
};
