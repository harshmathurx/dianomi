import AllGames from "@/components/AllGames"
import GameBanner from "@/components/GameBanner"
import TrendingGames from "@/components/TrendingGames"
import Image from "next/image"

const Explore = () => {
    return (
        <div className="w-10/12 flex-col flex text-white mx-auto mb-40">
            <GameBanner />
            <TrendingGames />
            <AllGames />
        </div>
    )
}
export default Explore