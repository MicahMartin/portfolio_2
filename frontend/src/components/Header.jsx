import animu from "../util"

const outerClassName = 'flex mx-auto gap-4 max-w-[60rem] overflow-hidden px-4 flex-col sm:flex-row'
const asciImgContainer = 'border-dashed border-[#40e07d]/30 overflow-clip sm:h-[11rem] sm:w-[11rem] aspect-square max-w-full w-full h-full opacity-50' 
const bannerTextContainer = 'flex flex-col gap-4 justify-between'
const quoteOfTheDay = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    

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

