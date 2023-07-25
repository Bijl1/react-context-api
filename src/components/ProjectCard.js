import { useContext } from "react"; // <== ADD
import { ThemeContext } from "../context/theme.context"; // <== ADD
 
function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData);
  const value = useContext(ThemeContext); // <== ADD
 
  return (
    <div className={"ProjectsPage " + value}>   {/* <== UPDATE  */}
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map(p => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
}
 
export default ProjectsPage;