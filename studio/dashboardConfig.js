export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60cb09b5508acbb3bf7fe5ac',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-3vtn2oq8',
                  apiId: 'ee88fb80-00a1-4e9a-a47c-5d7d055cfb66'
                },
                {
                  buildHookId: '60cb09b50a4eb8b137aa3bd9',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ah584dir',
                  apiId: 'aa81bde7-5917-442b-acb4-c2270199d5ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mostafa7904/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ah584dir.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
