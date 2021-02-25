export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60377bc998ce279a9ad7bf5e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1v5dgacz',
                  apiId: '26996eb0-f514-45de-9ef8-1865af13d1fc'
                },
                {
                  buildHookId: '60377bc92f26f18d8da980f0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1fpy68d4',
                  apiId: '564c1ee0-ed79-487d-a78b-2562d5d0e2eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jtjiver/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1fpy68d4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
