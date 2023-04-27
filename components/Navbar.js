import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-row items-center gap-12 p-5 w-11/12 my-10 text-[#FAFAFA]">
                <h1 className="font-MagicRetro text-5xl">DIANOMI</h1>
                <span className="font-Sora font-bold text-lg"><Link href='#'>EXPLORE</Link></span>
                <span className="font-Sora font-bold text-lg"><Link href='#'>COMMUNITY</Link></span>
                <span className="font-Sora font-bold text-lg flex flex-row">
                    <Link href='#'>LIVESTREAMS</Link>
                    <span className="relative flex h-3 w-3 mx-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#62ff00c4] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#61FF00]"></span>
                    </span>
                </span>
                <span className="font-Sora font-bold text-lg"><Link href='#'>FAQ</Link></span>
                <span className="font-Sora font-bold text-lg"><Link href='#'>CONTACT</Link></span>
            </div>
        </div>
    )
}
export default Navbar