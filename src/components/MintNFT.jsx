import { useState } from "react";
import { mintNFT, getNFTBalance } from "../SmartContractFunctions"
import QuestionMarkLogo from '../images/question-mark.png'
import redCard from '../images/redCard.png'
import greenCard from '../images/greenCard.png'
import { getGlobalState, setGlobalState } from '../globalState/index'
import { useEffect } from 'react'

const MintNFT = () => {
    
    const [mintAmount, setMintAmount] = useState(2);

    const displayNFTList = getGlobalState('nfts');

    const flipCard = getGlobalState('flipCard');

    const handleDecrement = () => {
        if( mintAmount <= 1 ) return;
        setMintAmount(mintAmount - 1 )
        setGlobalState('flipCard', true)
    }

    const handleIncrement = () => {
        if( mintAmount >= 5 ) return;
        setMintAmount(mintAmount + 1 )
        setGlobalState('flipCard', true)
    }

    const handleSubmit = async () => {
        console.log('HandleSubmit ', mintAmount)
        try{
            setGlobalState('mintValue', mintAmount)
            await mintNFT();
            
        }catch(error){
            console.log('error', error);
        }
    }
   return(
    <div className="bg-[#151c25] min-h-full text-center p-5"
            > 
            <h2 className="text-gradient text-3xl font-bold pt-5">Mint Your NFT </h2>
            <br/>
            { flipCard ? 
                <div className="mintCard-container mx-auto">
                    {[...Array(mintAmount)].map((x, i) =>
                        <div className="mintCard rounded" key={i}>
                            <img src={redCard} alt="questionMark"  />
                        </div>
                    )}
                </div> 
                : 
                <div className="mintCard-container mx-auto">

                    {[...Array(mintAmount)].map((x, i) =>
                        <div className="mintCard rounded" key={i}>
                            <img src={greenCard} alt="questionMark"  />
                        </div>
                    )}
                </div> 
            }
            
            <div className=""> 
                <button
                    onClick={handleDecrement}
                    className="mintButton text-white"
                > - 
                </button>
                <input className="mintInput" type="text" readOnly name="name" value={mintAmount} />
                <button
                    onClick={handleIncrement}
                    className="mintButton text-white "
                > +
                </button>
            </div>
            <button
                onClick={handleSubmit}
                className="mb-5 mintButton text-white shadow-md shadow-black text-white 
                 hover:bg-[#bd255f]"
            > 
                Mint Now
            </button>

        </div>
   )
    
}
export default MintNFT

