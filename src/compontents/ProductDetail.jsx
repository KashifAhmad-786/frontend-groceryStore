import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../data/Products'
import { useCart } from '../context/CartContext'

export default function ProductDetail(){
  const { id } = useParams()
  const product = productsData.find(p => p.id === id)
  const [qty, setQty] = useState(1)
  const { addToCart } = useCart()

  if(!product) return <div className="p-8">Product not found</div>

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
      <div>
        <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-green-600 font-semibold mt-2">Rs {product.price}</p>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <p className="mt-2 text-sm text-gray-500">{product.nutrition}</p>

        <div className="mt-6 flex items-center gap-3">
          <input type="number" min="1" value={qty} onChange={e=> setQty(Number(e.target.value))} className="w-20 border rounded px-2 py-1" />
          <button onClick={()=> addToCart(product, qty)} className="bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}