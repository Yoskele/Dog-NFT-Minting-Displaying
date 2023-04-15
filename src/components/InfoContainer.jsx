

const InfoContainer = () => {

    const handleClick = event => {
        console.log('event ', event.currentTarget.children[1])
        let arrow  = event.currentTarget.children[1].children[0];
        if (event.currentTarget.children[2].classList.contains('infoText')) {
            arrow.classList.remove('arrow-up');
            arrow.classList.add('arrow-down');
            event.currentTarget.children[2].classList.remove('infoText');
            event.currentTarget.children[2].classList.add('infoTextnew');
        } else {
            event.currentTarget.children[2].classList.remove('infoTextnew');
            event.currentTarget.children[2].classList.add('infoText');
            arrow.classList.remove('arrow-down');
            arrow.classList.add('arrow-up');
        }
    };
    return(
        <div>
            <div className="infoWrapper">
                <div 
                    onClick={handleClick}
                    className="infoContainer">
                    <h4> What is an NFT? </h4>
                    <div 
                        className="arrowContainer"> 
                        <div className="arrow-up"></div>
                    </div>
                    <p className="infoText">
                        NFT stands for non-fungible token. NFTs are tokens that we can use
                        to represent ownership of unique items. 
                        They let us tokenise things like art, collectibles, 
                        even real estate. They can only have one official owner at a time 
                        and they're secured by the Ethereum blockchain – no one can modify 
                        the record of ownership or copy/ paste a new NFT into existence.
                    </p>
                </div>
                <div 
                    onClick={handleClick}
                    className="infoContainer">
                    <h4> How to Store Your NFT </h4>
                    <div className="arrowContainer"> 
                        <div className="arrow-up"></div>
                    </div>
                    <p className="infoText">
                        Your crypto wallet is where you can view your cryptocurrency assets and transactions, 
                        all in one place. It’s also where you confirm any transactions in process. Different wallets 
                        have different features. For example, some allow you to view NFTs from a smartphone. 
                        Popular wallets include Ledger and Metamask.
                    </p>
                </div>
                <div 
                    onClick={handleClick}
                    className="infoContainer">
                    <h4> How to Upload the NFT as your Profile on Instagram </h4>
                    <div className="arrowContainer"> 
                        <div className="arrow-up"></div>
                    </div>
                    <p className="infoText">
                        NFT stands for non-fungible token. NFTs are tokens that we can use
                        to represent ownership of unique items. 
                        They let us tokenise things like art, collectibles, 
                        even real estate. They can only have one official owner at a time 
                        and they're secured by the Ethereum blockchain – no one can modify 
                        the record of ownership or copy/ paste a new NFT into existence.
                    </p>
                </div>
                <div 
                    onClick={handleClick}
                    className="infoContainer">
                    <h4> What’s the secondary market? </h4>
                    <div className="arrowContainer"> 
                        <div className="arrow-up"></div>
                    </div>
                    <p className="infoText">
                        “Secondary market” refers to all NFT sales that occur after the initial NFT purchase. 
                        The most popular secondary marketplace to buy NFTs include OpenSea.io
                    </p>
                </div>
                <div 
                    onClick={handleClick}
                    className="infoContainer">
                    <h4> What’s this minting you speak of? </h4>
                    <div className="arrowContainer"> 
                        <div className="arrow-up"></div>
                    </div>
                    <p className="infoText">
                        NFTs are created through a process called minting. On the Ethereum network, a command is run 
                        that creates the NFT as an immutable record, providing it with a unique hash that contains all 
                        of the metadata. The metadata stores key contextual information about your NFT,
                        like its current ownership and transaction history. Sites including opensea.io 
                        and etherscan.io allow you to view your NFT collection and NFTs in other 
                        collections.
                    </p>
                </div>
                <div 
                    onClick={handleClick}
                    className="infoContainer">
                    <h4> What is Creator Fee? </h4>
                    <div className="arrowContainer"> 
                        <div className="arrow-up"></div>
                    </div>
                    <ul className="infoText">
                       <li> 1. bla bla bla </li>
                       <li> 2. bla bla bla </li>
                       <li> 3. bla bla bla </li>
                       <li> 4. bla bla bla </li> 
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default InfoContainer;
