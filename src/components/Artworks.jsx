import { getGlobalState } from "../globalState"
import { useEffect } from 'react'



const Artworks = () => {
    const nfts = getGlobalState('nfts')
    useEffect(() => {


      }, [nfts])
    return (
        <div className="bg-[#151c25] gradient-bg-artworks">
            <div className="w-4/5 py-10 mx-auto">
                <h4 className="text-white text-3xl font-bold uppercase text-gradient">
                    Your NFT's 
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
                    {nfts.reverse().map((nft, i)=> 
                        <div key={i} className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
                            <img
                                src={nft.image}
                                className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
                            />
                            
                            <div className="flex justify-between items-center mt-3 text-white">
                                <h4 className="text-white font-semibold">{nft.name}</h4>
                                <a
                                    href={nft.OpenSeaURL}
                                    target="_blank"
                                    className="shadow-lg shadow-black text-white text-sm bg-[#e32970]
                                    hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
                                >
                                    To OpenSea
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}



export default Artworks