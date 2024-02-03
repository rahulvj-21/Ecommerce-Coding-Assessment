import '../App.css';

function ProductList({ product,addToCart }) {
    
    return (
      <div className='body'>
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '33%' }}>
                            <div className='product-item'>
                                <div className='product-box'>
                                  <img src={productItem.url} width="100%" height={250}/>
                                    <p>{productItem.name} | {productItem.category} </p>
                                    <p> Rs. {productItem.price} /-</p>
                                    <div className='rating-box'>
                                      <p> {productItem.rating} </p>
                                    </div>
                                    <button
                                        onClick={() => addToCart(productItem)} className='no-border'
                                    ><img src="cart.png" width={22} height={22}></img></button>                                  
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
}

export default ProductList