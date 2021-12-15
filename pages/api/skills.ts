import type { NextApiRequest, NextApiResponse } from 'next'

type Skill = {
  title: string;
  tools: string[];
}
type SkillResponse = {
  skills: Skill[]
}

const skills:Skill[] = [
    {title:"Front End",tools:[
        "Javascript", "ReactJS", "Swift Storyboard", "Swift UI", "React Native", "Flutter"
    ]},
    {title:"Back End", tools:[
        "NodeJS", "Core JAVA", "SQL"
    ]},
    {title:"Infrastructure", tools:[
        "Google Cloud Platform", "Docker", "Kubernetes", "Istio Service Mesh"
    ]}
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SkillResponse>
) {
  res.status(200).json({skills})
}
