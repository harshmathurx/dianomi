import Image from "next/image"
import { useEffect, useState } from "react"

const Game = () => {

    const [fragment,setFragment] = useState(1);

    useEffect(() => {
        console.log(fragment)
    },[fragment])

    return (
        <main className="mx-auto max-w-screen-xl my-12">
            <div className="shadow-lg overflow-hidden">
                <div className="relative">
                    <Image src='/nft-banner.webp' width={1320} height={150} alt='' className="rounded-lg" />
                    <div className="w-full absolute bottom-0 left-0 z-10 transform translate-y-2/4 lg:w-auto lg:translate-x-1/3 flex justify-center">
                        <Image src='/sublime-scare.jpg' className="rounded-xl border-white border-4" width={200} height={200} alt='Sublime Scare' />
                    </div>
                </div>
                <div className="pt-[120px] lg:pt-0 lg:items-end min-h-[120px]">
                    <div className="flex flex-row items-center justify-center lg:justify-end self-end p-4 lg:text-right">
                        <Image src='/discord.svg' height={50} width={50} alt='' className="p-3 border-[0.5px] border-solid border-[#0E211C] mx-2 rounded-lg" />
                        <Image src='/twitter.svg' height={50} width={50} alt='' className="p-3 border-[0.5px] border-solid border-[#0E211C] mx-2 rounded-lg" />
                        <Image src='/telegram.svg' height={50} width={50} alt='' className="p-3 border-[0.5px] border-solid border-[#0E211C] mx-2 rounded-lg" />
                        <Image src='/website.svg' height={50} width={50} alt='' className="p-3 border-[0.5px] border-solid border-[#0E211C] mx-2 rounded-lg" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl font-Sora font-bold">Aurory</h1>
                <h1 className="text-base font-Sora font-normal text-[#808080] my-2">Created By: Mad Armani</h1>
                <div className="flex flex-row mt-4">
                    <button className="bg-[#00FFC2] rounded-md py-3 px-4 font-Sora font-bold text-[#000000] mr-2">
                        Download Now <span></span>
                    </button>
                    <button className="border-[#00FFC2] border-2 rounded-md py-3 px-4 font-Sora font-bold text-[#00FFC2] mx-4">
                        Play Store <span></span>
                    </button>
                    <button className="border-[#00FFC2] border-2 rounded-md py-3 px-4 font-Sora font-bold text-[#00FFC2] mx-4">
                        App Store <span></span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col my-4">
                <div className="flex flex-row">
                    <div className={`flex flex-col cursor-pointer border-[#00FFC2] border-solid px-3 py-3 ${fragment == 1 && 'border-b-2'}`} onClick={() => setFragment(1)}>
                        <p className="font-Sora font-medium text-base">About</p>
                    </div>
                    <div className={`flex flex-col cursor-pointer border-[#00FFC2] border-solid px-3 py-3 ${fragment == 2 && 'border-b-2'}`} onClick={() => setFragment(2)}>
                        <p className="font-Sora font-medium text-base">Announcements</p>
                    </div>
                    <div className={`flex flex-col cursor-pointer border-[#00FFC2] border-solid px-3 py-3 ${fragment == 3 && 'border-b-2'}`} onClick={() => setFragment(3)}>
                        <p className="font-Sora font-medium text-base">Collections</p>
                    </div>
                    <div className={`flex flex-row cursor-pointer justify-center border-solid border-[#00FFC2] ${fragment == 4 && 'border-b-2'} pl-5 pr-3 py-3`} onClick={() => setFragment(4)}>
                        <p className="font-Sora font-medium text-base">Livestreams</p>
                        <span className="relative flex h-2 w-2 ml-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#62ff00c4] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#61FF00]"></span>
                        </span>
                    </div>
                    <div className={`flex flex-col cursor-pointer border-[#00FFC2] border-solid px-3 py-3 ${fragment == 5 && 'border-b-2'}`} onClick={() => setFragment(5)}>
                        <p className="font-Sora font-medium text-base">Reviews</p>
                    </div>
                </div>
                <div className="border-[#0E211C] border-solid border-2"></div>
            </div>
            {/* Announcements */}
            <div className="flex-col flex">
                
            </div>
        </main>
    )
}
export default Game