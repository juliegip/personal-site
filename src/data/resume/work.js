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
    name: 'Dataswati',
    position: 'Front end developper intern',
    url: 'https://www.dataswati.com/',
    startDate: '2023-06-01',
    summary: `Front end development of user interfaces (dashboard, menus,...) of PowerOp platform (a technological solution based on AI to empower industrial professionnals in better controlling their production processes)
    
    `,
    highlights: [
      'VueJS',
      'Vuetify',
    ],
    location: "remote"
  },
  {
    name: 'Agrial, Branche Légumes et Fruits Frais / Floréale',
    position: 'Internal control manager',
    url: 'https://www.agrial.com',
    startDate: '2017-09-20',
    summary: `Implementation of an internal control system within the Branch, across its Business Units, and Departments (process, procedures, risks assessments, monitoring & reviews...),
    Facilitation of the internal control program and associated action plans.,
    Development of a platform for managing the internal control system (questionnaires, aggregation of responses, using Microsoft Power Apps low-code solution).,
    Internal audits within Business Units`,
    highlights: [
      'Process audits',
      'Internal control',
      '4th range (fresh fruits & vegetable)',
    ],
    location: "Lessay, Normandie, France"
  },
  {
    name: 'Henkel',
    position: 'Project manager',
    url: 'https://www.henkel.com/',
    startDate: '2015-10-01',
    endDate: '2017-07-01',
    summary: `Implementation of ISO 9001 certificate for Shared Services Center Shanghai
    Lead continous improvement initiatives (process efficiency), Lean Six Sigma (Green belt) for Shared Services Center
    Continuous improvement manager : setup a continous improvement system within a Shared Service of 300 people, part of the Henkel Global Shared Services
    SSC costs controlling`,
    highlights: [
      'ISO 9001 quality',
      'Process improvement',
      'Lean Six sigma projects',
      'Shared Services organizations',
      'FMCG industry'
    ],
    location: "Shanghai, China"
  },
  {
    name: 'Alstom',
    position: 'Continuous improvement facilitator',
    url: 'http://enveritas.org',
    startDate: '2013-06-01',
    endDate: '2015-09-30',
    summary: `Lead on SSC lean actions and implementing new operational rules and practices
    Identification of improvement and risks zones on finance accounting process
    Lead deployment of system new fonctionnalities (user side)`,
    highlights: [
      'Process improvements',
      'Finance & accountancy process',
      'Engineer industry',
    ],
    location: "Shanghai & Wuhan, China"
  },
  {
    name: 'A2 Consulting',
    position: 'Consultant',
    url: 'https://a2consulting.fr/',
    startDate: '2010-11-01',
    endDate: '2013-04-20',
    summary: `Missions within : <br>
    ~ Differents industries: banking, insurance, public service (Pompiers de Paris)...<br>
    ~ Multiple processes : tender, procurement, payment, invoicing, internal control...`,
    highlights: [
      'communication',
      'interal projects',
      'commercial proposal of consulting'
    ],
    location: "Paris, France"
  },
];

export default work;
