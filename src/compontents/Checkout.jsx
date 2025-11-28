import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Checkout(){
  const { cart, total } = useCart()
  const [form, setForm] = useState({ name: '', address: '', phone: '' })
  const [placed, setPlaced] = useState(false)

  function handleChange(e){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function placeOrder(e){
    e.preventDefault()
    // In real app: validate + call backend API
    printSlip();
    setPlaced(true)
  }

  function printSlip(){
    const slipContent = `
      <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Receipt</title>
<style>
  body {
    font-family: monospace;
    background: #f5f5f5;
  }
  .receipt {
    background: white;
    width: 300px;
    margin: 30px auto;
    padding: 20px;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  .receipt h2 {
    text-align: center;
    margin: 0;
  }
  .receipt p {
    text-align: center;
    margin: 2px 0;
    font-size: 12px;
  }
  .line {
    text-align: center;
    margin: 5px 0;
  }
  .items {
    margin-top: 10px;
    font-size: 14px;
  }
  .items div {
    display: flex;
    justify-content: space-between;
    padding: 2px 0;
  }
  .total {
    margin-top: 10px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .barcode {
    text-align: center;
    margin-top: 10px;
  }
  .thankyou {
    text-align: center;
    margin-top: 5px;
    font-size: 14px;
  }
</style>
</head>
<body>
  <div class="receipt">
    <h2>Grocery Shop</h2>
    <p>Address: Bahawalpur, 23-10</p>
    <p>Telp. +92 11223344</p>
    <div class="line">******************************</div>
    <p><strong>CASH RECEIPT</strong></p>
    <div class="line">******************************</div>
    <div class="line">Customer: ${form.name}</div>
    <div class="line">Address: ${form.address}</div>
    <div class="line">Phone: ${form.phone}</div>
    <div class="line">******************************</div>

    <div class="items">
      ${cart.map(it => `<div><span>${it.name} x${it.qty}</span><span>Rs ${it.price * it.qty}</span></div>`).join('')}
    </div>

    <div class="line">******************************</div>

    <div class="total"><span>Total</span><span>Rs ${total}</span></div>

    <div class="line">******************************</div>

    <div class="thankyou">THANK YOU!</div>
  </div>
</body>
</html>

    `;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(slipContent);
    printWindow.document.close();
    printWindow.print();
  }

  if(cart.length === 0) return <div className="p-8">Your cart is empty</div>
  if(placed) return <div className="p-8">Order placed — thank you!</div>

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
      <form onSubmit={placeOrder} className="space-y-4">
        <h3 className="font-semibold">Shipping Information</h3>
        <input name="name" required value={form.name} onChange={handleChange} placeholder="Full name" className="w-full border rounded px-3 py-2" />
        <input name="address" required value={form.address} onChange={handleChange} placeholder="Address" className="w-full border rounded px-3 py-2" />
        <input name="phone" required value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full border rounded px-3 py-2" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Place Order</button>
      </form>

      <aside className="border rounded p-4">
        <h4 className="font-semibold">Order Summary</h4>
        <ul className="mt-2 space-y-2">
          {cart.map(it => (
            <li key={it.id} className="flex justify-between">
              <span>{it.name} x{it.qty}</span>
              <span>Rs {it.price * it.qty}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between font-bold">Total <span>Rs {total}</span></div>
      </aside>
    </div>
  )
};