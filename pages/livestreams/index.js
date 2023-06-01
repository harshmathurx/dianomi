import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const Livestreams = () => {

    const { address, isConnected } = useAccount();
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: '',
        isTokenGated: false,
        tokenAddress: '',
        developerAddress: address
    })

    const handleChange = name => event => {
        setFormData({ ...formData, [name]: event.target.value });
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

    const startNewStream = async () => {
        await axios.post('/api/livestreams', { ...formData, developerAddress: address })
            .then(data => {
                if (data) {
                    if (data.error) {
                        console.log(data.error)
                    }
                    else {
                        console.log(data.data.data);
                        router.push(`/livestreams/${data.data.data.roomId}`);
                    }
                }
                else {
                    console.log("Error")
                }
            })
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
        <div>
            <main className="mx-auto max-w-screen-xl my-12 flex flex-col w-4/5 text-white">
                {(isConnected && address) && (<div>
                    <h1 className="font-Sora font-bold text-2xl my-4">Start a new live stream</h1>
                    <input value={formData.title} type="text" onChange={handleChange('title')} className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-7 border-[#A6A6A6]" placeholder="Title of the stream" />
                    <div className="">
                        <input value={formData.isTokenGated} onChange={() => setFormData({ ...formData, isTokenGated: !formData.isTokenGated })} type="checkbox" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg p-5 border-[#A6A6A6]" />
                        <label className="mx-2">Token Gated?</label>
                    </div>
                    <input value={formData.tokenAddress} disabled={!formData.isTokenGated} type="text" onChange={handleChange('tokenAddress')} required className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-7 border-[#A6A6A6]" placeholder="Contract Address" />
                    <button onClick={startNewStream} className="bg-[#00FFC2] w-fit rounded-md py-3 px-4 my-4 font-Sora font-bold text-[#000000] mr-2">
                        Go Live <span></span>
                    </button>
                </div>)}
                <h1 className="font-Sora font-bold text-2xl my-4">Live Right Now!</h1>
                <div className="flex flex-row flex-wrap mt-8">
                    <div className="flex flex-col my-3 mx-4">
                        <div className="h-[167px] w-[267px] rounded-lg bg-[#272727]"></div>
                        <div className="flex flex-row justify-between w-full my-2">
                            <p className="font-Sora font-semibold text-base text-[#DADADA]">Video Title goes here</p>
                            <p className="font-Sora font-bold text-base text-[#FF0743] mr-2">● LIVE</p>
                        </div>
                        <p className="font-Sora font-normal text-sm text-[#DADADA]">3 days ago</p>
                    </div>
                </div>
                <h1 className="font-Sora font-bold text-2xl my-4">Past Livestreams</h1>
                <div className="flex flex-row flex-wrap mt-8">
                    <div className="flex flex-col my-3 mx-4">
                        <div className="h-[167px] w-[267px] rounded-lg bg-[#272727]"></div>
                        <div className="flex flex-row justify-between w-full my-2">
                            <p className="font-Sora font-semibold text-base text-[#DADADA]">Video Title goes here</p>
                            {/* <p className="font-Sora font-bold text-base text-[#FF0743] mr-2">● LIVE</p> */}
                        </div>
                        <p className="font-Sora font-normal text-sm text-[#DADADA]">3 days ago</p>
                    </div>
                    <div className="flex flex-col my-3 mx-4">
                        <div className="h-[167px] w-[267px] rounded-lg bg-[#272727]"></div>
                        <div className="flex flex-row justify-between w-full my-2">
                            <p className="font-Sora font-semibold text-base text-[#DADADA]">Video Title goes here</p>
                            {/* <p className="font-Sora font-bold text-base text-[#FF0743] mr-2">● LIVE</p> */}
                        </div>
                        <p className="font-Sora font-normal text-sm text-[#DADADA]">3 days ago</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Livestreams