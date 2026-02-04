import React from 'react'
import { ShoppingCart, Twitter, Instagram, Mail, Heart } from 'lucide-react'

const products = [
  { id: 1, name: 'Turbo Cacao', blurb: 'Energy + Mood', color: 'cacao' },
  { id: 2, name: 'Zen Matcha', blurb: 'Calm Focus', color: 'matcha' },
  { id: 3, name: 'Salted Caramel Muscle', blurb: 'Recovery', color: 'caramel' },
  { id: 4, name: 'Holy Churro', blurb: 'Brain Fuel', color: 'cinnamon' },
]

function Hero(){
  return (
    <header className="w-full bg-gradient-to-r from-[#fff6ee] to-[#fffdfa] py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#6b6b6b]">Healthy Junk Food</p>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-cacao">Snack Smarter, Not Harder</h1>
            <p className="mt-4 text-gray-600 max-w-xl">Smart-Sweet Popcorn blends functional botanicals with chef-led flavors — all the joy, none of the slump. Handcrafted in small batches with premium binders and no corn syrup.</p>
            <div className="mt-6 flex gap-4">
              <a href="#products" className="btn-cta inline-flex items-center gap-3 px-5 py-3 rounded-lg font-semibold shadow-md">
                <ShoppingCart size={18} />
                <span>Shop the Series</span>
              </a>
              <a href="#why" className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 text-gray-700">Learn why</a>
            </div>
          </div>
          <div className="w-full md:w-72">
            <div className="rounded-xl overflow-hidden bg-gradient-to-b from-[#fff9f6] to-[#fff3ea] p-6">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4c8f4be3f2d7ab7a9f8d3d2d3e5b2b5b" alt="popcorn bowl" className="w-full h-40 object-cover rounded-lg shadow-inner"/>
              <div className="mt-4 text-sm text-gray-700">Chef-crafted. Functional. Snackable.</div>
              <div className="mt-4 flex gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-cacao text-white">New</span>
                <span className="text-xs px-3 py-1 rounded-full bg-matcha text-white">Vegan</span>
                <span className="text-xs px-3 py-1 rounded-full bg-caramel text-white">No Corn Syrup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function ProductCard({p}){
  const colorClass = p.color === 'cacao' ? 'bg-cacao text-white' : p.color === 'matcha' ? 'bg-matcha text-white' : p.color === 'caramel' ? 'bg-caramel text-white' : 'bg-cinnamon text-white'
  return (
    <div className="bg-white rounded-2xl p-6 card-shadow flex flex-col justify-between">
      <div>
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colorClass} text-sm font-bold`}>{p.name.split(' ')[0]}</div>
        <h3 className="mt-4 text-lg font-semibold text-gray-800">{p.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{p.blurb}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-700 font-medium">From $6.99</div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111827] text-white hover:opacity-95">
          <ShoppingCart size={16} /> Buy
        </button>
      </div>
    </div>
  )
}

function ProductGrid(){
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold">Our Flavor Series</h2>
          <p className="mt-2 text-gray-600">Four targeted formulas for energy, focus, recovery, and cognitive lift — all made with premium binders.</p>
        </div>

        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(p => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Why(){
  return (
    <section id="why" className="py-16 bg-[#fffefc]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold">Why Smart-Sweet?</h2>
          <p className="mt-2 text-gray-600">We blend functional binders and natural sweeteners so you get clean energy and gentle, sustained lift without the crash.</p>
        </div>

        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
          <div className="bg-white rounded-2xl p-6 card-shadow">
            <h3 className="font-semibold text-gray-800">Cacao Butter</h3>
            <p className="mt-2 text-gray-600">A rich, stable binder that delivers mouthfeel and slow-release fats to smooth energy curves.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 card-shadow">
            <h3 className="font-semibold text-gray-800">Gum Arabic</h3>
            <p className="mt-2 text-gray-600">A natural plant-derived fiber that helps suspend flavors and creates the perfect crisp texture.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 card-shadow">
            <h3 className="font-semibold text-gray-800">Yacon Syrup</h3>
            <p className="mt-2 text-gray-600">Low-glycemic sweetener that supports stable blood sugar — full flavor, without corn syrup.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">We intentionally avoid corn syrup: it's high glycemic and provides a rapid crash — not the premium experience our customers expect.</p>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800">Join our newsletter</h4>
            <p className="mt-2 text-gray-600">Get early access to new flavors and limited drops.</p>
            <form className="mt-4 flex max-w-md">
              <input aria-label="Email address" type="email" placeholder="you@address.com" className="flex-1 px-4 py-3 border border-gray-200 rounded-l-lg focus:outline-none" />
              <button className="px-4 py-3 bg-cacao text-white rounded-r-lg inline-flex items-center gap-2">Subscribe <Mail size={16} /></button>
            </form>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3 text-gray-600">
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg hover:bg-gray-100"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg hover:bg-gray-100"><Instagram size={18} /></a>
              <a href="#" aria-label="Heart" className="p-2 rounded-lg hover:bg-gray-100"><Heart size={18} /></a>
            </div>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} Smart-Sweet Popcorn</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Hero />
      <main>
        <ProductGrid />
        <Why />
      </main>
      <Footer />
    </div>
  )
}
