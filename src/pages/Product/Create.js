import React from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

const Create = () => {

    const history = useHistory()
    const [product, setProduct] = React.useState({
        name: '',
        price: 0,
        stock: 1,
        status: true
    })


    const handleChange = (e, name) => {
        const value = e.target.value
        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await Axios.post('http://localhost:3000/product', product)
            const { status, message } = response.data

            if (status === 'success') {
                alert(message)
                history.push('/product')
            } else {
                alert(message)
            }

        } catch (error) {
            alert('network error')
        }
    }


    return <>
        <h2>Halaman form create product </h2>

        <form>
            <label>Name </label>
            <input type="text" size={50} value={product.name} onChange={(e) => handleChange(e, 'name')} />

            <label>Price </label>
            <input type="number" size={50} value={product.price} onChange={(e) => handleChange(e, 'price')} />

            <label>Stock </label>
            <input type="number" size={50} value={product.stock} onChange={(e) => handleChange(e, 'stock')} />

            <label>Status </label>
            <select value={product.status} onChange={(e) => handleChange(e,
                'status')}>
                <option value={false}>off</option>
                <option value={true}>on</option>
            </select>

            <label></label>
            <button onClick={handleSubmit}>Submit data</button>

        </form>

        <button onClick={() => history.push('/product')}> &laquo; back</button>

    </>
}

export default Create