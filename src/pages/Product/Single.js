import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Axios from 'axios'


const Single = () => {

    const history = useHistory()
    const { productId } = useParams()
    const [product, setProduct] = React.useState({
        name: '',
        price: 0,
        stock: 1,
        status: true
    })

    React.useEffect(() => {
        const getSingleProducts = async () => {
            try {
                const response = await Axios.get(`http://localhost:3000/product/${productId}`)
                const { status, message, data } = response.data
                if (status === 'success') {
                    // handle data single product
                    setProduct(data)
                } else {
                    alert(message)
                }
            } catch (error) {
                alert(error)
            }
        }
        getSingleProducts()
    }, [productId]) //create depedenci productid

    return <>
        <h2>Halaman single product</h2>
        {product && <>
            <div>Name : {product.name}</div>
            <div>Price : {product.price}</div>
            <div>Stock : {product.stock}</div>
            <div>Status : {product.status ? 'on' : 'off'}</div>
        </>}
        <button onClick={() => history.push('/product')}> &laquo; back</button>
    </>
}

export default Single