import Image from "next/image"
import { useEffect, useState } from "react"

const Game = () => {

    const [fragment, setFragment] = useState(1);

    useEffect(() => {
        console.log(fragment)
    }, [fragment])

    return (
        <main className="mx-auto max-w-screen-xl my-12">
            <div className="shadow-lg overflow-hidden">
                <div className="relative">
                    <Image src='/nft-banner.webp' width={1320} height={150} alt='' className="rounded-lg" />
                    <div className="w-full absolute bottom-0 left-0 z-10 transform translate-y-2/4 lg:w-auto lg:translate-x-1/3 flex justify-center">
                        <Image src='/sublime-scare.jpg' className="rounded-full border-white border-4" width={200} height={200} alt='Sublime Scare' />
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
                <h1 className="text-2xl font-Sora font-bold">Mad Armani</h1>
                <h1 className="text-base font-Sora font-normal text-[#808080] my-2">Wallet Address: 0xe45f9......936f28</h1>
            </div>
            <div className="flex flex-col my-4">
                <div className="flex flex-row">
                    <div className={`flex flex-col cursor-pointer border-[#00FFC2] border-solid px-3 py-3 ${fragment == 1 && 'border-b-2'}`} onClick={() => setFragment(1)}>
                        <p className="font-Sora font-medium text-base">My Games</p>
                    </div>
                    <div className={`flex flex-col cursor-pointer border-[#00FFC2] border-solid px-3 py-3 ${fragment == 2 && 'border-b-2'}`} onClick={() => setFragment(2)}>
                        <p className="font-Sora font-medium text-base">My Apps</p>
                    </div>
                    <div className={`flex flex-col cursor-pointer border-[#00FFC2] border-solid px-3 py-3 ${fragment == 3 && 'border-b-2'}`} onClick={() => setFragment(3)}>
                        <p className="font-Sora font-medium text-base">My NFTs</p>
                    </div>
                </div>
                <div className="border-[#0E211C] border-solid border-2"></div>
            </div>

            {/* Collection */}
            {fragment == 1 && (
                <div className="flex flex-col justify-center my-4">
                    <div className="flex flex-row justify-between items-start flex-wrap">
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                    </div>
                </div>
            )}


            {/* Collection */}
            {fragment == 2 && (
                <div className="flex flex-col justify-center my-4">
                    <div className="flex flex-row justify-between items-start flex-wrap">
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                    </div>
                </div>
            )}


            {/* Collection */}
            {fragment == 3 && (
                <div className="flex flex-col justify-center my-4">
                    <div className="flex flex-row justify-between items-start flex-wrap">
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                        <div className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                            <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                            <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                            <h6 className="text-sm text-[#DADADA] font-Sora font-normal">3.2</h6>
                        </div>
                    </div>
                </div>
            )}

        </main>
    )
}
export default Game