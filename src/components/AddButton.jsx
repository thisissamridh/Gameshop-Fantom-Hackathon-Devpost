import { BsPlusLg } from 'react-icons/bs'
import { setGlobalState } from '../store'

const AddButton = () => {
  return (
    <div className="fixed right-10 bottom-10 flex space-x-2 justify-center">
      <div>
        <button
          type="button"
          className="bg-gradient-to-r from-violet-500 to-fuchsia-500 
          flex justify-center items-center rounded-full bg-blue-600
          text-white leading-normal uppercase shadow-md hover:bg-gradient-to-r from-violet-500 to-fuchsia-500
          hover:shadow-lg focus:bg-gradient-to-r from-violet-500 to-fuchsia-500 focus:shadow-lg focus:outline-none
          focus:ring-0 active:bg-blue-800 active:shadow-lg transition
          duration-150 ease-in-out w-9 h-9"
          onClick={() => setGlobalState('modal', 'scale-100')}
        >
          <BsPlusLg className="font-bold" size={20} />
        </button>
      </div>
    </div>
  )
}

export default AddButton
