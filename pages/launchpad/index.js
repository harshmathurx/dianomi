import GameBanner from "@/components/GameBanner"
import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

const Collections = () => {

    const [fragment, setFragment] = useState(1);

    return (

        <main className="w-11/12 h-max flex-col flex text-white mx-auto px-5 justify-between my-16 ">
            <GameBanner />
            <div className="flex flex-col my-4">
                <div className="flex flex-row">
                    <div onClick={() => setFragment(1)} className={`flex flex-col cursor-pointer border-[#00FFC2] border-solid px-3 py-3 ${fragment == 1 && 'border-b-2'}`}>
                        <p className="font-Sora font-medium text-base">About</p>
                    </div>
                    <div onClick={() => setFragment(2)} className={`flex flex-col cursor-pointer border-[#00FFC2] border-solid px-3 py-3 ${fragment == 5 && 'border-b-2'}`}>
                        <p className="font-Sora font-medium text-base">Reviews</p>
                    </div>
                </div>
                <div className="border-[#0E211C] border-solid border-2"></div>
            </div>
            <div className="flex flex-col">
                {fragment == 1 && (
                    <div className="flex flex-col justify-center my-4">
                        <h2 className="text-2xl font-Sora font-bold my-4">Collection</h2>
                        <div className="flex flex-row justify-between items-start flex-wrap">
                            <Link href='/launchpad/asfadf' className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                                <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                                <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                                <div className="flex flex-row justify-between w-11/12">
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Minting</h6>
                                        <div className="flex flex-row">
                                            <h6 className="text-sm font-Sora font-semibold">
                                                Now</h6>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Price</h6>
                                        <div className="flex flex-row">
                                            <Image width={20} height={20} src='/matic-logo.svg' alt='' />
                                            <h6 className="text-sm font-Sora mx-2 font-semibold">
                                                3.2</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/launchpad/asfadf' className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                                <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                                <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                                <div className="flex flex-row justify-between w-11/12">
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Minting</h6>
                                        <div className="flex flex-row">
                                            <h6 className="text-sm font-Sora font-semibold">
                                                Now</h6>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Price</h6>
                                        <div className="flex flex-row">
                                            <Image width={20} height={20} src='/matic-logo.svg' alt='' />
                                            <h6 className="text-sm font-Sora mx-2 font-semibold">
                                                3.2</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/launchpad/asfadf' className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                                <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                                <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                                <div className="flex flex-row justify-between w-11/12">
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Minting</h6>
                                        <div className="flex flex-row">
                                            <h6 className="text-sm font-Sora font-semibold">
                                                Now</h6>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Price</h6>
                                        <div className="flex flex-row">
                                            <Image width={20} height={20} src='/matic-logo.svg' alt='' />
                                            <h6 className="text-sm font-Sora mx-2 font-semibold">
                                                3.2</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/launchpad/asfadf' className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                                <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                                <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                                <div className="flex flex-row justify-between w-11/12">
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Minting</h6>
                                        <div className="flex flex-row">
                                            <h6 className="text-sm font-Sora font-semibold">
                                                Now</h6>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Price</h6>
                                        <div className="flex flex-row">
                                            <Image width={20} height={20} src='/matic-logo.svg' alt='' />
                                            <h6 className="text-sm font-Sora mx-2 font-semibold">
                                                3.2</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/launchpad/asfadf' className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                                <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                                <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                                <div className="flex flex-row justify-between w-11/12">
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Minting</h6>
                                        <div className="flex flex-row">
                                            <h6 className="text-sm font-Sora font-semibold">
                                                Now</h6>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Price</h6>
                                        <div className="flex flex-row">
                                            <Image width={20} height={20} src='/matic-logo.svg' alt='' />
                                            <h6 className="text-sm font-Sora mx-2 font-semibold">
                                                3.2</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
                {/* Announcements */}
                {fragment == 2 && (
                    <div className="flex flex-col justify-center my-4">
                        <h2 className="text-2xl font-Sora font-bold my-4">Collection</h2>
                        <div className="flex flex-row justify-between items-start flex-wrap">
                            <Link href='/launchpad/asfadf' className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                                <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                                <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                                <div className="flex flex-row justify-between w-11/12">
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Minting</h6>
                                        <div className="flex flex-row">
                                            <h6 className="text-sm font-Sora font-semibold">
                                                3 days ago</h6>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Price</h6>
                                        <div className="flex flex-row">
                                            <Image width={20} height={20} src='/matic-logo.svg' alt='' />
                                            <h6 className="text-sm font-Sora mx-2 font-semibold">
                                                3.2</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/launchpad/asfadf' className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                                <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                                <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                                <div className="flex flex-row justify-between w-11/12">
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Minting</h6>
                                        <div className="flex flex-row">
                                            <h6 className="text-sm font-Sora font-semibold">
                                                3 days ago</h6>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Price</h6>
                                        <div className="flex flex-row">
                                            <Image width={20} height={20} src='/matic-logo.svg' alt='' />
                                            <h6 className="text-sm font-Sora mx-2 font-semibold">
                                                3.2</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/launchpad/asfadf' className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                                <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                                <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                                <div className="flex flex-row justify-between w-11/12">
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Minting</h6>
                                        <div className="flex flex-row">
                                            <h6 className="text-sm font-Sora font-semibold">
                                                3 days ago</h6>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Price</h6>
                                        <div className="flex flex-row">
                                            <Image width={20} height={20} src='/matic-logo.svg' alt='' />
                                            <h6 className="text-sm font-Sora mx-2 font-semibold">
                                                3.2</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/launchpad/asfadf' className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                                <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                                <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                                <div className="flex flex-row justify-between w-11/12">
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Minting</h6>
                                        <div className="flex flex-row">
                                            <h6 className="text-sm font-Sora font-semibold">
                                                3 days ago</h6>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Price</h6>
                                        <div className="flex flex-row">
                                            <Image width={20} height={20} src='/matic-logo.svg' alt='' />
                                            <h6 className="text-sm font-Sora mx-2 font-semibold">
                                                3.2</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/launchpad/asfadf' className="flex flex-col border border-[#272727] px-5 py-4 rounded-xl">
                                <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                                <h6 className="text-base font-Sora font-bold my-1">NFT Name</h6>
                                <div className="flex flex-row justify-between w-11/12">
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Minting</h6>
                                        <div className="flex flex-row">
                                            <h6 className="text-sm font-Sora font-semibold">
                                                3 days ago</h6>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h6 className="text-base font-Sora font-base my-1 text-[#DADADA]">Price</h6>
                                        <div className="flex flex-row">
                                            <Image width={20} height={20} src='/matic-logo.svg' alt='' />
                                            <h6 className="text-sm font-Sora mx-2 font-semibold">
                                                3.2</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    )}

            </div>
        </main>

    )
}
export default Collections