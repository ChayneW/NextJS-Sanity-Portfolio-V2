export default {
    name:'projects',
    title:'Projects',
    type: 'document',
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'projectLink',
          title: 'Project Link',
          type: 'string',
        },
        {
          name: 'codeLink',
          title: 'Code Link',
          type: 'string',
        },
        {
          name:'tech',
          title: 'Technology Used',
          type: 'string',
        },
        {
          name: 'imgUrl',
          title: 'ImageUrl',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
    ]
}