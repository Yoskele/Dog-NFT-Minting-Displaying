import Header from './components/Header.jsx'
import NFTDisplay from './components/NFTDisplay.jsx'
import MintNFT from './components/MintNFT.jsx'
import Artworks from './components/Artworks.jsx'
import { getUserNFT,connectWallet, getNFTBalance  } from './SmartContractFunctions'
import  {getGlobalState, useGlobalState} from './globalState'
import { useEffect,useState } from 'react'
import Loading from './components/Loading.jsx'
import  Warning  from  './components/Warning.jsx'
import  SeenAtContainer  from  './components/SeenAtContainer'
import WhoAmI from './components/WhoAmI.jsx'
import InfoContainer from './components/InfoContainer.jsx'
import Footer from './components/Footer'

const App = () => {
  const [userNfts] = useGlobalState('nfts')
  const mintCapReached = getGlobalState('mintCap')

  let displayMintNFT = true;
  useEffect(async () => {
    if(await connectWallet().then(() => console.log('Wallet Logged in'))){
 
    }
    let balance = await getNFTBalance();
    console.log('mintCapReached balance ', balance)
    console.log('mintCapReached ', mintCapReached)
    
  }, [mintCapReached])

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <NFTDisplay />
      </div>
      <MintNFT />
      {/* <button onClick={getNFTBalance}>Click </button> */}
      { userNfts.length ? <Artworks nftList={userNfts} /> : null }
      <div className="seenAtContainer" id="seenAt">
        <SeenAtContainer />
        <WhoAmI />
        <InfoContainer />
      </div>
      <Footer />
      <Loading />
      <Warning />
    </div>
  )
}

export default App
