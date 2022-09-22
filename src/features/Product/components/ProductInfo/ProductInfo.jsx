import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product }) {
  return (
    <div>
      <section className="product_detail">
        <div className="container">
          <div className="row">
            <div className="left">
              <img src={`${product.image}`} alt={`${product.alias}`} />
            </div>

            <div className="right">
              <h2>${product.name}</h2>
              <p className="product-desc">${product.description}</p>
              <h4 className="size-text">Available Size</h4>

              <div className="size">
                {/* {Array(7)
                  .join(0)
                  .split(0)
                  .map(
                    (item, i) => `
    <a href="#">${product?.size[i]}</a>
  `
                  )
                  .join('')} */}
              </div>

              <h3 className="price">${product.price}</h3>
              <div className="group-input">
                <button o className="disable">
                  +
                </button>
                <input id="number" type="text" value="1" className="input" />
                <button className="disable">-</button>
              </div>
              <div className="group-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductInfo;
