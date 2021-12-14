import type { NextApiRequest, NextApiResponse } from 'next'

type Project = {
  name: string;
  description: string;
  technologies: string[];
  isInProd: boolean;
  isOpenSource: boolean;
  prodUrl?: string;
  sourceUrl?: string;
}
type ProjectResponse = {
  projects: Project[]
}

const projects:Project[] = [
  {
    name:"Juncture",
    description: "An android application that aims to pool playgrounds and connect children from various localilities",
    technologies:["Java", "Android", "Google Cloud Platform", "Firebase", "Google Maps and Places"],
    isInProd: false,
    isOpenSource: false,
  },
  {
    name: "MoNo Spam",
    description: "Classify database fields as spam or not spam and flag them for deletion. This project was published as a paper",
    technologies: ["Python", "Natural Language Processing", "Machine Learning"],
    isInProd: true,
    isOpenSource: true,
    prodUrl: "https://www.ijrte.org/wp-content/uploads/papers/v7i6/F2395037619.pdf",
    sourceUrl:"https://github.com/eshwarne/moNO_SPAM-spam_filter_for_mongodb"
  },
  {
    name:"CalSci",
    description: "A scientific calculator that helps you save, restore and label calculations.",
    technologies: ["Java", "Android"],
    isInProd: true,
    isOpenSource: false,
    prodUrl:"https://play.google.com/store/apps/details?id=com.dev.calsci&hl=en_IN&gl=US"
  },
  {
    name:"CalSci",
    description: "A scientific calculator that helps you save, restore and label calculations.",
    technologies: ["Java", "Android"],
    isInProd: true,
    isOpenSource: false,
    prodUrl:"https://play.google.com/store/apps/details?id=com.dev.calsci&hl=en_IN&gl=US"
  },
  {
    name:"CalSci",
    description: "A scientific calculator that helps you save, restore and label calculations.",
    technologies: ["Java", "Android"],
    isInProd: true,
    isOpenSource: false,
    prodUrl:"https://play.google.com/store/apps/details?id=com.dev.calsci&hl=en_IN&gl=US"
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectResponse>
) {
  res.status(200).json({projects})
}
