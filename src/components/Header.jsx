import { connectWallet } from '../SmartContractFunctions';
import { useGlobalState, truncate  } from '../globalState';
import OpenSeaLogo from '../images/openseaLogo.png';

const Header = () => {

  const [connectedAccount] = useGlobalState('connectedAccount')

    return (
      <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
        <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
          <span className="text-white text-2xl ml-2">Yoska NFT </span>
        </div>
        <ul
          className="md:flex-[0.5] text-white 
          md:flex hidden list-none flex-row 
          justify-between items-center flex-initial"
        >
          <li className="mx-4 cursor-pointer"><a href="/#seenAt"> Contact Us </a></li>
          <li className="mx-4 cursor-pointer"><a href="/#seenAt"> Seen at </a></li>
          <li className="mx-4 cursor-pointer">Features</li>
          <li className="mx-4 cursor-pointer"> 
            <a  href="" target="_blank" className='mr-5 flex'>
              <img src={OpenSeaLogo} alt="OpenSea-Logo" className='OpenSea-Logo mr-2' />
              <div className='self-center mr-2 text-white'> Explore at OpenSea </div>
            </a>
          </li>
        </ul>
        
        {connectedAccount ? (
          <button
            className="ml-5 shadow-xl shadow-black text-white 
            bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
            rounded-full cursor-pointer"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
          ) : (
          <button
            className="ml-5 shadow-xl shadow-black text-white 
            bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
            rounded-full cursor-pointer"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </nav>
    )
  }
  
  export default Header