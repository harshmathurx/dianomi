import { Web3Button, useWeb3Modal } from "@web3modal/react"
import Link from "next/link"
import { useState } from "react";

const Register = () => {

    const [formStep, setFormStep] = useState(1);

    const nextFormStep = () => {
        if (formStep >= 3) {
            return;
        }
        setFormStep((currentStep) => currentStep + 1);
    }

    const prevFormStep = () => {
        if (formStep <= 1) {
            return;
        }
        setFormStep((currentStep) => currentStep - 1);
    }

    return (
        <div className="h-fit bg-[url('/background.svg')] bg-no-repeat bg-cover">
            <div className="flex flex-row items-center gap-12 px-4 py-11 text-[#FAFAFA] justify-start mx-auto w-10/12">
                <Link href='/' className="font-MagicRetro text-5xl">
                    <h1>DIANOMI</h1>
                </Link>
                <span className="font-Sora font-bold text-lg"><Link href='/explore'>EXPLORE</Link></span>
                <Web3Button />
            </div>
            <main className="w-4/12 h-5/6 flex-col flex text-white mx-auto px-5 justify-center items-center my-16 ">
                <div className="h-3/6 flex flex-col rounded-lg bg-[#07050F] px-12 py-16 justify-center">
                    <h3 className="text-2xl font-Sora font-bold text-[#00FFC2] my-4">App Information</h3>
                    <p className="text-base font-Sora font-normal text-[#FAFAFA] my-3">Fill in the details below to publish your app on Dianomi!</p>
                    <div className="">
                        {formStep == 1 && (<div className="flex flex-col">
                            <input type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-7 border-[#A6A6A6]" placeholder="App Name" />
                            <input type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-4 py-7 border-[#A6A6A6]" placeholder="Developer Name" />
                            <textarea rows="4" cols="50" type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg p-5 border-[#A6A6A6]" placeholder="App Description" />
                            <textarea rows="4" cols="50" type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg p-5 border-[#A6A6A6]" placeholder="App Overview" />
                        </div>)}
                        {formStep == 2 && (<div className="flex flex-col">
                            <p className="font-Sora text-base font-bold my-4">Upload App Icon Image</p>
                            <input type="file" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-7 border-[#A6A6A6]" />
                            <p className="font-Sora text-base font-bold my-4">Upload Background Image</p>
                            <input type="file" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-7 border-[#A6A6A6]" />
                            <p className="font-Sora text-base font-bold my-4">Upload App File</p>
                            <input type="file" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-7 border-[#A6A6A6]" />
                            <p className="font-Sora text-base font-bold my-4">Upload App File</p>
                            <p className="font-Sora text-sm font-normal my-4 text-[#B9B9C3]">Twitter</p>
                            <input type="text" className="my-1 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-3 border-[#A6A6A6]" placeholder="Enter Link" />
                            <p className="font-Sora text-sm font-normal my-4 text-[#B9B9C3]">Discord</p>
                            <input type="text" className="my-1 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-3 border-[#A6A6A6]" placeholder="Enter Link" />
                            <p className="font-Sora text-sm font-normal my-4 text-[#B9B9C3]">Website</p>
                            <input type="text" className="my-1 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-3 border-[#A6A6A6]" placeholder="Enter Link" />
                            <p className="font-Sora text-sm font-normal my-4 text-[#B9B9C3]">Telegram</p>
                            <input type="text" className="my-1 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-3 border-[#A6A6A6]" placeholder="Enter Link" />
                        </div>)}
                        {formStep == 3 && (<div className="flex flex-col">
                            <input type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-7 border-[#A6A6A6]" placeholder="App Genre" />
                            <input type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-4 py-7 border-[#A6A6A6]" placeholder="Chain" />
                            <input type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg p-5 border-[#A6A6A6]" placeholder="App Status" />
                            <input type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg p-5 border-[#A6A6A6]" placeholder="Available on" />
                        </div>)}
                        <div className="flex flex-row justify-between w-full self-center mb-2 mt-6">
                            {formStep > 1 && <button className="bg-[#FFFFFF] rounded-lg text-[#242731] border border-solid border-[#BBBFC1] p-5 font-Sora font-semibold" onClick={prevFormStep}>Previous</button>}
                            {formStep < 3 && <button className="bg-[#FFFFFF] rounded-lg text-[#242731] border border-solid border-[#BBBFC1] py-5 px-8 font-Sora font-semibold" onClick={nextFormStep}>Next</button>}
                            {formStep == 3 && <button className="bg-[#FFFFFF] rounded-lg text-[#242731] border border-solid border-[#BBBFC1] py-5 px-8 font-Sora font-semibold" onClick={nextFormStep}>Submit</button>}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Register