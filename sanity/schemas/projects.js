export default {
  name: 'project',
  title: 'Project ',
  type: 'document',
  fields: [ 
    {
      name: "title",
      title: "Title",
      description: "Title of the project",
      type: "string"
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "string",
      options:{
        of: [{type:"reference", to: {type: "Skill"}}]
      },
    }, 
  ],

}
