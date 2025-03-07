const skills = [
  {
    title: 'C#',
    competency: 4,
    category: ['Backend Development', 'FullStack Development'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Data Science', 'ML Engineering'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 4,
    category: ['ML Engineering', 'Data Science'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['ML Engineering', 'Deep Learning'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Full Stack Development'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'DevOps'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'HTML',
    competency: 3,
    category: ['Frontend Development', 'Web Development'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['ML Engineering', 'Web Development', 'Backend Development', 'Data Science'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Backend Development', 'Deep Learning'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Deep Learning', 'Data Science', 'Signal Processing'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Machine Learning', 'Data Science'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Science', 'ML Engineering'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Data Science', 'ML Engineering'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
