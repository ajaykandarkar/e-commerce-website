import React from 'react'
import { CartCard } from '../components/CartCard'
import image1 from '../assests/images/1001.png'
import image2 from '../assests/images/1002.png'
import image3 from '../assests/images/1003.png'
import image4 from '../assests/images/1004.png'
import image5 from '../assests/images/1005.png'
import image6 from '../assests/images/1006.png'
import { Corsal } from '../components'

const products = [
  {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": `$${149}`, "image": `${image1}`,}, 
  {id: 2, "name": "boAt Rockerz 450", "price": `$${549}`, "image": `${image2}`,}, 
  {id: 3, "name": "Samsung Hero Blutooth", "price":`$${249}`, "image": `${image3}`,}, 
  {id: 4, "name": "Apple 466 New Park", "price": `$${949}`, "image": `${image4}`,}, 
  {id: 5, "name": "Hp 3D Sound Cool", "price":`$${249}`, "image": `${image5}`,}, 
  {id: 6, "name": "Back Love Yard 700p", "price": `$${349}`, "image": `${image6}`,}, 
]

export const Home = () => {
  return (
     <>
      <main>
        <section>
          <Corsal/>
        </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>

  
  
     </>
  )
}
