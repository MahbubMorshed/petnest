import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'save',
  title: 'Save',
  type: 'document',
  fields: [
    defineField({
      name: 'postedBy',
      title: 'Posted By',
      type: 'postedBy',
    }),
    defineField({
      name: 'userId',
      title: 'UserId',
      type: 'string',
    }),
  ],
})
