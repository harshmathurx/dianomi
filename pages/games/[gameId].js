import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Network, Alchemy } from 'alchemy-sdk';
import Image from "next/image"
import { useEffect, useState } from "react"
import { useAccount } from "wagmi";

const Game = () => {

    const settings = {
        apiKey: "demo",
        network: Network.MATIC_MUMBAI,
    };

    const alchemy = new Alchemy(settings);
    const [fragment, setFragment] = useState(1);
    const { address, isConnected } = useAccount()


    const [nftsOwned, setNftsOwned] = useState([]);
    const [hasAccess, setHasAccess] = useState(false);

    useEffect(() => {
        const getUserNFTs = async () => {
            const res = await alchemy.nft.getNftsForOwner(address)
            if (res.ownedNfts) {
                let nftsList = [];
                res.ownedNfts.map((nft) => {
                    if (nft.contract) {
                        nftsList.push(nft.contract.address);
                    }
                })
                setNftsOwned(nftsList);
            }
        }
        getUserNFTs();
    }, [])

    useEffect(() => {
        console.log(nftsOwned)
        configureAccess('0xFc5a6601eE821B20E6e5813C2260fa4d750682bc'.toLowerCase());
    }, [nftsOwned, address])

    useEffect(() => {
        console.log("has access => ", hasAccess)
    }, [hasAccess])

    const configureAccess = (address) => {
        if (nftsOwned.includes(address)) {
            setHasAccess(true);
        }
        else {
            setHasAccess(false);
        }
    }



    return (
        <>
            <Navbar />
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

                {(hasAccess) && <div className="flex flex-col">
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
                </div>}

                <div className="flex flex-col my-4">
                    <div className="flex flex-row">
                        <div onClick={() => setFragment(1)} className={`flex flex-col cursor-pointer border-[#00FFC2] border-solid px-3 py-3 ${fragment == 1 && 'border-b-2'}`}>
                            <p className="font-Sora font-medium text-base">About</p>
                        </div>
                        {(hasAccess) && <div onClick={() => setFragment(2)} className={`flex flex-col cursor-pointer border-[#00FFC2] border-solid px-3 py-3 ${(fragment == 2) && 'border-b-2'}`}>
                            <p className="font-Sora font-medium text-base">Announcements</p>
                        </div>}
                        <div onClick={() => setFragment(3)} className={`flex flex-col cursor-pointer border-[#00FFC2] border-solid px-3 py-3 ${fragment == 3 && 'border-b-2'}`}>
                            <p className="font-Sora font-medium text-base">Collections</p>
                        </div>
                        {hasAccess && <div onClick={() => setFragment(4)} className={`flex flex-row cursor-pointer justify-center border-solid border-[#00FFC2] ${fragment == 4 && 'border-b-2'} pl-5 pr-3 py-3`}>
                            <p className="font-Sora font-medium text-base">Livestreams</p>
                            <span className="relative flex h-2 w-2 ml-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#62ff00c4] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#61FF00]"></span>
                            </span>
                        </div>}
                        <div onClick={() => setFragment(5)} className={`flex flex-col cursor-pointer border-[#00FFC2] border-solid px-3 py-3 ${fragment == 5 && 'border-b-2'}`}>
                            <p className="font-Sora font-medium text-base">Reviews</p>
                        </div>
                    </div>
                    <div className="border-[#0E211C] border-solid border-2"></div>
                </div>

                {/* ABOUT SECTION */}
                {fragment == 1 && (
                    <div className="flex flex-row">
                        <div className="flex flex-col w-8/12">
                            <div className="flex flex-col my-2">
                                <p className="my-2 text-[#FAFAFA] font-Sora font-bold text-3xl">Introduction</p>
                                <p className="my-2 text-[#7C7A85] font-Sora font-normal text-xl">{`Aurory, in its current state, is a gaming platform focused on a sustainable next generation 'Play and Own' ecosystem. Our goal is to build an immersive platform consisting of multiple interoperable games, mini-games and dApps, where players can use their Aurory assets in any experience that exists on our platform.`}</p>
                            </div>
                            <div className="flex flex-col my-2">
                                <p className="my-2 text-[#FAFAFA] font-Sora font-bold text-3xl">Overview</p>
                                <p className="my-2 text-[#7C7A85] font-Sora font-normal text-xl">{`Aurory, in its current state, is a gaming platform focused on a sustainable next generation 'Play and Own' ecosystem. Our goal is to build an immersive platform consisting of multiple interoperable games, mini-games and dApps, where players can use their Aurory assets in any experience that exists on our platform.`}</p>
                            </div>
                        </div>
                        <div className="w-4/12 flex flex-row h-fit my-10 justify-end">
                            <div className="flex flex-col border border-solid border-[#272727] w-11/12 p-4 rounded-lg">
                                <div className="flex flex-row items-center justify-center my-2">
                                    <p className="w-1/3 font-Sora font-semibold text-sm">Genre</p>
                                    <p className="w-2/3 font-Sora font-normal text-xs text-end">JRPG, Metaverse, PVE, PVP, Strategy</p>
                                </div>
                                <div className="flex flex-row items-center justify-center my-2">
                                    <p className="w-1/3 font-Sora font-semibold text-sm">Chain</p>
                                    <p className="w-2/3 font-Sora font-normal text-xs text-end">Solana</p>
                                </div>
                                <div className="flex flex-row items-center justify-center my-2">
                                    <p className="w-1/3 font-Sora font-semibold text-sm">Status</p>
                                    <p className="w-2/3 font-Sora font-normal text-xs text-end">Beta</p>
                                </div>
                                <div className="flex flex-row items-center justify-center my-2">
                                    <p className="w-1/3 font-Sora font-semibold text-sm">Platforms</p>
                                    <p className="w-2/3 font-Sora font-normal text-xs text-end">Android, iOS & Web</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Announcements */}
                {fragment == 2 && (<div className="flex-col flex mt-5 border-[#272727] border-2 rounded-lg">
                    <div className="flex flex-row border-b-2 border-[#272727] p-5">
                        <div className="flex flex-row w-2/12 py-2"><p className=" text-[#DADADA] font-Sora font-semibold text-base">3 Mintues Ago</p></div>
                        <div className="flex flex-col w-8/12 py-2">
                            <p className="font-Sora font-bold text-xl">Announcement Title goes here</p>
                            <p className="text-[#DADADA] font-Sora font-normal text-base">{`Aurory, in its current state, is a gaming platform focused on a sustainable next generation 'Play and Own' ecosystem. Our goal is to build an immersive platform consisting of multiple interoperable games, mini-games and dApps, where players can use their Aurory assets in any experience that exists on our platform.`}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center w-3/12">
                            {/* <button className="text-[#00FFC2] border-[#00FFC2] border-2 rounded-lg p-4 font-Sora font-bold flex flex-row">
                            View Now!
                            <Image src='/play-btn.svg' width={25} height={25} alt='' className="mx-4" />
                        </button> */}
                        </div>
                    </div>
                    <div className="flex flex-row border-[#272727] p-5">
                        <div className="flex flex-row w-2/12 py-2"><p className=" text-[#DADADA] font-Sora font-semibold text-base">3 Mintues Ago</p></div>
                        <div className="flex flex-col w-8/12 py-2">
                            <p className="font-Sora font-bold text-xl">Announcement Title goes here</p>
                            <p className="text-[#DADADA] font-Sora font-normal text-base">{`Aurory, in its current state, is a gaming platform focused on a sustainable next generation 'Play and Own' ecosystem. Our goal is to build an immersive platform consisting of multiple interoperable games, mini-games and dApps, where players can use their Aurory assets in any experience that exists on our platform.`}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center w-3/12">
                            <button className="text-[#00FFC2] border-[#00FFC2] border-2 rounded-lg p-4 font-Sora font-bold flex flex-row">
                                View Now!
                                <Image src='/play-btn.svg' width={25} height={25} alt='' className="mx-4" />
                            </button>
                        </div>
                    </div>
                </div>)}

                {/* Collection */}
                {fragment == 3 && (
                    <div className="flex flex-col justify-center my-4">
                        <h2 className="text-2xl font-Sora font-bold my-4">Collection</h2>
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

                {/* LiveStreams */}
                {fragment == 4 && (
                    <div className="flex flex-row flex-wrap mt-8">
                        <div className="flex flex-col my-3 mx-4">
                            <div className="h-[167px] w-[267px] rounded-lg bg-[#272727]"></div>
                            <div className="flex flex-row justify-between w-full my-2">
                                <p className="font-Sora font-semibold text-base text-[#DADADA]">Video Title goes here</p>
                                <p className="font-Sora font-bold text-base text-[#FF0743] mr-2">● LIVE</p>
                            </div>
                            <p className="font-Sora font-normal text-sm text-[#DADADA]">3 days ago</p>
                        </div>
                        <div className="flex flex-col my-3 mx-4">
                            <div className="h-[167px] w-[267px] rounded-lg bg-[#272727]"></div>
                            <div className="flex flex-row justify-between w-full my-2">
                                <p className="font-Sora font-semibold text-base text-[#DADADA]">Video Title goes here</p>
                                {/* <p className="font-Sora font-bold text-base text-[#FF0743] mr-2">● LIVE</p> */}
                            </div>
                            <p className="font-Sora font-normal text-sm text-[#DADADA]">3 days ago</p>
                        </div>
                        <div className="flex flex-col my-3 mx-4">
                            <div className="h-[167px] w-[267px] rounded-lg bg-[#272727]"></div>
                            <div className="flex flex-row justify-between w-full my-2">
                                <p className="font-Sora font-semibold text-base text-[#DADADA]">Video Title goes here</p>
                                {/* <p className="font-Sora font-bold text-base text-[#FF0743] mr-2">● LIVE</p> */}
                            </div>
                            <p className="font-Sora font-normal text-sm text-[#DADADA]">3 days ago</p>
                        </div>
                    </div>
                )}

                {/* Reviews */}
                {fragment == 5 && (
                    <div className="flex flex-row justify-evenly">
                        <div className="flex flex-col bg-[#272727] rounded-lg w-3/12 p-5">
                            <div className="flex flex-row">
                                <Image src='/vettel.png' height={40} width={40} className="rounded-full" alt='' />
                                <div className="flex flex-col mx-4">
                                    <p className="font-Sora font-bold text-sm">Sebastian Vettel</p>
                                    <div className="flex flex-row">
                                        <Image src='/rate-star-color.svg' width={16} height={16} alt="" />
                                        <Image src='/rate-star-color.svg' width={16} height={16} alt="" />
                                        <Image src='/rate-star-color.svg' width={16} height={16} alt="" />
                                        <Image src='/rate-star-color.svg' width={16} height={16} alt="" />
                                        <Image src='/rate-star.svg' width={16} height={16} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="font-Sora font-semibold my-4">
                                “Everything seems to work great in the game. Love the game. Really enjoyable”
                            </p>
                        </div>
                        <div className="flex flex-col bg-[#272727] rounded-lg w-3/12 p-5">
                            <div className="flex flex-row">
                                <Image src='/vettel.png' height={40} width={40} className="rounded-full" alt='' />
                                <div className="flex flex-col mx-4">
                                    <p className="font-Sora font-bold text-sm">Sebastian Vettel</p>
                                    <div className="flex flex-row">
                                        <Image src='/rate-star-color.svg' width={16} height={16} alt="" />
                                        <Image src='/rate-star-color.svg' width={16} height={16} alt="" />
                                        <Image src='/rate-star-color.svg' width={16} height={16} alt="" />
                                        <Image src='/rate-star-color.svg' width={16} height={16} alt="" />
                                        <Image src='/rate-star.svg' width={16} height={16} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="font-Sora font-semibold my-4">
                                “Everything seems to work great in the game. Love the game. Really enjoyable”
                            </p>
                        </div>
                        <div className="flex flex-col bg-[#272727] rounded-lg w-3/12 p-5">
                            <div className="flex flex-row">
                                <Image src='/vettel.png' height={40} width={40} className="rounded-full" alt='' />
                                <div className="flex flex-col mx-4">
                                    <p className="font-Sora font-bold text-sm">Sebastian Vettel</p>
                                    <div className="flex flex-row">
                                        <Image src='/rate-star-color.svg' width={16} height={16} alt="" />
                                        <Image src='/rate-star-color.svg' width={16} height={16} alt="" />
                                        <Image src='/rate-star-color.svg' width={16} height={16} alt="" />
                                        <Image src='/rate-star-color.svg' width={16} height={16} alt="" />
                                        <Image src='/rate-star.svg' width={16} height={16} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="font-Sora font-semibold my-4">
                                “Everything seems to work great in the game. Love the game. Really enjoyable”
                            </p>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    )
}
export default Game