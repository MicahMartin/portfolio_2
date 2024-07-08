const projects = [
  {
    year: '2021',
    projects: [
      {
        title:'fg-engine', 
        pubDate: 'Oct 28th, 2021', 
        subTitle: 'Open source FG engine with ggpo' ,
        url:'https://github.com/MicahMartin/FightingGameEngine'
      },
      {
        title:'command-parser', 
        pubDate: 'May 12th, 2021', 
        subTitle: 'Domain specific language for parsing & matching input sequences',
        url:'https://github.com/MicahMartin/InputParser'
      },
    ]
  },
  {
    year: '2019',
    projects: [
      {
        title:'kmeans-java', 
        pubDate: 'Nov 18th, 2019', 
        subTitle: 'kmeans++ clustering algorithm implemented in java for content reccomendations', 
        url:'https://github.com/MicahMartin/kmeans-java'
      },
      {
        title:'kai-script', 
        pubDate: 'Nov 5th, 2019', 
        subTitle: 'Recursive descent based scripting languge for fighting game engine',
        url:'https://github.com/MicahMartin/FightingGameLang'
      },
    ]
  },
  {
    year: '2018',
    projects: [
      {
        title:'highlighter', 
        pubDate: 'Oct 24th, 2018', 
        subTitle: 'text widget that saves highlighted text as a note to a specified location', 
        url:'https://github.com/MicahMartin/highlighterv2'
      },
    ]
  },
  {
    year: '2017',
    projects: [
      {
        title:'atmega-328p-toy', 
        pubDate: 'Sept 6th, 2017', 
        subTitle: 'Toy based on the atmega 328p microcontroller', 
        url:'https://github.com/MicahMartin/box'
      },
    ]
  },
  {
    year: '2016',
    projects: [
      {
        title:'atom-wrapper', 
        pubDate: 'Mar 21st, 2016', 
        subTitle: 'Atom IDE plugin for "vim-surround" functionality', 
        url:'https://github.com/MicahMartin/Wrapper'
      },
    ]
  },
  {
    year: '2015',
    projects: [
      {
        title:'old-roads', 
        pubDate: 'Mar 24st, 2015', 
        subTitle: 'Nostalgic Web Application / Android Application for Oldschool game tracklists', 
        url:'https://github.com/MicahMartin/Old-Roads'
      },
      {
        title:'open-beds', 
        pubDate: 'Mar 15th, 2015', 
        subTitle: 'Youth-focused web app where users can locate open homeless shelter beds', 
        url:'https://github.com/andrewborstein/youth-shelter-finder'
      },
      {
        title:'boston-coding-camp', 
        pubDate: 'Feb 6th, 2015', 
        subTitle: 'Website for BostonCodingCamp; a joint initiative of The Young Peoples Project and Resilient Coders', 
        url:'https://github.com/resilientcoders-boston/bostoncodingcamp'
      },
    ]
  },
]

const Title = ({title}) => <h2 className="w-full code-font text-s"> {title} </h2>
const SubTitle = ({subTitle}) => <p className="w-full text-gray-700 dark:text-gray-300 text-[16px] mt-1"> {subTitle} </p>

const projectCardStyle = 'block py-4'
const ProjectCard = ({title, subTitle, url}) => {
  return (
    <a href={url} className={projectCardStyle}>
      <article className="flex flex-row">
        <Title title={title}/>
        <SubTitle subTitle={subTitle}/>
      </article>
    </a>
  )
}

const ProjectYear = ({year, projects}) => {
  return (
    <>
      <Title title={year} />
      <div className={projectListStyle}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            url={project.url}
            title={project.title}
            subTitle={project.subTitle}
          />
        ))}
      </div>
    </>
  )
}

const projectListStyle = 'flex flex-col gap-6 w-full max-w-[60rem] mx-auto p-4 border border-[#40e07d]/50'
const Projects = () => {
  return (
    <div className={projectListStyle}>
      {projects.map((project) => (
        <ProjectYear
          key={project.year}
          year={project.year}
          projects={project.projects}
        />
      ))}
    </div>
  )
}

export default Projects
