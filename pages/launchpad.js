import Image from "next/image"

const Launchpad = () => {
    return (
        <main className="w-10/12 h-max flex-col flex text-white mx-auto px-5 justify-center items-center my-16 ">
            <div className="flex flex-row">
                <div className="flex flex-col w-2/4">
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
                <div className="flex flex-col w-2/4">

                </div>
            </div>
        </main>
    )
}
export default Launchpad