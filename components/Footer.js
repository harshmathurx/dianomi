import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-[#16141F] inset-x-0 bottom-0 p-4 flex flex-row justify-around items-center font-mono">
        <div>
            <p>All rights reserved</p>
        </div>
        <div className="">
            <Link  className="mx-0.5" href='#'>Twitter</Link>
            <span className="mx-0.5" >·</span>
            <Link className="mx-0.5"  href='#'>Discord</Link>
            <span className="mx-0.5" >·</span>
            <Link className="mx-0.5"  href='#'>Instagram</Link>
        </div>
    </div>
  )
}
export default Footer