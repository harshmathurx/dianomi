import Image from "next/image"
import { Network, Alchemy } from 'alchemy-sdk';
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

const Launchpad = () => {

    const settings = {
        apiKey: "demo",
        network: Network.MATIC_MUMBAI,
    };

    const alchemy = new Alchemy(settings);

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
    }, [address])

    useEffect(() => {
        console.log(nftsOwned)
        configureAccess('0xFc5a6601eE821B20E6e5813C2260fa4d750682bc'.toLowerCase());
    }, [nftsOwned])

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
        <main className="w-11/12 h-max flex-col flex text-white mx-auto px-5 justify-between my-16 ">
            {hasAccess ? (<div className="flex flex-row justify-around">
                <div className="flex flex-col w-3/6">
                    <Image src='/dummyNft.png' width={900} height={380} alt='nft' />
                    <div className="flex flex-row justify-between my-4">
                        <p className="font-bold font-Sora">Total Minted</p>
                        <p className="font-bold font-Sora">80% (1000/1200)</p>
                    </div>
                    <div className="relative">
                        <div className="border-[#FFFFFF] w-full absolute border-solid border-2"></div>
                        <div className="border-[#00FFC2] absolute w-4/5 border-solid border-2"></div>
                    </div>
                    <div className="flex flex-row my-5">
                        <p className="px-3 pt-1 mr-2 font-Sora font-bold text-2xl">-</p>
                        <p className="p-2 bg-[#ffffff5e] rounded-lg mx-2 px-4 font-Sora font-bold text-lg">1</p>
                        <p className="px-3 pt-1 mx-2 font-Sora font-bold text-2xl">+</p>
                        <button className="bg-[#00FFC2] rounded-md py-3 px-4 font-Sora font-bold text-[#000000] mx-4">
                            Mint
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-2/6">
                    <div className="flex flex-col mb-8">
                        <p className="text-[#888888] font-Sora text-2xl">Collection Name</p>
                        <h1 className="font-Sora font-bold text-4xl">Aurory - Genesis</h1>
                    </div>
                    <div className="flex flex-col mb-8">
                        <p className="text-[#888888] font-Sora text-2xl">Collection Name</p>
                        <h3 className="font-Sora font-semibold text-xl">McLaren Racing Limited is a British motor racing team based at the McLaren Technology Centre in Woking, Surrey, England.</h3>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col justify-between w-1/2">
                            <p className="text-[#888888] font-Sora text-2xl my-2">Price</p>
                            <div className="flex flex-row items-center">
                                <Image width={30} height={30} src='/matic-logo.svg' alt='' />
                                <p className="font-Sora font-bold text-4xl mx-4">0.8</p>
                                <p className="font-Sora text-[#C4C4C4]">($59.28)</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-start w-1/2">
                            <p className="text-[#888888] font-Sora text-2xl my-2">Minting</p>
                            <p className="font-Sora font-bold text-4xl">Now</p>

                        </div>
                    </div>
                </div>
            </div>): <div className="flex flex-row justify-around">
                <h1 className="font-Sora font-bold font-4xl">You do not have access to this mint</h1>
            </div>}
        </main>
    )
}
export default Launchpad