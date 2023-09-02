import '../styles/globals.css';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { ToastContainer } from 'react-toastify';
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const chains = [polygonMumbai]
const projectId = 'a54c50aff332b1ac56e238a9b09f70ad'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider,
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

function MyApp({ Component, pageProps }) {
    return (
        <WagmiConfig client={wagmiClient}>
            <div className="mt-48 block bg-[#0000] lg:hidden w-full flex-col justify-center items-center overflow-hidden">
                <div className="flex-col justify-center items-center px-20 w-full text-center">
                    <div className='flex justify-center items-center'>
                        <Image
                            src="/Dianomi%20-%20Logo.png"
                            width={"160"}
                            height={"160"}
                        />
                    </div>
                    <p
                        className="my-10 text-4xl font-[700]"
                    >
                        Thanks for visiting!
                    </p>
                    <p
                        className="mb-10 text-3xl"
                    >
                        This link is currently only accessible on desktop.
                    </p>
                    <p
                        className="mb-20 text-3xl"
                    >
                        Good news - our mobile app is in the works and will be available
                        soon.
                    </p>
                </div>
            </div>
            <div className='w-full hidden lg:block'>
                <ToastContainer />
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </WagmiConfig>
    );
}

export default MyApp;