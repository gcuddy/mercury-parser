export const SubstackExtractor = {
  domain: 'substack.com',

  title: {
    selectors: ['h1.post-title'],
  },

  author: {
    selectors: [['meta[name="author"]', 'value'], '.meta-author'],
  },

  date_published: {
    selectors: [['.post-meta-item.post-date time[datetime]', 'datetime']],
  },

  content: {
    selectors: ['div.available-content'],

    transforms: {
      'img[data-attrs]': $node => {
        const { src } = JSON.parse($node.attr('data-attrs'));
        $node.attr('src', src);
      },
    },
    defaultCleaner: false,
    clean: ['.subscribe-widget'],
  },

  lead_image_url: {
    selectors: [
      ['meta[name="og:image"]', 'value'],
      ['meta[property="og:image"]', 'content'],
    ],
  },

  dek: null,

  next_page_url: null,

  excerpt: null,
};
