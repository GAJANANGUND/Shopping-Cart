import React from 'react'
import { Link } from 'react-router';

const Products = ({ items }) => {
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          {items.map((product) => <div key={product.id} className='col-lg-4 col-md-6 my-3 d-flex justify-content-center align-items-center'>
            <div className="card product-card text-center" style={{ width: '18rem' }}>
              <Link to={`/product/${product.id}`} className='image-container'>
                <img src={product.imgSrc} className='card-img-top' alt={product.title} />
              </Link>
              <div className="card-body text-center">
                <h5 className='card-title'>{product.title}</h5>
                <p className='product-price'>{product.price} ₹</p>
                <div className="button-container">
                  <button className='btn add-to-cart'>
                    🛒 Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>

    </>
  )
}

export default Products
