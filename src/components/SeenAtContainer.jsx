import bitcoinist from '../images/publications/bitcoinist.png'
import hackernoon from '../images/publications/hackernoon.png'
import cryptonews from '../images/publications/cryptonews.png'

const seenAtContainer = () => {
    return(
        <div>
            <br/>
            <br />
            <h4 className="text-white text-3xl font-bold uppercase text-gradient flex flex-row justify-center items-center">
                Seen At
            </h4>
            <div className='flex flex-wrap justify-around items-center mt-5'> 
                <img src={bitcoinist} className="publicationLogo mt-5" alt="bitcoinist-logo" />
                <img src={hackernoon} className="publicationLogo mt-5" alt="hackernoon-logo" />
                <img src={cryptonews} className="publicationLogo mt-5" alt="cryptonews-logo" />
            </div>
            <br/>
            <br />

            <div className='border mx-auto' style={{width:'1000px', height:'300px'}}>

            </div>
        </div>
    )

}

export default seenAtContainer