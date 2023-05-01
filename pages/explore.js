import AllGames from "@/components/AllGames"
import Footer from "@/components/Footer"
import GameBanner from "@/components/GameBanner"
import Navbar from "@/components/Navbar"
import TrendingGames from "@/components/TrendingGames"
import Image from "next/image"

const Explore = () => {
    return (
        <>
            <Navbar />
            <div className="w-10/12 flex-col flex text-white mx-auto mb-40">
                <GameBanner />
                <TrendingGames />
                <AllGames />
            </div>
            <Footer />
        </>
    )
}
export default Explore