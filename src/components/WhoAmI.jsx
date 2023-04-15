import testImage from '../images/profileImages/182.png'
// import testImage from '../images/profileImages/SpaceBots/135.png'

const whoAmI = () => {
    return(
        <div
            className="bg-[#151c25] flex flex-col md:flex-row py-10 justify-center p-5"
        >
        <div className="md:w-6/6 w-full flex flex-row justify-center items-center mt-5">
            <p className="p-2 text-white w-1/2">
                Doge pal is a community based and a long term project, it has a very cute story. They are doge pals living in a galaxy that people have not seen before, they are cute and crazy. 
                They are looking for a way to visit the planet Earth in order to spread joy.
            </p>          
        </div>

        <div className="md:w-6/6 w-full  flex flex-row justify-center items-center p-5">
            <img src={testImage} className="allNFTCapta rounded-full shadow-xl shadow-black" />
        </div>

      </div>
    )

}

export default whoAmI

