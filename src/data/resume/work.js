/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'PS Engineering & Consultant Services',
    position: 'Software Developer',
    url: 'https://www.ps-engineering.com/',
    startDate: '2020-09-01',
    endDate: '2021-06-01',
    summary: 'Developed and maintained software for Pipe Inspection Robots',
    highlights: [
      'Built and scaled engineering team, emphasizing diversity and open-source contribution'
      + 'Pipe inspection robots has been resarched'
      + "Inspection robot's data has been analyzed",
    ],
  },
];

export default work;
