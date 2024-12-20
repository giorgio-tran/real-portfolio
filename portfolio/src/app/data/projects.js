export const projects = [
  {
    name: "History of Coffee",
    image: "/projects/data-vis.png",
    description:
      "Designed and implemented an interactive 3D globe and user interface for a data visualization application showcasing the history of coffee from 1990 to 2019. Preprocessed the original data and converted it into GeoJSON format for rendering on the globe. Developed intuitive user interactions to enhance engagement and data exploration.",
    image_description: "The data visualization web application.",
    technologies: [
      "React",
      "Globe.gl",
      "D3.js",
      "Tailwind CSS",
      "Typescript",
      "Git",
    ],
    links: [
      {
        name: "Live Demo",
        url: "https://data-visualization-chi-henna.vercel.app/",
      },
      {
        name: "Github",
        url: "https://github.com/Team-13-2024/data-visualization",
      },
    ],
  },
  {
    name: "Sage Node Installation",
    image: "/projects/rapid_node.jpg",
    description:
      "I assisted with the installation of a Sage Node in Lahaina, Maui. Despite the challenging heat, the experience was invaluable. Under the guidance of experts from Argonne National Laboratory, I gained firsthand exposure and a deeper understanding of the hardware and software powering the Sage Node.",
    image_description: "Sage Node installed in Lahaina, Maui.",
  },
  {
    name: "Wildfire Detection at the Edge",
    image: "/projects/rapid_fire.jpg",
    description:
      "The YOLOv7 model was fine-tuned to specifically detect fire and smoke using the DFire Dataset, which comprises over 20,000 images of fire and smoke. After training, the model was deployed on a GPU-equipped edge device called a Sage Node. By processing data locally, edge devices like Sage Nodes can significantly reduce response times, which is critical in emergency situations.",
    image_description:
      "The fine-tuned YOLOv7 model's fire and smoke detection on an image of the Kilauea eruption that occurred on June 3rd, 2024.",
    technologies: ["Python", "Pluginctl", "Docker"],
  },
  {
    name: "Articulate",
    image: "/projects/articulate.png",
    description:
      "Articulate is a research project focused on transforming data-related questions into visual charts using a large language model-based pipeline. For this project, I developed a comprehensive charting module that includes all chart types from Abela’s Taxonomy. Additionally, I created a user-friendly frontend that enables users to upload datasets and query them for insights.",
    image_description:
      "An example of the frontend for Articulate, where the large language model-based pipeline generates both a chart and an explanation of how it was created.",
    technologies: ["React", "Typescript", "Shadcn", "Tailwind CSS", "Echarts"],
    links: [
      {
        name: "Arxiv",
        url: "https://www.arxiv.org/abs/2408.12726",
      },
    ],
  },
  {
    name: "Makai",
    image: "/projects/makai.png",
    description:
      "3rd place finish at the 2023 Hawaii Annual Code Challenge. Makai is a web application that facilitates marine debris tracking and removal in Hawaii. It aims to help debris removal organizations save thousands of hours of labor each year through streamlined workflows and centralized communication.",
    image_description:
      "The data insights page of Makai, which provides a visual representation of the debris collected and the locations of the debris.",
    technologies: [
      "React",
      "Javascript",
      "Git",
      "Next.js",
      "MongoDB",
      "Node.js",
      "Mapbox",
      "Tailwind CSS",
      "Dialogflow CX",
    ],
    links: [
      {
        name: "Live Demo",
        url: "https://makai-marine.vercel.app/",
      },
      {
        name: "Github",
        url: "https://github.com/HACC-2023/makai",
      },
      {
        name: "HACC 2023",
        url: "https://hacc.hawaii.gov/news-releases/2023-hawaii-annual-code-challenge-winners-are/",
      },
    ],
  },
  {
    name: "Mejiro",
    image: "/projects/mejiro.png",
    description:
      "October 2023 PACE Kalo Grant Awardee. Mejiro is a web application that parses receipts through optical character recognition (OCR) and generative AI, which ultimately aims to helps users track their spending patterns. This project is still ongoing.",
    image_description:
      "The receipt parsing page of Mejiro, where the user can upload a receipt and view the parsed information.",
    technologies: [
      "React",
      "Javascript",
      "Git",
      "Tesseract",
      "OpenAI API",
      "Next.js",
      "Tailwind CSS",
    ],
    links: [],
  },
  {
    name: "Oceanit Silent Auction Platform",
    image: "/projects/oceanit_auction.png",
    description:
      "The silent auction platform significantly contributed to raising over $1,400 in one week for the Kapiolani Health Foundation. The application had two users roles: bidders, and administrators. For bidders, the platform enables real-time bidding, bid tracking, and item searching. For administrators, it provides tools to add, edit, and remove items seamlessly.",
    image_description:
      "The item listing page of the Oceanit Silent Auction Platform, where users can view the items available for bidding.",
    technologies: [
      "React",
      "Typescript",
      "Git",
      "MongoDB",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    name: "DOELT",
    image: "/projects/doelt.png",
    description:
      "Placed 2nd out of 44 teams at the 2022 Hawaii Annual Code Challenge. The Department of Education Legislative Tracker (DOELT) is a web application that helps the DOE track and manage legislation. A scraper was built to obtain up to date and accurate information about ongoing legislation, and a user friendly interface was developed for the DOE to stay up to date with the latest legislation.",
    image_description:
      "The bill page of DOELT, where users can view the details of a specific bill using real-time scraped data.",
    technologies: [
      "React",
      "Javascript",
      "Git",
      "Meteor",
      "MongoDB",
      "Cheerio",
      "Node.js",
      "Express",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/HACC-Cassiopeia/Legislative-Scraper-Production",
      },
      {
        name: "HACC 2022",
        url: "https://hacc.hawaii.gov/news-releases/2022-hawaii-annual-code-challenge-winners-are/",
      },
    ],
  },
  {
    name: "OSMICS",
    image: "/projects/osmics.png",
    description:
      "A web application designed to help the University of Hawaii at Manoa's Information and Computer Science department with office space management. This includes tracking office space usage, assets in each office, and booking conference rooms.",
    image_description:
      "The room page of OSMICS, where admins can search for rooms and download a CSV containing details of all the rooms.",
    technologies: [
      "React",
      "Javascript",
      "Git",
      "Meteor",
      "MongoDB",
      "Cloudinary",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/ics414t3/ics-osm",
      },
    ],
  },
];
