import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';

const me = `import Developer from 'fullstack-developer';

const me = new Developer({
  name: "Dimas López Zurita",
  email: "me@dimaslz.io",
  keywords: [
    "javascript",
    "vue",
    "react",
    "angular",
    "nodejs+express",
    "nest",
    "software",
    "android",
    "ios",
  ],
  network: {
    linkedin: "https://www.linkedin.com/in/dimaslopezzurita",
    github: "https://github.com/dimaslz",
    twitter: "https://twitter.com/dimaslz"
  },
  formerJobs: ["Trovit", "BeRepublic", "FocusOnEmotions", "Zyncro", "Instaply", "Ubeeqo/Europcar Mobility Group"],
  location: "Barcelona, Spain",
  status: "Working in myself",
  interests: "Entrepreneurship, business, web development, mobile, backend, devops, product, management, ...",
});

me.motivation(); // Work in products with nice objectives
me.workingOn(); // Personal projects
me.isProactive(); // true
me.hasBackendSkills(); // true
me.hasFrontendSkills(); // true
me.wantToWorkRemotly(); // true
`;

CodeMirror(document.body.querySelector('#code-me-js'), {
  // value: json,
  value: me,
  mode:  "javascript",
  theme: "material",
  lineNumbers: true,
  readOnly: true,
});
