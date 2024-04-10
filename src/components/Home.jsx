import React from 'react'
import { FeaturedProducts } from './FeaturedProducts'

export const Home = () => {
  return (
    <div>
        <header>
            <h1>Welcome to our Online Store</h1> 
            <p>Discover our featured products and find the perfect items for you.</p> 
        </header>
        <main>
            <h2>Featured Products</h2>
            <FeaturedProducts/>
        </main>
        <footer>
            <p>© 2023 Our Online Store. All rights reserved.</p>
        </footer>
    </div>
  )
}
