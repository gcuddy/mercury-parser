/* eslint-disable global-require, no-undef */
import assert from 'assert';
import cheerio from 'cheerio';

let urls = [
  {
    url: 'https://adamtooze.substack.com/p/chartbook-90-heavy-fires',
    title: 'Chartbook #90: Heavy Fires',
  },
];

// don't run this on CI b/c we want to avoid network requests
if (
  process.env.CI ||
  (typeof __karma__ !== 'undefined' && __karma__.config.args[0] === '--CI')
) {
  if (cheerio.browser) {
    require('../dist/mercury.web');
  }
  // eslint-disable-next-line no-unused-expressions
  typeof Mercury === 'undefined' && require('../dist/mercury');
  describe('Tests', () => {
    it('do not run because this is CI and we do not want network requests', () => {
      assert.equal(true, true);
    });
  });
} else {
  if (cheerio.browser) {
    require('../dist/mercury.web');
  }
  const Merc =
    typeof Mercury === 'undefined' ? require('../dist/mercury') : Mercury;

  describe('Is Mercury build working', () => {
    if (Merc.browser) {
      const proxyUrl = 'http://localhost:3000/';
      urls = urls.map(article => ({
        title: article.title,
        url: proxyUrl + article.url,
      }));
    }
    urls.map(article =>
      it(`gets this title right ${article.title}`, done => {
        Merc.parse(article.url)
          .then(result => {
            assert.equal(article.title, result.title);
            done();
          })
          .catch(e => {
            console.log(e.name, e.message); // eslint-disable-line no-console
            assert.equal(true, false);
            done();
          });
      }, 15000)
    );
  });
}
