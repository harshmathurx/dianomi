import Link from "next/link"
import { Web3Button, useWeb3ModalTheme } from "@web3modal/react"
import { useEffect } from "react"
import { useAccount, } from "wagmi"
import axios from "axios"

const Navbar = () => {

    const { setTheme } = useWeb3ModalTheme()
    const { address, isConnected } = useAccount()


    // Set modal theme
    setTheme({
        themeMode: 'dark',
        themeVariables: {
            '--w3m-font-family': 'Roboto, sans-serif',
        }
    })

    useEffect(() => {
        const userRegisteration = async () => {
            await axios.post('/api/gamers', {
                address: address
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        if(isConnected){
            if(address){
                userRegisteration();
            }
        }
    }, [isConnected,address])

    return (
        <div className="flex flex-row items-center gap-12 px-4 pt-11 text-[#FAFAFA] justify-start mx-auto w-10/12 overflow-hidden">
            <Link href='/' className="font-MagicRetro text-5xl">
                <h1>DIANOMI</h1>
            </Link>
            <span className="font-Sora font-bold text-lg"><Link href='/explore'>EXPLORE</Link></span>
            <span className="font-Sora font-bold text-lg"><Link href='/register'>CREATE</Link></span>
            <span className="font-Sora font-bold text-lg flex flex-row">
                <Link href='/livestreams'>LIVESTREAMS</Link>
                <span className="relative flex h-3 w-3 mx-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#62ff00c4] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#61FF00]"></span>
                </span>
            </span>
            <span className="font-Sora font-bold text-lg"><Link href='/launchpad'>LAUNCHPAD</Link></span>
            <Web3Button />
        </div>
    )
}
export default Navbar