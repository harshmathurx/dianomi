import AllGames from "@/components/AllGames"
import Footer from "@/components/Footer"
import GameBanner from "@/components/GameBanner"
import TrendingGames from "@/components/TrendingGames"
import Game from "@/lib/GameSchema"
import connectDB from "@/lib/connectDB"

export const getServerSideProps = async () => {
    await connectDB();
    let games = await Game.find()
    console.log(games);
    games = JSON.parse(JSON.stringify(games));
    if(games){
        return {
            props: {
                games
            }
        }
    }
    else{
        return {
            props: {

            }
        }
    }
} 

const Explore = ({games}) => {
    return (
        <>
            <div className="w-10/12 flex-col flex text-white mx-auto mb-40">
                <GameBanner />
                <TrendingGames games={games} />
                <AllGames games={games} />
            </div>
        </>
    )
}
export default Explore