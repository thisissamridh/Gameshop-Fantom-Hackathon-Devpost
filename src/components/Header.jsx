import Identicon from 'react-identicons'
import { SiFantom  } from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { setGlobalState, truncate, useGlobalState } from '../store'
import { connectWallet } from '../Blockchain.Service'
import logoblack from '../assets/logoblack.svg'
const Header = () => {
  const navigate = useNavigate()
  const [cart] = useGlobalState('cart')
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <div className="flex justify-between items-center shadow-sm shadow-gray-200 p-5">
      <Link
        to="/"
        className="flex justify-start items-center space-x-1 text-md font-bold"
      >
        

         <img src={logoblack} alt="logo" className="cursor-pointer" size={25} />



        <span className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>GameStop</span>
      </Link>

      <div className="flex justify-end items-center space-x-6">
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => navigate('/cart')}
            className="rounded-full font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 bg-gray-200 font-semibold text-sm flex 
            align-center cursor-pointer active:bg-gray-300 transition duration-300 
            ease w-max py-1 px-2"
          >
            <AiOutlineShoppingCart className="cursor-pointer" size={25} />
            <span
              className="rounded-full py-[2px] px-[10px] text-center font-bold
            bg-red-600 text-white ml-2"
            >
              {cart.length}
            </span>
          </button>

          <button
            onClick={() => setGlobalState('menu', 'scale-100')}
            className="bg-transparent shadow-sm shadow-gray-400 rounded-full"
          >
            <Identicon
              string={connectedAccount}
              size={25}
              className="h-10 w-10 object-contain rounded-full cursor-pointer "
            />
          </button>
        </div>
        {connectedAccount ? (
          <button
            className=" bg-gradient-to-r from-violet-500 to-fuchsia-500
            px-6 py-2.5  text-white font-medium text-s 
            leading-tight uppercase rounded shadow-md  transition duration-150 ease-in-out"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            className=" bg-gradient-to-r from-violet-500 to-fuchsia-500
            px-6 py-2.5  text-white font-medium text-s 
            leading-tight uppercase rounded shadow-md  transition duration-150 ease-in-out"
            onClick={connectWallet}
          >
            Connect
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
