import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-[#16141F] inset-x-0 bottom-0 p-4 flex flex-row justify-around items-center font-mono">
      <div>
        <p>All rights reserved</p>
      </div>
      <div className="">
        <div className="mx-0.5" >
          <span>
            Made with ❤ by
          </span>
          <Link className="mx-1" target="_blank" href='https://twitter.com/thatshutterboi'>Aayush</Link>
          <span>&</span>
          <Link className="ml-1" target="_blank" href='https://twitter.com/harshwhere'>Harsh</Link>
        </div>
      </div>
    </div>
  )
}
export default Footer