import './skills.scss';


/* Icônes langages */
import big3 from "../../../utils/assets/langages/html_css_js.png";
import sass from "../../../utils/assets/langages/sass.png";
import react from "../../../utils/assets/langages/react.webp";
import framerMotion from "../../../utils/assets/langages/framer_motion.svg";
import git from "../../../utils/assets/langages/git.webp";
import github from "../../../utils/assets/langages/github.png";
import nodeJS from "../../../utils/assets/langages/node_js.png";
import mongoDB from "../../../utils/assets/langages/Mongodb.png";
import expressJS from "../../../utils/assets/langages/express_js.png";


function Skills()
{
    return (
        <table>
  <thead>
    <tr>
      <th>Langages</th>
      <th>Outils</th>
      <th>Connaissances</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src={big3} title="JavaScript - HTML - CSS" alt="JavaScript - HTML - CSS" /> HTML - CSS - JavaScript</td>
      <td> VS Code</td>
      <td>Méthode Agile/Scrum</td>
    </tr>
    <tr>
      <td><img src={sass} title="SASS - SCSS" alt="SASS - SCSS" /> SCSS</td>
      <td><img src={git} title="git - outil de versioning" alt="git - outil de versioning" /> Git</td>
      <td> Responsive Design</td>
    </tr>
    <tr>
      <td><img src={react} title="React"  alt="React" /> React</td>
      <td><img src={github} title="GitHub" alt="GitHub" /> GitHub</td>
      <td> SEO</td>
    </tr>
    <tr>
      <td><img src={nodeJS} title="Node.js" alt="Node.js" id="small" /> Node.js</td>
      <td> Figma</td>
      <td> Optimisation des performances</td>
    </tr>
    <tr>
      <td><img src={mongoDB} title="Mongo DB" alt="Mongo DB" id="small" /> MongoDB</td>
      <td> GIMP</td>
      <td> REST API</td>
    </tr>
    <tr>
      <td><img src={expressJS} title="Express.js" alt="Express.js" id="small" /> ExpressJS</td>
      <td><img src={framerMotion} title="Framer-motion" alt="Framer-motion" /> Framer Motion</td>
      <td> Accessibilité web</td>
    </tr>
  </tbody>
</table>
    )
};

export default Skills;