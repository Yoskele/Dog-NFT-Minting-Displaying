import { mintNFT } from "../SmartContractFunctions"
import imageOne from '../images/profileImages/18.png'
import imageTwo from '../images/profileImages/17.png'
import imageThree from '../images/profileImages/12.png'
import imageFour from '../images/profileImages/47.png'
import imageFive from '../images/profileImages/100.png'
import imageSix from '../images/profileImages/323.png'
// import imageOne from '../images/profileImages/SpaceBots/148.png'
// import imageTwo from '../images/profileImages/SpaceBots/167.png'
// import imageThree from '../images/profileImages/SpaceBots/100.png'
// import imageFour from '../images/profileImages/SpaceBots/109.png'
// import imageFive from '../images/profileImages/SpaceBots/83.png'
// import imageSix from '../images/profileImages/SpaceBots/135.png'
import { getNFTBalance } from "../SmartContractFunctions"

const NFTDisplay = () => {  
  if( window.innerWidth < 1100 ){
    var listOfImagesRowOne = [imageOne, imageTwo];
    var listOfImagesRowTwo = [imageFour, imageFive];
  } else {
    var listOfImagesRowOne = [imageOne, imageTwo, imageThree];
    var listOfImagesRowTwo = [imageFour, imageFive, imageSix];
  }
  
 
    return (
      <div
        className="flex flex-col md:flex-row py-10 justify-center"
      >
        <div className="md:w-3/6 w-full">
          <div>
            <h1 className="text-white text-5xl font-bold">
              Buy and Sell <br /> Digital Arts, <br />
              <span className="text-gradient">NFTs</span> Collections
            </h1>
            <p className="text-gray-500 font-semibold text-sm mt-3">
              Mint and collect the hottest NFTs around.
            </p>
          </div>
          {/* <div className="flex flex-row mt-5">
            <button
              className="shadow-xl shadow-black text-white
              bg-[#e32970] hover:bg-[#bd255f]
              rounded-full cursor-pointer p-2"
              onClick={mintNFT}
            >
              Mint Now
            </button>
          </div> */}
  
          <div className="w-3/4 flex justify-between items-center mt-5">
            <div>
              <p className="text-white font-bold">Total 1000 NFT's</p>
            </div>
            <div>
              <p className="text-white font-bold">Floor Price</p>
              <small className="text-gray-300">0.045 Eth</small>
            </div>
            <div>
              <p className="text-white font-bold">200k</p>
              <small className="text-gray-300">Artist</small>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 border-solid">
          <div className='flex mx-auto'> {
            listOfImagesRowOne.map(
              (image, index) => <img key={index} src={image} alt="info" id="nftDisplay" className='m-2 object-contain shadow-xl shadow-black'></img>
            )
            }
          </div>
        
          <div className='flex mx-auto'> {
            listOfImagesRowTwo.map(
              (image, index) => <img key={index} src={image} alt="info" id="nftDisplay" 
              className='m-2 object-contain shadow-xl shadow-black'></img>
            )
            }
          </div>
        </div>

      </div>
    )
  }
  
  export default NFTDisplay


  