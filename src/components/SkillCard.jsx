import { BarChart3, Database, FileSpreadsheet, FileText, Network, Smartphone } from 'lucide-react'
import AzureOriginal from 'devicons-react/icons/AzureOriginal'
import BootstrapOriginal from 'devicons-react/icons/BootstrapOriginal'
import COriginal from 'devicons-react/icons/COriginal'
import CsharpOriginal from 'devicons-react/icons/CsharpOriginal'
import Css3Original from 'devicons-react/icons/Css3Original'
import FigmaOriginal from 'devicons-react/icons/FigmaOriginal'
import GitOriginal from 'devicons-react/icons/GitOriginal'
import GithubOriginal from 'devicons-react/icons/GithubOriginal'
import Html5Original from 'devicons-react/icons/Html5Original'
import IonicOriginal from 'devicons-react/icons/IonicOriginal'
import JavaOriginal from 'devicons-react/icons/JavaOriginal'
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal'
import MongodbOriginal from 'devicons-react/icons/MongodbOriginal'
import NodejsOriginal from 'devicons-react/icons/NodejsOriginal'
import OracleOriginal from 'devicons-react/icons/OracleOriginal'
import PhpOriginal from 'devicons-react/icons/PhpOriginal'
import PythonOriginal from 'devicons-react/icons/PythonOriginal'
import ROriginal from 'devicons-react/icons/ROriginal'
import VscodeOriginal from 'devicons-react/icons/VscodeOriginal'

const skillIcons = {
  Java: JavaOriginal,
  'C#': CsharpOriginal,
  C: COriginal,
  PHP: PhpOriginal,
  Python: PythonOriginal,
  JavaScript: JavascriptOriginal,
  JSP: JavaOriginal,
  JSF: JavaOriginal,
  HTML5: Html5Original,
  CSS3: Css3Original,
  'Node.js': NodejsOriginal,
  Ionic: IonicOriginal,
  Cordova: Smartphone,
  Bootstrap: BootstrapOriginal,
  Struts: JavaOriginal,
  SQL: Database,
  'PL/SQL': OracleOriginal,
  MongoDB: MongodbOriginal,
  'Power BI': BarChart3,
  R: ROriginal,
  Excel: FileSpreadsheet,
  'ETL / Pentaho': Network,
  Git: GitOriginal,
  GitHub: GithubOriginal,
  Figma: FigmaOriginal,
  'Microsoft Office': FileText,
  'Visual Studio Code': VscodeOriginal,
  'Fundamentos de AWS': Network,
  'Fundamentos de Azure': AzureOriginal,
  Oracle: OracleOriginal,
  'WebLogic da Oracle': OracleOriginal,
  'Gestão de infraestrutura de TI': Network,
}

export default function SkillCard({ skill }) {
  const Icon = skillIcons[skill.name] ?? Database

  return (
    <article className="skill-card">
      <div className="skill-icon" aria-hidden="true">
        <Icon size={25} />
      </div>
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
    </article>
  )
}
