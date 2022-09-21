export default {
  name: 'certifications',
  title: 'Certifications ',
  type: 'document',
  fields: [ 
    {
      name: "title",
      title: "Title",
      description: "Title of the certificate",
      type: "string"
    },
    {
      name: "source",
      title: "Source",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "string",
      options:{
        of: [{type:"reference", to: {type: "skill"}}]
      },
    }, 
    {
      name: "date",
      title: "Date",
      type: "date"
    }
  ],

}
