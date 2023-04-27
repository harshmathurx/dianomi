import Image from "next/image"

const TLDR = () => {
  return (
    <div className="flex flex-col justify-evenly items-center my-28">
        <div className="flex flex-col justify-between">
          <p className="font-Sora font-bold text-4xl my-3">So what the hell do we do?</p>
          <h4 className="font-Sora font-normal text-xl my-3">TLDR; We put your creations in the spotlight!</h4>
        </div>
        <Image className="mt-16" src='/diamonds-card.svg' alt='' width={1072} height={400} />
    </div>
  )
}
export default TLDR