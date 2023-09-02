import Image from "next/image"

const Features = () => {
    return (
        <div className="flex flex-col items-center w-full overflow-hidden">
            <div className="flex flex-col justify-between items-center text-center">
                <p className="my-0.5 text-base text-[#00FFC2] font-Sora font-bold">Problem hai? Andar Solution hai!</p>
                <h6 className="my-0.5 text-3xl font-Sora font-bold">Here’s what you can achieve with Dianomi</h6>
                <p className="my-0.5 text-xl font-Sora font-normal text-[#7C7A85]">New game or App? To that we say GODSPEED!</p>
            </div>
            <div className="flex flex-row justify-between mt-10">
                <div className="mx-1 bg-[url('/card-1.svg')] bg-no-repeat w-[318px] h-[450px]">
                    <div className="flex flex-col items-start justify-end h-full py-5 px-10">
                        <p className="text-sm text-[#00FFC2] font-Sora font-medium">
                            Distribution
                        </p>
                        <p className="text-[#FAFAFA] text-sm font-extrabold font-Sora">
                            Launch your game in seconds!
                        </p>
                        <p className="text-sm font-Sora font-normal text-[#808080]">
                            With Dianomi, give your game the stage that it deserves. We help you distribute your game to community of avid gamers.
                        </p>
                    </div>
                </div>
                <div className="mx-1 bg-[url('/card-2.svg')] bg-no-repeat w-[318px] h-[450px]">
                    <div className="flex flex-col items-start justify-end h-full py-5 px-10">
                        <p className="text-sm text-[#00FFC2] font-Sora font-medium">
                            User Testing
                        </p>
                        <p className="text-[#FAFAFA] text-sm font-extrabold font-Sora">
                            Battle test everything!
                        </p>
                        <p className="text-sm font-Sora font-normal text-[#808080]">
                            Whether its a new feature or a completely new game, get help from your community members and ship beautiful things.
                        </p>
                    </div>
                </div>
                <div className="mx-1 bg-[url('/card-3.svg')] bg-no-repeat w-[318px] h-[450px]">
                    <div className="flex flex-col items-start justify-end h-full py-5 px-10">
                        <p className="text-sm text-[#00FFC2] font-Sora font-medium">
                            Feedbacks
                        </p>
                        <p className="text-[#FAFAFA] text-sm font-extrabold font-Sora">
                            Gather real insights!
                        </p>
                        <p className="text-sm font-Sora font-normal text-[#808080]">
                            We understand how crucial initial user feedback can be. We help you build hand in hand with your community members.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features