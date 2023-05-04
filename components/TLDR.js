import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link"

const TLDR = () => {
  return (
    <div className="flex flex-col justify-evenly items-center my-80">
      <div className="flex flex-col justify-between">
        <p className="font-Sora font-bold text-4xl my-3">So what the hell do we do?</p>
        <h4 className="font-Sora font-normal text-xl my-3">TLDR; We put your creations in the spotlight!</h4>
      </div>
      <Carousel
        autoPlay
        emulateTouch
        infiniteLoop="true"
        interval={1500}
        preventMovementUntilSwipeScrollTolerance
        swipeable
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        <div className="mt-16 text-center relative ">
          <Image className="" src='/diamonds-card.svg' alt='' width={1072} height={400} />
          <div className="flex flex-col w-2/4 h-full absolute top-1/3 left-1/4 my-2" >
            <p className="font-Sora font-bold text-2xl">Discover Games and Communities</p>
            <p className="text-[#808080] font-Sora font-normal text-base my-2">Explore a collection of thousands of games and be a part
              of the ever evolving gaming scene</p>
            <Link className="bg-[white] text-black rounded-lg w-fit self-center p-3 font-semibold my-2" href='/explore'>LET’S EXPLORE</Link>
          </div>
        </div>
        <div className="mt-16 text-center relative ">
          <Image className="" src='/diamonds-card.svg' alt='' width={1072} height={400} />
          <div className="flex flex-col w-2/4 h-full absolute top-1/3 left-1/4 my-2" >
            <p className="font-Sora font-bold text-2xl">Feedbacks and Insights made easy</p>
            <p className="text-[#808080] font-Sora font-normal text-base my-2">Build, Ship and test your apps with thousands of devs
              across the globe and get feedbacks to work upon!</p>
            <Link className="bg-[white] text-black rounded-lg w-fit self-center p-3 font-semibold my-2" href='/explore'>LET’S EXPLORE</Link>
          </div>
        </div>
        <div className="mt-16 text-center relative ">
          <Image className="" src='/diamonds-card.svg' alt='' width={1072} height={400} />
          <div className="flex flex-col w-2/4 h-full absolute top-1/3 left-1/4 my-2" >
            <p className="font-Sora font-bold text-2xl">Build and grow your community</p>
            <p className="text-[#808080] font-Sora font-normal text-base my-2">Build, Ship and test your apps with thousands of devs
              across the globe = get feedbacks to work upon!</p>
            <Link className="bg-[white] text-black rounded-lg w-fit self-center p-3 font-semibold my-2" href='/explore'>LET’S EXPLORE</Link>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
export default TLDR