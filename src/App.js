import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
          name: 'T-shirt for formal Men',
          price: '200',
          rating: '4.0',
          url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSAZgOCnxD7fWPZU2y5iCR7LpGopuFadw3mM4nxLTOL7j2o0nrINq5PPk7R2FhJ9rAeV3QE-pRFEx873ckt-oq5I1Mg_02g3c_l82maB58jvZuQUlIEdbxeNw',
        },
        {
          name: 'T-shirt for formal Men',
          price: '600',
          rating: '4.4',
          url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlWTeEsbMpsXiGh96jDQKEe_KIwFHvEGKrCEb6Wt_8Z0pcYGy4tVmjq8LK-VNtc29k66SCqE-3taltGAa3nvc0aPCjdMKKcjngTFXheGo7',
        },
        {
          name: 'T-shirt for formal Men',
          price: '300',
          rating: '4.6',
          url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRqd3dg6YtiIe934kJz_Qg-ex7O4n_03Zmdddase9DYBIpP1qNefDVRHUMT0s45fdjbY_XsDWxTzklwDOQ0A0CynwQzqODu9bWnQemULlKQ8_QBThC7tbjvPg',
        },
        {
          name: 'T-shirt for formal Men',
          price: '300',
          rating: '4.2',
          url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzTZ_CVkMl6D_jGmKPBeVasKuF208Ho68CrYssmWk-zGozzDUatsImtLtwI5DeXMowg4e34yN8CBwQmq1rA6O2Q9AN2iWMd-J8L0wbmjfXvZuQNKt0qshoww',
        },
        {
          name: 'T-shirt for formal Men',
          price: '100',
          rating: '5.0',
          url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2mjt8BYMax4nGAsbCg0ZuCQP2CbxS97bzeOJkmYu_HfvM6riREJNH9SbQzb82hcPXopmJw2kH1pry0hvogx3zsIUzwXSEfiy88Y2bAhSM',
        },
        {
          name: 'T-shirt for formal Men',
          price: '350',
          rating: '4.0',
          url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSd5k8gjy2d8UMHAjAyJz59w0DwnPz7fpXZlOwPK3vh1uDpT6ZeQx2DUBJ54B1zmUv6X4mgGFdfjN9UwhzJcNygIBwxcGSL-JPksqSRQBb2Vo5tbISPQ0jz6g',
        },
        {
          name: 'T-shirt for formal Men',
          price: '300',
          rating: '4.0',
          url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTUReyopfV1_8z1a4CyymvErKqqmlmFCzBsc_D2rnygTZa0v-EOzelJ8iq58obsT_iVjriiyXb_qMI61ZAZB6OMuZ8uIzujc4HDJDK6CFuaF9ULa3T4wgul',
        },
        {
          name: 'T-shirt for formal Men',
          price: '400',
          rating: '4.9',
          url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRke0JxBCpeaz6lFXWgE1_x867HIP_XD0Bj82mLZ_qBqVxpKZtErFCjcP5tGrQSMuUJvHNWk2P37rlFjr6kVr7MP10Xwztp_vBxax3cZVqYjmuyYd-2mXxp',
        },
        {
          name: 'T-shirt for formal Men',
          price: '500',
          rating: '5.0',
          url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRV50aU5HCGjzBlOMQHxw2gGt0x08fpYPm359EuyuhM8DASaW_jZfOv-sYL6z1sevLA0C54pskcpqDlUVWYGSljeFa2lR9MTNxTSOLg4EIPe_ZemhR1GTp9yQ',
        },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;