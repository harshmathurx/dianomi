import Navbar from "@/components/Navbar"
import Livestream from "@/lib/LivestreamSchema"
import connectDB from "@/lib/connectDB"
import { Alchemy, Network } from "alchemy-sdk"
import { useEffect, useRef, useState } from "react"
import { useAccount } from "wagmi"
import { useEventListener, useHuddle01 } from '@huddle01/react';
import { Audio, Video } from '@huddle01/react/components';
import {
    useAudio,
    useLobby,
    useMeetingMachine,
    usePeers,
    useRoom,
    useVideo,
} from '@huddle01/react/hooks';

export const getServerSideProps = async (context) => {
    const roomId = context.params.roomId
    connectDB()
    const room = await Livestream.findOne({ roomId: roomId })
    if (room) {
        return {
            props: {
                room: JSON.parse(JSON.stringify(room))
            }
        }
    }
    else {
        console.log(room)
        return {
            props: {

            }
        }
    }
}

const Room = ({ room }) => {

    console.log("rerendering")

    const { address, isConnected } = useAccount();

    const [nftsOwned, setNftsOwned] = useState([]);
    const [hasAccess, setHasAccess] = useState(false);

    const [isAdmin, setIsAdmin] = useState(false);

    const settings = {
        apiKey: "demo",
        network: Network.MATIC_MUMBAI,
    };

    const alchemy = new Alchemy(settings);

    const videoRef = useRef(null);

    const { state, send } = useMeetingMachine();
    // Event Listner
    useEventListener('lobby:cam-on', () => {
        if (state.context.camStream && videoRef.current)
            videoRef.current.srcObject = state.context.camStream;
    });

    const { initialize, isInitialized } = useHuddle01();
    const { joinLobby } = useLobby();
    const {
        fetchAudioStream,
        produceAudio,
        stopAudioStream,
        stopProducingAudio,
        stream: micStream,
    } = useAudio();
    const {
        fetchVideoStream,
        produceVideo,
        stopVideoStream,
        stopProducingVideo,
        stream: camStream,
    } = useVideo();
    const { joinRoom, leaveRoom } = useRoom();
    const { peers } = usePeers();

    useEffect(() => {
        const getUserNFTs = async () => {
            if (isConnected) {
                const res = await alchemy.nft.getNftsForOwner(address)
                if (res.ownedNfts) {
                    let nftsList = [];
                    res.ownedNfts.map((nft) => {
                        if (nft.contract) {
                            nftsList.push(nft.contract.address);
                        }
                    })
                    setNftsOwned(nftsList);
                }
            }
        }
        getUserNFTs();
        if (room) {
            if (isConnected && address) {
                if (room.developerAddress == address) {
                    setIsAdmin(true)
                }
                else {
                    setIsAdmin(false)
                }
            }
        }
    }, [address])

    useEffect(() => {
        if (room.isTokenGated) {
            if (nftsOwned.includes(room.tokenAddress)) {
                setHasAccess(true);
            }
            else {
                setHasAccess(false)
            }
        }
        else {
            setHasAccess(true)
        }
        initialize('KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR')
    }, [nftsOwned, room.roomId])

    return (
        <>
            <main className="mx-auto max-w-screen-xl my-12 flex flex-col w-4/5 text-white">
                <h1 className="text-2xl font-Sora font-bold">Room Id - {room.roomId}</h1>
                <h1 className="text-2xl font-Sora font-bold">{room.title}</h1>

                <div className={`isNotConnected ${!isConnected && 'hidden'}`}>
                    <div>
                        <h1 className="text-4xl font-Sora font-bold">Please Connect your Wallet</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={`noAccess ${hasAccess && 'hidden'}`}>
                            <h1>No Access</h1>
                        </div>
                        <div className={`hasAccess ${!hasAccess && 'hidden'}`}>
                            <h1>Has Access</h1>

                            <div className={`adminFunc ${!isAdmin && 'hidden'}`}>
                                <h2 className="text-2xl">Me Id</h2>
                                <div className="break-words">
                                    {JSON.stringify(state.context.peerId)}
                                </div>
                                <h2 className="text-2xl">Consumers</h2>
                                <div className="break-words">
                                    {JSON.stringify(state.context.consumers)}
                                </div>

                                <h2 className="text-2xl">Error</h2>
                                <div className="break-words text-red-500">
                                    {JSON.stringify(state.context.error)}
                                </div>
                                <h2 className="text-2xl">Peers</h2>
                                <div className="break-words">{JSON.stringify(peers)}</div>
                                <h2 className="text-2xl">Consumers</h2>
                                <div className="break-words">
                                    {JSON.stringify(state.context.consumers)}
                                </div>
                                <h2 className="text-3xl text-blue-500 font-extrabold">Idle</h2>
                                <br />
                                <br />
                                
                                <h2 className="text-3xl text-red-500 font-extrabold">Initialized</h2>
                                <div className="flex gap-4 flex-wrap">
                                    <button className="border border-solid border-slate-400 p-3 rounded-lg"
                                        disabled={!state.matches('Initialized.JoinedLobby')}
                                        onClick={() => send('LEAVE_LOBBY')}
                                    >
                                        LEAVE_LOBBY
                                    </button>

                                    <button className="border border-solid border-slate-400 p-3 rounded-lg"
                                        disabled={!stopVideoStream.isCallable}
                                        onClick={stopVideoStream}
                                    >
                                        STOP_VIDEO_STREAM
                                    </button>
                                    <button className="border border-solid border-slate-400 p-3 rounded-lg"
                                        disabled={!stopAudioStream.isCallable}
                                        onClick={stopAudioStream}
                                    >
                                        STOP_AUDIO_STREAM
                                    </button>
                                </div>
                                <br />
                                <h2 className="text-3xl text-green-600 font-extrabold">Room</h2>
                                <video ref={videoRef} autoPlay muted></video>
                                <div className="flex gap-4 flex-wrap">
                                    <button className="border border-solid border-slate-400 p-3 rounded-lg"
                                        disabled={!produceAudio.isCallable}
                                        onClick={() => produceAudio(micStream)}
                                    >
                                        PRODUCE_MIC
                                    </button>

                                    <button className="border border-solid border-slate-400 p-3 rounded-lg"
                                        disabled={!produceVideo.isCallable}
                                        onClick={() => produceVideo(camStream)}
                                    >
                                        PRODUCE_CAM
                                    </button>

                                    <button className="border border-solid border-slate-400 p-3 rounded-lg"
                                        disabled={!stopProducingAudio.isCallable}
                                        onClick={() => stopProducingAudio()}
                                    >
                                        STOP_PRODUCING_MIC
                                    </button>

                                    <button className="border border-solid border-slate-400 p-3 rounded-lg"
                                        disabled={!stopProducingVideo.isCallable}
                                        onClick={() => stopProducingVideo()}
                                    >
                                        STOP_PRODUCING_CAM
                                    </button>

                                    <button className="border border-solid border-slate-400 p-3 rounded-lg" disabled={!leaveRoom.isCallable} onClick={leaveRoom}>
                                        LEAVE_ROOM
                                    </button>
                                </div>
                            </div>

                            <div>
                                <button className="border border-solid border-slate-400 p-3 rounded-lg"
                                    disabled={!fetchVideoStream.isCallable}
                                    onClick={fetchVideoStream}
                                >
                                    FETCH_VIDEO_STREAM
                                </button>

                                <button className="border border-solid border-slate-400 p-3 rounded-lg"
                                    disabled={!fetchAudioStream.isCallable}
                                    onClick={fetchAudioStream}
                                >
                                    FETCH_AUDIO_STREAM
                                </button>

                                <button className="border border-solid border-slate-400 p-3 rounded-lg" disabled={!joinRoom.isCallable} onClick={joinRoom}>
                                    JOIN_ROOM
                                </button>
                                <button className="border border-solid border-slate-400 p-3 rounded-lg"
                                    disabled={!joinLobby.isCallable || !room.roomId}
                                    onClick={() => {
                                        joinLobby(room.roomId ? room.roomId : '');
                                    }}
                                >
                                    JOIN_LOBBY
                                </button>
                                <h2 className="text-2xl">Room State</h2>
                                <h3>{JSON.stringify(state.value)}</h3>
                                <div className="">
                                    Peer videos
                                    {Object.values(peers)
                                        .filter(peer => peer.cam)
                                        .map(peer => (
                                            <Video
                                                key={peer.peerId}
                                                peerId={peer.peerId}
                                                track={peer.cam}
                                                debug
                                            />
                                        ))}
                                    {Object.values(peers)
                                        .filter(peer => peer.mic)
                                        .map(peer => (
                                            <Audio key={peer.peerId} peerId={peer.peerId} track={peer.mic} />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}
export default Room