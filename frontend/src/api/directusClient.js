import { createDirectus, rest, authentication } from '@directus/sdk';

const DIRECTUS_URL = import.meta.env.VITE_DIRECTUS_URL || 'http://localhost:8055';

export const directus = createDirectus(DIRECTUS_URL)
  .with(rest())
  .with(authentication());

export default directus;
