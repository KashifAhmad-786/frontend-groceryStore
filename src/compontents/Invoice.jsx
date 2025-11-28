import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Invoice = ({ orderDetails }) => {
  const { form, cart, total } = orderDetails;
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <div ref={componentRef} className="p-8">
        <header className="flex justify-between items-center pb-6 border-b">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Invoice</h1>
            <p className="text-gray-500">Order #{Math.floor(Math.random() * 10000)}</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold text-gray-800">GreenGrocery</h2>
            <p className="text-gray-500">123 Grocery Lane, Foodie City</p>
          </div>
        </header>

        <section className="grid md:grid-cols-2 gap-8 py-6">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Bill To:</h3>
            <p>{form.name}</p>
            <p>{form.address}</p>
            <p>{form.phone}</p>
          </div>
          <div className="text-right">
            <p><span className="font-semibold">Date:</span> {new Date().toLocaleDateString()}</p>
          </div>
        </section>

        <section>
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left font-semibold">Item</th>
                <th className="p-3 text-center font-semibold">Quantity</th>
                <th className="p-3 text-right font-semibold">Price</th>
                <th className="p-3 text-right font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3 text-center">{item.qty}</td>
                  <td className="p-3 text-right">Rs {item.price.toFixed(2)}</td>
                  <td className="p-3 text-right">Rs {(item.price * item.qty).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="flex justify-end pt-6">
          <div className="w-full md:w-1/3">
            <div className="flex justify-between">
              <span className="font-semibold">Subtotal</span>
              <span>Rs {total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-xl mt-4 pt-4 border-t">
              <span>Total</span>
              <span>Rs {total.toFixed(2)}</span>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-500 pt-8 mt-8 border-t">
          <p>Thank you for your purchase!</p>
        </footer>
      </div>

      <div className="text-center mt-6">
        <button onClick={handlePrint} className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
          Print Invoice
        </button>
      </div>
    </div>
  );
};

export default Invoice;
