// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schema
import pageInfo from './pageInfo'
import projects from './projects'
import skills from './skills'
import social from './social'
import certifications from './certifications'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageInfo, projects, skills, social, certifications
  ]),
})
