import Image from "next/image"
import Link from "next/link"

const AllGames = ({games}) => {
    return (
        <div className="flex flex-col justify-center my-4">
            <h2 className="text-2xl font-Sora font-bold my-4">All Games</h2>
            <div className="flex flex-row justify-start items-start flex-wrap">
                {games?.map((game) => (
                    <Link href={`games/${game._id}`} className="flex flex-col mx-4" key={game._id}>
                        <Image src={game.icon} className="rounded-xl my-4" width={200} height={200} alt='Sublime Scare' />
                        <h6 className="text-base font-Sora font-bold my-1">{game.name}</h6>
                        <h6 className="text-sm text-[#DADADA] font-Sora font-normal">{game.developerName}</h6>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default AllGames