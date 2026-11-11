// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  conceptSidebar: [
    'intro',
    'the-problem',
    'formula',
    {
      type: 'category',
      label: 'The four factors',
      link: {type: 'doc', id: 'factors/index'},
      items: ['factors/speed', 'factors/clarity', 'factors/trust', 'factors/reusability'],
    },
    {
      type: 'category',
      label: 'Diagnose your organization',
      items: ['diagnose/self-assessment', 'diagnose/reading-your-score', 'diagnose/failure-patterns'],
    },
    'ai',
    'related-concepts',
    'faq',
    'about',
  ],
};
export default sidebars;
