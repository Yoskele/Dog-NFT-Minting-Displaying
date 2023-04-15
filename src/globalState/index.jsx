import { createGlobalState } from 'react-hooks-global-state';


const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    connectedAccount: '',
    userNFT : {name:'', image:'', OpenSeaURL:''},
    nfts:[],
    mintCap: true,
    mintValue : 0,
    flipCard : true,
    loading: { show: false, msg: '' },
    warning: { show: false, msg: '' },
});


// Make the Wallet ID nicer.
const truncate = (text, startChars, endChars, maxLength) => {
    if (text.length > maxLength) {
        var start = text.substring(0, startChars)
        var end = text.substring(text.length - endChars, text.length)
        while (start.length + end.length < maxLength) {
        start = start + '.'
        }
        return start + end
    }
    return text
}


export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
    truncate,
  }