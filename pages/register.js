import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { uploadFileLighthouse } from "@/lib/lighthouseUpload";

const Register = () => {

    const [formStep, setFormStep] = useState(1);
    const { address, isConnected } = useAccount();
    const router = useRouter();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        developerName: '',
        description: '',
        overview: '',
        icon: '',
        banner: '',
        file: '',
        twitter: '',
        discord: '',
        website: '',
        telegram: '',
        playStoreLink: '',
        appStoreLink: '',
        genre: '',
        chain: 'Polygon Mumbai',
        status: '',
        availableOn: '',
        isTokenGated: Boolean,
        tokenAddress: '',
        developerAddress: address
    })

    const handleChange = name => event => {
        setFormData({ ...formData, [name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        toast.dismiss()
        toast.info("Setting up your game")
        await axios.post('/api/games', formData)
            .then(data => {
                if (data) {
                    if (data.error) {
                        setError(data.error)
                        toast.dismiss()
                        toast.error(data.error)
                    }
                    else {
                        console.log(data);
                        toast.success("Your game is ready")
                        router.push('/');
                    }
                }
                else {
                    setError("Something went wrong")
                    toast.dismiss()
                    toast.error("Something went wrong")
                }
            })
    }


    const nextFormStep = () => {
        if (formStep >= 3) {
            return;
        }
        else {
            setFormStep((currentStep) => currentStep + 1);
        }
    }

    const prevFormStep = () => {
        if (formStep <= 1) {
            return;
        }
        else {
            setFormStep((currentStep) => currentStep - 1);
        }
    }

    const progressCallback = (progressData) => {
        let percentageDone =
            100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
        console.log(percentageDone);
    };

    const uploadFile = async (e) => {
        e.persist()
        // Push file to lighthouse node
        // Both file and folder are supported by upload function
        const output = await uploadFileLighthouse(e, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNLZXkiOiIweGFkNGE2NjBkODRjMzZhYjY0ZWNlM2JiN2M0ZTNmNzY4ZTY2NDU4OWMiLCJpYXQiOjE2ODMxOTE3MzAsImV4cCI6MTY4MzIzNDkzMH0.RkZDgRmQO1oNPIMumvkiilBzoICQj6t2BAeOwF8dMZc");
        console.log('File Status:', output);
        /*
          output:
            data: {
              Name: "filename.txt",
              Size: 88000,
              Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
            }
          Note: Hash in response is CID.
        */
        setFormData({ ...formData, file: `https://gateway.lighthouse.storage/ipfs/${output.data.Hash}` })
        console.log('https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
    }

    const uploadIcon = async (e) => {
        e.persist()
        // Push file to lighthouse node
        // Both file and folder are supported by upload function
        const output = await uploadFileLighthouse(e, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNLZXkiOiIweGFkNGE2NjBkODRjMzZhYjY0ZWNlM2JiN2M0ZTNmNzY4ZTY2NDU4OWMiLCJpYXQiOjE2ODMxOTE3MzAsImV4cCI6MTY4MzIzNDkzMH0.RkZDgRmQO1oNPIMumvkiilBzoICQj6t2BAeOwF8dMZc");
        console.log('File Status:', output);
        /*
          output:
            data: {
              Name: "filename.txt",
              Size: 88000,
              Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
            }
          Note: Hash in response is CID.
        */
        setFormData({ ...formData, icon: `https://gateway.lighthouse.storage/ipfs/${output.data.Hash}` })
        console.log('https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
    }

    const uploadBanner = async (e) => {
        e.persist()
        // Push file to lighthouse node
        // Both file and folder are supported by upload function
        const output = await uploadFileLighthouse(e, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNLZXkiOiIweGFkNGE2NjBkODRjMzZhYjY0ZWNlM2JiN2M0ZTNmNzY4ZTY2NDU4OWMiLCJpYXQiOjE2ODMxOTE3MzAsImV4cCI6MTY4MzIzNDkzMH0.RkZDgRmQO1oNPIMumvkiilBzoICQj6t2BAeOwF8dMZc");
        console.log('File Status:', output);
        /*
          output:
            data: {
              Name: "filename.txt",
              Size: 88000,
              Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
            }
          Note: Hash in response is CID.
        */
        setFormData({ ...formData, banner: `https://gateway.lighthouse.storage/ipfs/${output.data.Hash}` })
        console.log('https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
        <div className="">
            <main className="w-4/12 h-5/6 flex-col flex text-white mx-auto px-5 justify-center items-center my-16 ">
                <div className="h-3/6 flex flex-col rounded-lg bg-[#07050F] px-12 py-16 justify-center">
                    <h3 className="text-2xl font-Sora font-bold text-[#00FFC2] my-4">App Information</h3>
                    <p className="text-base font-Sora font-normal text-[#FAFAFA] my-3">Fill in the details below to publish your app on Dianomi!</p>
                    <div className="">
                        {formStep == 1 && (<div className="flex flex-col">
                            <input value={formData.name} type="text" onChange={handleChange('name')} required className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-7 border-[#A6A6A6]" placeholder="App Name" />
                            <input value={formData.developerName} type="text" onChange={handleChange('developerName')} required className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-4 py-7 border-[#A6A6A6]" placeholder="Developer Name" />
                            <textarea value={formData.description} onChange={handleChange('description')} required rows="4" cols="50" type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg p-5 border-[#A6A6A6]" placeholder="App Description" />
                            <textarea value={formData.overview} onChange={handleChange('overview')} rows="4" cols="50" type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg p-5 border-[#A6A6A6]" placeholder="App Overview" />
                        </div>)}
                        {formStep == 2 && (<div className="flex flex-col">
                            <p className="font-Sora text-base font-bold my-4">Upload App Icon Image</p>
                            <input type="file" onChange={e => uploadIcon(e)} className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-7 border-[#A6A6A6]" />
                            <p className="font-Sora text-base font-bold my-4">Upload Background Image</p>
                            <input type="file" onChange={e => uploadBanner(e)} className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-7 border-[#A6A6A6]" />
                            <p className="font-Sora text-base font-bold my-4">Upload App File</p>
                            <input type="file" onChange={e => uploadFile(e)} className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-7 border-[#A6A6A6]" />
                            <p className="font-Sora text-base font-bold my-4">Upload App File</p>
                            <p className="font-Sora text-sm font-normal my-4 text-[#B9B9C3]">Twitter</p>
                            <input value={formData.twitter} onChange={handleChange('twitter')} type="text" className="my-1 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-3 border-[#A6A6A6]" placeholder="Enter Link" />
                            <p className="font-Sora text-sm font-normal my-4 text-[#B9B9C3]">Discord</p>
                            <input value={formData.discord} onChange={handleChange('discord')} type="text" className="my-1 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-3 border-[#A6A6A6]" placeholder="Enter Link" />
                            <p className="font-Sora text-sm font-normal my-4 text-[#B9B9C3]">Website</p>
                            <input value={formData.website} onChange={handleChange('website')} type="text" className="my-1 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-3 border-[#A6A6A6]" placeholder="Enter Link" />
                            <p className="font-Sora text-sm font-normal my-4 text-[#B9B9C3]">Telegram</p>
                            <input value={formData.telegram} onChange={handleChange('telegram')} type="text" className="my-1 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-3 border-[#A6A6A6]" placeholder="Enter Link" />
                        </div>)}
                        {formStep == 3 && (<div className="flex flex-col">
                            <input value={formData.genre} onChange={handleChange('genre')} type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-5 py-7 border-[#A6A6A6]" placeholder="App Genre" />
                            <input value={"Polygon Mumbai"} onChange={handleChange('chain')} type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg px-4 py-7 border-[#A6A6A6]" placeholder="Chain" disabled />
                            <input value={formData.status} onChange={handleChange('status')} type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg p-5 border-[#A6A6A6]" placeholder="App Status" />
                            <input value={formData.playStoreLink} onChange={handleChange('playStoreLink')} type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg p-5 border-[#A6A6A6]" placeholder="Play Store Link" />
                            <input value={formData.appStoreLink} onChange={handleChange('appStoreLink')} type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg p-5 border-[#A6A6A6]" placeholder="App Store Link" />
                            <div className="">
                                <input value={formData.isTokenGated} defaultChecked={false} onChange={() => setFormData({ ...formData, isTokenGated: !formData.isTokenGated })} type="checkbox" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg p-5 border-[#A6A6A6]" />
                                <label className="mx-2">Token Gated?</label>
                            </div>
                            <input value={formData.tokenAddress} disabled={formData.isTokenGated} onChange={handleChange('tokenAddress')} type="text" className="my-4 text-[#A6A6A6] font-Sora bg-[#07050F] border border-solid rounded-lg p-5 border-[#A6A6A6]" placeholder="Token Address" />
                        </div>)}
                        <div className="flex flex-row justify-between w-full self-center mb-2 mt-6">
                            {formStep > 1 && <button className="bg-[#FFFFFF] rounded-lg text-[#242731] border border-solid border-[#BBBFC1] p-5 font-Sora font-semibold" onClick={prevFormStep}>Previous</button>}
                            {formStep < 3 && <button className="bg-[#FFFFFF] rounded-lg text-[#242731] border border-solid border-[#BBBFC1] py-5 px-8 font-Sora font-semibold" onClick={nextFormStep}>Next</button>}
                            {formStep == 3 && <button className="bg-[#FFFFFF] rounded-lg text-[#242731] border border-solid border-[#BBBFC1] py-5 px-8 font-Sora font-semibold" onClick={handleSubmit}>Submit</button>}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Register