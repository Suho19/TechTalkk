import type { CollectionConfig } from 'payload'
import { validateLink } from './utils'

export const Leaderboards: CollectionConfig = {
  slug: 'leaderboard',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      localized: true,
    },
    {
      name: 'socials',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: ['LinkedIn', 'GitHub', 'Twitter', 'Website', 'Facebook'],
          required: false,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          validate: (value: string | null | undefined) => validateLink(value),
        },
      ],
    },
    {
      name: 'rank',
      type: 'number',
      required: true,
    },
  ],
}
