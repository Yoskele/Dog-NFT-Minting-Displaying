import { getGlobalState, setGlobalState } from './globalState'
import abi from './abi/NFTContract.json'
import { ethers, BigNumber } from 'ethers'
// This file will be connect to Smart contract 
const contractAddress = '0xd1fb5e5f1f100d1820ae8c96d6643f7aaff8a9c3';
const opensea_uri = `https://testnets.opensea.io/assets/goerli/${contractAddress}/`




// Check to mint
let loggedIn = false;

const connectWallet = async () => {
    try {
      // if No wallet alet install.
      if (!ethereum){
          return alert('Please install Metamask')
      } else {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
          setGlobalState('connectedAccount', accounts[0])
          loggedIn = true;
          try{
            getUserNFT();
          }catch(error){
            console.log('error ', error)
          }
      }
    } catch (error) {
        console.log('error ', error)
    }
}


const getNFTBalance = async () =>{
  const providerx = new ethers.providers.Web3Provider(ethereum)
  const signerx = providerx.getSigner()
  const yk = new ethers.Contract(contractAddress, abi, signerx)
  const x = await yk.totalSupply()
  let currentNFTValue = Number(x.toString())
  setGlobalState('mintValue', currentNFTValue)
  console.log('Minted NFT so far (mintValue)..');
  return currentNFTValue;
}

const getNFTContract = () => {
  const connectedAccount = getGlobalState('connectedAccount')
  if (connectedAccount) {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, abi, signer)
    return contract
  } else {
    console.log('connecting wallet...')
    // return getGlobalState('contract')
  }
}

// let mintAmount = 1;
const mintNFT = async () => {
  const mintValue = getGlobalState('mintValue')
  console.log('Minting NFT now... (mintValue) ', mintValue)
  
  try {
    if (!ethereum){
      return alert('Please install Metamask')
    } else if (!loggedIn){
      // if Wallet not logged in.
      console.log('else if...')
      setGlobalState('loading', { show: true, msg:'Please Connect Wallet'})
      await connectWallet();
      mintNFT();
    }else{
      const contract = getNFTContract()
      try{
        setGlobalState('loading', { show: true, msg:'Please Accepted Transaction on Metamask...'})
        await contract.mint(BigNumber.from(mintValue),{
          value: ethers.utils.parseEther((0.01 * mintValue).toString()),
        }).then((tx) => {
          console.log('tx ', tx)
          setGlobalState('loading', { show: true, msg:'Minting...'})
          tx.wait().then(function(receipt) {
            // do whatever you wanna do with `receipt`
            console.log('receipt ', receipt)
            // Update Global state
            getUserNFT();
            setGlobalState('loading', { show: false, msg:'Done'})
            setGlobalState('flipCard', false)
          });
        })
      }catch(error){
        console.log('ee', error)
        setGlobalState('loading', { show: false, msg:''})
        setGlobalState('warning', { show: true, msg:'Not Enough Balance'})
      }
    }
  } catch (error) {
    reportError(error)
    setGlobalState('loading', { show: false, msg:''})
  }
}

// Get User NFT's
const getUserNFT = async () => {
  const userNFT = getGlobalState('userNFT')
  const connectedAccount = getGlobalState('connectedAccount')
  console.log('connectedAccount  User NFTs account... ', connectedAccount);
  try{
    const nft = getNFTContract();
    // Check how many NFT's wallet have and bring their IDs....
    // Example owner have NFT ID 3 & 4.
    const owner = await nft.walletOfOwner(connectedAccount);
    // Create list to push the NFT objects.
    let testList = [];
    for (let i = 0; i < owner.length; i++) {
      // Get specific NFT ID from User Wallet owner[i].toString()..
      try{
        // Get the NFT's MetaData
        const NFTMetaDataURL = await nft.tokenURI(owner[i].toString());
        // Get Proper URL to the Metadata.
        const NFTMetaDataURLJson = `https://gateway.pinata.cloud/ipfs/` + NFTMetaDataURL.split("ipfs://")[1];
        const response = await fetch(NFTMetaDataURLJson);
        const json = await response.json();
        // Create an NFT object
        userNFT.image = `https://gateway.pinata.cloud/ipfs/` + json.image.split("ipfs://")[1];
        userNFT.name = await nft.name();
        userNFT.OpenSeaURL = opensea_uri + owner[i].toString();
        // Push Object to Array
        testList.push({...userNFT})
      }catch(error){
        console.log('loop Error', error)
      }
    }
    // Set Global array
    setGlobalState('nfts', testList)
    const list = getGlobalState('nfts')
  }catch (error) {
    console.log('error ', error)
  }

}

export{
    connectWallet,
    mintNFT,
    getUserNFT,
    getNFTBalance,
}