import { g, auth, config } from '@grafbase/sdk';

const User = g.model('User',{
  name:g.string().length({min:2,max:20}),
  email:g.string().unique(),
  avatarUrl:g.url(),
  description:g.string().optional(),
  githubUrl:g.url().optional(),
  linkdinUrl:g.url().optional(),
  projects:g.relation(()=>Project).list().optional(),

})


const Project = g.model('Project',{
  title:g.string().length({min:2}),
description:g.string().optional(),
image:g.url(),
livesiteUrl:g.url(),
githubUrl:g.url().optional(),
category:g.string().search(),
createdBY:g.relation(()=>User),
})


export default config({
  schema: g

})
