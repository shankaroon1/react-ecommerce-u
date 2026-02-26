function Cart({ cart, close }) {
  if (!cart || cart.length === 0)
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold">Cart (0)</h2>
          <button onClick={close} className="text-gray-500 hover:text-gray-900">
            ✕
          </button>
        </div>
        <p className="text-gray-500 dark:text-gray-300 text-sm">Your cart is empty</p>
      </div>
    );

  const total = cart
    .reduce((sum, item) => sum + item.price - (item.price * item.discount) / 100, 0)
    .toFixed(2);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold">Cart ({cart.length})</h2>
        <button onClick={close} className="text-gray-500 hover:text-gray-900">
          ✕
        </button>
      </div>

      {cart.map((item, index) => (
        <div key={index} className="flex items-center gap-3 border-b py-2 last:border-none">
          <img
            src={item.image}
            alt={item.name}
            className="w-14 h-14 object-cover rounded-lg"
          />
          <div className="flex-1">
            <p className="text-sm font-medium">{item.name}</p>
            <p className="text-red-500 font-semibold">
              ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
            </p>
          </div>
        </div>
      ))}

      <div className="mt-3 font-bold text-right text-lg">Total: ${total}</div>
    </div>
  );
}

export default Cart;