import '../styles/globals.css';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { ToastContainer } from 'react-toastify';
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '@/components/Navbar';

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
        <>
            <WagmiConfig client={wagmiClient}>
                <ToastContainer />
                <Navbar />
                <Component {...pageProps} />
            </WagmiConfig>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </>
    );
}

export default MyApp;