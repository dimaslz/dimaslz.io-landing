import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';

const json = `{
  name: "Dimas López Zurita",
  email: "me@dimaslz.io",
  keywords: [
    "javascript",
    "vue",
    "react",
    "angular",
    "nodejs+express, nest",
    "software",
    "android",
    "ios",
  ],
  network: {
    linkedin: "https://www.linkedin.com/in/dimaslopezzurita",
    github: "https://github.com/dimaslz",
    twitter: "https://twitter.com/dimaslz"
  },
  former_jobs: ["Trovit", "BeRepublic", "FocusOnEmotions", "Zyncro", "Instaply", "Ubeeqo/Europcar Mobility Group"],
  localtion: "Barcelona, Spain",
  status: "Working in myself",
  interests: "Entrepreneurship, business, webapp, javascript, android, ios, ..."
}`;

CodeMirror(document.body, {
  value: json,
  mode:  "javascript",
  theme: "material",
  lineNumbers: true,
  readOnly: true,
});