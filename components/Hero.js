import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex flex-row mt-8 mb-16 justify-between mr-4">
      <div className="flex flex-col items-start p-0 justify-around w-7/12 pr-12">
        <div>
          <h2 className="font-Sora font-bold text-5xl my-10">Build your community and ship the best products.</h2>
          <h3 className="font-Sora text-2xl font-light my-10">With Dianomi, Ship and distribute your apps in just seconds and reward your community to help you ship better.</h3>
        </div>
        <button className="bg-[#07050F] flex flex-row justify-center items-center border-solid border-[#0E211C] border rounded p-5 font-Sora font-bold mt-7">
          JOIN THE CLUB
        </button>
        <div></div>
      </div>
      <div className="w-4/12">
        <Image className="animate-spin-slow" src='hero-token.svg' width={900} height={800} alt="" />
        {/* <Image src='hero-token.svg' width={600} height={500} alt="" /> */}
      </div>
    </div>
  )
}
export default Hero