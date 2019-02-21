import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export class Product extends Component {

  render() {

    const {product, url} = this.props;

    console.log(url);
    
    return (
      <div className='product'>
          <div className='image'>
            <div className='inner'>
              <Link to={'/postcard/' + product.product_id}>
                <img src={url} alt=''/>
              </Link>
            </div>
          </div>
          <div className='categories'>
            {
              Object.keys(this.props.product.categories).map((key, index) => {
                return  <div key={index}>{this.props.product.categories[key]}</div>
              })
            }
          </div>
      </div>
    )

  }
}

export default Product
