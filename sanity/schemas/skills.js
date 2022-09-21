export default {
  name: 'skill',
  title: 'Skill ',
  type: 'document',
  fields: [ 
    {
      name: "title",
      title: "Title",
      description: "Name of the Skill",
      type: "string"
    },
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "efficiency",
      title: "Efficiency",
      type: "number",
      description: "Efficiency of the skill from 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100)
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options:{
        hotspot: true
      },
    }, 
  ],

}
