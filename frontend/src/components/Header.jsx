import animu from "../util"

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
      <p className="text-xl">Hi, I'm Kai</p>
      <p>
        A software engineer who needs a much better spiel
      </p>
      <p>
      I like making games, and researching AI.
      </p>
      <p className="opacity-50 italic text-xs">
        {quoteOfTheDay}
      </p>
    </div>
  )
}

const Header = () => {
  return (
    <div className={outerClassName}>
      <AnimuContainer />
      <BannerContainer />
    </div>
  )
}
export default Header;

