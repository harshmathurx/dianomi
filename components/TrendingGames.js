import Image from "next/image"

const TrendingGames = () => {
    return (
        <div className="flex flex-col justify-center my-4">
            <h2 className="text-2xl font-Sora font-bold my-4">All Games</h2>
            <div className="flex flex-row justify-between items-start flex-wrap">
                <div className="flex flex-col">
                    <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                    <h6 className="text-base font-Sora font-bold my-1">Game Name</h6>
                    <h6 className="text-sm text-[#DADADA] font-Sora font-normal">Game Name</h6>
                </div>
                <div className="flex flex-col">
                    <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                    <h6 className="text-base font-Sora font-bold my-1">Game Name</h6>
                    <h6 className="text-sm text-[#DADADA] font-Sora font-normal">Game Name</h6>
                </div>
                <div className="flex flex-col">
                    <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                    <h6 className="text-base font-Sora font-bold my-1">Game Name</h6>
                    <h6 className="text-sm text-[#DADADA] font-Sora font-normal">Game Name</h6>
                </div>
                <div className="flex flex-col">
                    <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                    <h6 className="text-base font-Sora font-bold my-1">Game Name</h6>
                    <h6 className="text-sm text-[#DADADA] font-Sora font-normal">Game Name</h6>
                </div>
                <div className="flex flex-col">
                    <Image src='/sublime-scare.jpg' className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                    <h6 className="text-base font-Sora font-bold my-1">Game Name</h6>
                    <h6 className="text-sm text-[#DADADA] font-Sora font-normal">Game Name</h6>
                </div>
            </div>
        </div>
    )
}
export default TrendingGames