import Image from "next/image"

const GameBanner = () => {
    return (
        <div className="flex flex-row bg-[#D46236] rounded-lg my-8 p-8 justify-around">
            <div className="flex flex-col items-start p-0 justify-around w-9/12 pr-12">
                <div>
                    <h2 className="font-Sora font-bold text-5xl my-10">Aurory</h2>
                    <h3 className="font-Sora text-2xl font-light my-10">{`Aurory, in its current state, is a gaming platform focused on a sustainable next generation 'Play and Own' ecosystem. Our goal is to build an immersive platform consisting of multiple interoperable games, mini-games and dApps, where players can use their Aurory assets in any experience that exists on our platform.`}</h3>
                </div>
                <button className="bg-white flex flex-row justify-center items-center text-black border-2 border-black  rounded-md p-5 font-Sora font-bold mt-7">
                    View Now
                </button>
                <div></div>
            </div>
            <div className="w-3/12 flex flex-col justify-center items-center">
                <Image src='aurory.svg' width={800} height={800} alt="Aurora" />
                {/* <Image src='hero-token.svg' width={600} height={500} alt="" /> */}
            </div>
        </div>
    )
}
export default GameBanner