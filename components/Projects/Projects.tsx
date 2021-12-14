import { useEffect, useState } from "react"
import { ProjectItem, ProjectType } from "./ProjectItem"
import styles from "./Projects.module.scss"

export const Projects = () => {
    const [projects, setProjects] = useState<ProjectType[]>([])

    useEffect(()=>{
        const getProjects = async () => {
            const data = await fetch("/api/projects") 
            const projectsData = await data.json()
            setProjects(projectsData.projects)
        }
       getProjects()
    },[])
    return(
        <div>
            <h2 className={styles.projects__title}>Projects</h2>
            <div className={styles.projects__gallery}>
                {
                    projects.map(project => <ProjectItem projectItem={project}/>)
                }
            </div>
        </div>
    )
}