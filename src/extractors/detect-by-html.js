import { MediumExtractor, BloggerExtractor, SubstackExtractor } from './custom';

const Detectors = {
  'meta[name="al:ios:app_name"][value="Medium"]': MediumExtractor,
  'meta[name="generator"][value="blogger"]': BloggerExtractor,
  'link[rel="stylesheet"][href^="https://cdn.substack.com"]': SubstackExtractor,
};

export default function detectByHtml($) {
  const selector = Reflect.ownKeys(Detectors).find(s => $(s).length > 0);

  return Detectors[selector];
}
