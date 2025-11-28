import React, { useMemo, useState } from 'react'
import productsData from '../data/Products'
import ProductCard from './ProductCard'

export default function ProductGrid(){
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('')

  const categories = useMemo(() => ['All', ...new Set(productsData.map(p => p.category))], [])

  const filtered = productsData
    .filter(p => category === 'All' ? true : p.category === category)
    .filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a,b) => {
      if (sort === 'low') return a.price - b.price
      if (sort === 'high') return b.price - a.price
      return 0
    })

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products..." className="border rounded px-3 py-2" />
          <select value={category} onChange={e => setCategory(e.target.value)} className="border rounded px-2 py-2">
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <select value={sort} onChange={e => setSort(e.target.value)} className="border rounded px-2 py-2">
            <option value="">Sort</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}