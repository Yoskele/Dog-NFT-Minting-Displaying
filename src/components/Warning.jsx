import { useGlobalState, setGlobalState } from '../globalState'

const Warning = () => {
  const [warning] = useGlobalState('warning')

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen
      flex items-center justify-center bg-black 
      bg-opacity-50 transform transition-transform
      duration-300 ${warning.show ? 'scale-100' : 'scale-0'}`}
    >
      <div
        className="flex flex-col justify-center
        items-center bg-[#151c25] shadow-xl 
        shadow-[#e32970] rounded-xl 
        min-w-min px-10 pb-2"
      >
        <div className="flex flex-row justify-center items-center">
            <div className="cursor-pointer" onClick={()=> setGlobalState('warning', { show: false, msg:''})}> ❌</div>
          <div className="lds-dual-ring scale-50"></div>
          <p className="text-lg text-white">Warning...</p>
        </div>
        <small className="text-white">{warning.msg}</small>
      </div>
    </div>
  )
}

export default Warning