const skills = [
  {
    title: 'React',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Javascript',
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Express.JS',
    category: ['Web Development', 'Javascript']
  },
  {
    title: 'MongoDB',
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SEO',
    category: ['Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));


export {  skills };
