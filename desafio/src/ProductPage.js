import React, { Component } from 'react'

class ProductPage extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.product.name}</h1>
            </div>
        )
    }
}

export default ProductPage