import Link from "next/link"
import { Web3Button} from "@web3modal/react"
import { useAccount } from 'wagmi'

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
}

const Navbar = () => {

    return (
        <div className="flex flex-row items-center gap-12 px-4 pt-11 text-[#FAFAFA] justify-start mx-auto w-10/12">
            <Link href='/' className="font-MagicRetro text-5xl">
                <h1>DIANOMI</h1>
            </Link>
            <span className="font-Sora font-bold text-lg"><Link href='/explore'>EXPLORE</Link></span>
            <span className="font-Sora font-bold text-lg"><Link href='/register'>CREATE</Link></span>
            <span className="font-Sora font-bold text-lg flex flex-row">
                <Link href='#'>LIVESTREAMS</Link>
                <span className="relative flex h-3 w-3 mx-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#62ff00c4] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#61FF00]"></span>
                </span>
            </span>
            <span className="font-Sora font-bold text-lg"><Link href='#'>FAQ</Link></span>
            <span className="font-Sora font-bold text-lg"><Link href='#'>CONTACT</Link></span>
            <Web3Button  />
        </div>
    )
}
export default Navbar