const icons = [
  {
    name: "React",
    fa: "fab fa-3x fa-react"
  },
  {
    name: "Sass",
    fa: "fab fa-3x fa-sass"
  },
  {
    name: "Node.js",
    fa: "fab fa-3x fa-node-js"
  },
  {
    name: "JavaScript",
    fa: "fab fa-2x fa-js"
  },
  {
    name: "HTML",
    fa: "fab fa-2x fa-html5"
  },
  {
    name: "CSS",
    fa: "fab fa-2x fa-css3"
  },

];

const getIcon = technology => {
  return icons.find(icon => technology === icon.name).fa;
};

export default getIcon;
