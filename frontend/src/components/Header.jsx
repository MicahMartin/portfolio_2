import animu from "../util"

// frontend & styling isnt my strong suit :)
const outerClassName = 'flex gap-4 max-w-full overflow-hidden px-4 flex-col sm:flex-row'
const asciImgContainer = 'border-dashed border-[#40e07d]/30 overflow-clip sm:h-[11rem] sm:w-[11rem] aspect-square max-w-full w-full h-full opacity-50' 
const bannerTextContainer = 'flex flex-col gap-4 justify-between'
const quoteOfTheDay = ` When you're anxious to learn something and need to get better as quickly as possible…the solution is to make it part of your daily life. After all, there's no greater teacher than life itself. `
    

const AnimuContainer = () => {
  return (
    <div className={asciImgContainer}>
      <pre className="mono" style={{fontSize: '3px', lineHeight: '4px', letterSpacing: 'unset'}}>
      {animu}
      </pre>
    </div>
  )
}

const BannerContainer = () => {
  return (
    <div className={bannerTextContainer}>
      <h1 className="text-2x1">Hi, I'm Kai</h1>
      <p>
        A software engineer babysitting microservices at  <span className="bg-[#40e07d]/75 whitespace-pre inline">              </span><br/> 
        I also like making games, and researching cyber security. <br/> 
        I heard ai gets you hired so I'm into now I guess.
      </p>
      <p className="opacity-50 italic text-xs">
        {quoteOfTheDay}
      </p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div className={outerClassName}>
      <AnimuContainer />
      <BannerContainer />
    </div>
  )
}
export default Header;

