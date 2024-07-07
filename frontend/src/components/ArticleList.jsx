import '../ArticleList.css'
const articles = [
  {
    title:'My 10 Years Of Web Development In Review', 
    pubDate: 'Jan 7th, 2024', 
    subTitle: 'Just some personal reflection' 
  },
  {
    title:'Implementing GGPO (in Non-Deterministic Engines)', 
    pubDate: 'Feb 2th, 2023', 
    subTitle: 'lets look at rollback networking in 3d game engines like unity and godot' 
  },
  {
    title:'Fighting Games Made me a better Web Dev', 
    pubDate: 'May 12th, 2022', 
    subTitle: 'Instant air throws = good architecture' 
  },
  {
    title:'The Million Dollar Digital Media Problem', 
    pubDate: 'Feb 2th, 2020', 
    subTitle: 'Whoever solves paywalls is gonna be rich' 
  },
  {
    title:'Domain Scripting Language for Fighting Game Commands', 
    pubDate: 'Nov 18th, 2019', 
    subTitle: 'Making a DSL to describe special move motions for fighting games' 
  },
  {
    title:'10 Steps To Becoming An Elite Tech Bootcamp Grad', 
    pubDate: 'May 15th, 2019', 
    subTitle: 'Someone advice I wish I had when I first started' 
  },
]

const Title = ({title}) => <h2 className="code-font text-[21px]"> {title} </h2>
const Date = ({date}) => <p className="italic text-[13px] text-gray-700 dark:text-gray-300"> {date} </p>
const SubTitle = ({subTitle}) => <p className="text-gray-700 dark:text-gray-300 text-[16px] mt-1"> {subTitle} </p>

const articleCardStyle = 'block py-4'
const ArticleCard = ({title, date, subTitle}) => {
  return (
    <a href='/foobar' className={articleCardStyle}>
      <article>
        <Title title={title}/>
        <Date date={date}/>
        <SubTitle subTitle={subTitle}/>
      </article>
    </a>
  )

}

const articleListStyle = 'flex flex-col gap-6 w-full max-w-[50rem] mx-auto p-4 border border-[#40e07d]/50'
const ArticleList = (props) => {
  return (
    <div className={articleListStyle}>
      {articles.map((article) => (
        <ArticleCard 
          title={article.title}
          date={article.pubDate}
          subTitle={article.subTitle}
        />
      ))}
    </div>
  )
}

export default ArticleList