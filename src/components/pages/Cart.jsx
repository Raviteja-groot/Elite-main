import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Full Stack Web Development', price: 25000, quantity: 1, emoji: '💻', duration: '12 weeks' },
    { id: 2, name: 'Advanced Data Analytics', price: 20000, quantity: 1, emoji: '📊', duration: '10 weeks' },
  ])

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const discount = subtotal * 0.30
  const gst = (subtotal - discount) * 0.18
  const total = subtotal - discount + gst

  return (
    <div className="cart bg-grid">
      <section className="section-padding text-center">
        <div className="container animate-fade-up">
          <span className="badge-premium mb-6">Checkout</span>
          <h1 className="hero-main-title">Enrollment <span className="text-gradient">Cart.</span></h1>
          <p className="hero-desc mx-auto">
            Review your selected programs and complete your enrollment to join the elite.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="card-premium text-center py-24 max-w-2xl mx-auto">
              <div className="text-6xl mb-8">📚</div>
              <h2 className="text-3xl font-bold mb-6">Your cart is empty</h2>
              <p className="text-muted mb-10">Start your journey by exploring our industry-leading courses.</p>
              <Link to="/products" className="btn-premium primary">Browse Courses</Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="card-premium p-8 flex items-center gap-8 relative group">
                    <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500">
                      {item.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.name}</h3>
                          <p className="text-xs font-bold text-muted uppercase tracking-widest mb-4">Duration: {item.duration}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs font-bold text-muted hover:text-red-500 transition-colors uppercase tracking-widest"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="text-2xl font-black text-white">₹{item.price.toLocaleString('en-IN')}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="card-premium p-10 sticky top-32">
                  <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-center border-b border-white/5 pb-4">Summary</h2>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-muted font-medium">
                      <span>Programs Subtotal</span>
                      <span>₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-blue-500 font-bold">
                      <span>Launch Offer (-30%)</span>
                      <span>-₹{discount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-muted font-medium">
                      <span>Platform Tax (18%)</span>
                      <span>₹{Math.round(gst).toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-6 mb-10">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-muted uppercase tracking-widest mb-1">Total Investment</span>
                      <span className="text-3xl font-black text-white">₹{Math.round(total).toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  <button className="btn-premium primary w-full justify-center">Transmit Payment</button>
                  <p className="text-center text-[10px] text-muted mt-6 uppercase tracking-widest leading-relaxed">
                    Secure 256-bit encrypted transmission. <br />Access provided instantly after verification.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Cart
