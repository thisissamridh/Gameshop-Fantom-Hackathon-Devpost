import Cart from '../components/Cart'
import { useGlobalState } from '../store'

const ShoppingCart = () => {
  const [cart] = useGlobalState('cart')
  const [summary] = useGlobalState('summary')

  return (
    <>
      <div className="h-10"></div>
      {cart.length > 0 ? (
        <Cart cart={cart} summary={summary} />
      ) : (
        <div className="flex flex-col justify-between items-center space-x-2 md:w-2/3 w-full p-5 mx-auto">
          <h4 className="text-center uppercase mb-8 font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-green-400 to-pink-600">Cart Empty</h4>
          <p className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-700 to-pink-400'>Add some products to your cart...</p>
        </div>
      )}
    </>
  )
}

export default ShoppingCart
