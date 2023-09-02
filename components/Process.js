import Image from "next/image"

const Process = () => {
    return (
        <div className="flex flex-col items-center mt-48 mb-32 overflow-hidden">
            <div className="flex flex-col items-center justify-between my-14">
                <p className="text-[#00FFC2] font-Sora font-bold text-base my-1">Development ek safar hai suhana.....</p>
                <p className="text-[#FAFAFA] font-Sora font-bold text-3xl my-1">Here’s how you can get started, you beautiful human!</p>
                <p className="text-[#7C7A85] font-Sora font-normal text-xl my-1">Build with Dianomi and take your product to the next freaking level!</p>
            </div>
            <div className="flex flex-col w-9/12 justify-center">
                <div className="flex flex-row">
                    <Image src='/process-1.svg' width={492} height={492} alt='' />
                    <div className="flex flex-col mx-10 justify-center">
                        <p className="my-2 font-Sora font-bold border-solid border border-[#3A3A3A] rounded-full h-8 w-8 text-[#00FFC2] flex flex-col items-center justify-center">1</p>
                        <p className="mt-1 font-Sora font-bold text-base text-[#FAFAFA]">Publish your App/Game</p>
                        <p className="font-Sora w-3/4 font-normal text-base text-[#7C7A85]">Developer? Publish your app/game to a community of thousands of gamers who would are willing to try out your creation!</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <Image src='/process-2.svg' width={492} height={492} alt='' />
                    <div className="flex flex-col mx-10 justify-center">
                        <p className="my-2 font-Sora font-bold border-solid border border-[#3A3A3A] rounded-full h-8 w-8 text-[#00FFC2] flex flex-col items-center justify-center">2</p>
                        <p className="mt-1 font-Sora font-bold text-base text-[#FAFAFA]">Get Crucial Feedback and conduct interviews!</p>
                        <p className="font-Sora w-3/4 font-normal text-base text-[#7C7A85]">Get useful feedback on your product from people trying them out and conduct 1:1 user interviews in the easiest way possible to gain even more insights!</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <Image src='/process-3.svg' width={492} height={492} alt='' />
                    <div className="flex flex-col mx-10 justify-center">
                        <p className="my-2 font-Sora font-bold border-solid border border-[#3A3A3A] rounded-full h-8 w-8 text-[#00FFC2] flex flex-col items-center justify-center">3</p>
                        <p className="mt-1 font-Sora font-bold text-base text-[#FAFAFA]">Broadcast and Engage!</p>
                        <p className="font-Sora w-3/4 font-normal text-base text-[#7C7A85]">Launching a new feature? Go livestream it to the world! Connect with your community members from across the globe and create impact!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Process