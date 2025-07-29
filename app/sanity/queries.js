import { defineQuery } from 'groq';

export const homepageQuery = defineQuery(`
  *[_type == "homepage"][0]{
    title,
  }
`)
