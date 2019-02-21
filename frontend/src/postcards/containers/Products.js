/* eslint-disable jsx-quotes */
import React, { Component } from 'react' 
import Product from '../components/Product' 
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux'; 
import { fetchProducts } from '../actions/productActions';
import config from '../../config'; 
 
class Products extends Component { 
 
  componentDidMount() { 
    this.props.fetchProducts(); 
  } 
 
  render() { 
    console.log(this.props.products);
    
    return ( 
      <div className="products"> 
        { 
          this.props.products.map((product) => (
            <Product key={product.product_id} url={`${config.PATH.preview}${product.name}_thumb${product.ext}`} product={product} /> 
          )) 
        } 
      </div> 
    ) 
  } 
} 
 
Products.propTypes = { 
  fetchProducts: PropTypes.func.isRequired, 
  products: PropTypes.array.isRequired, 
}; 
 
const mapStateToProps = state => ({ 
  products: state.products.items 
}) 
 
Products.propTypes = { 
  products: PropTypes.array.isRequired 
} 
 
export default connect(mapStateToProps, { fetchProducts })(Products) 