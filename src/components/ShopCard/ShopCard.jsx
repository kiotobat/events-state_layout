import PropTypes from 'prop-types';

import './shopCard.css';

// Компонент карточки товара, отображаемого в виде сетки:
const ShopCard = ({ data }) => {
  return (
    <li className="shop-card" style={{ backgroundImage: `url(${data.img})` }}>
      <div className="shop-card__header">
        <h3 className="shop-card__title">{data.name}</h3>
        <span className="shop-card__color">{data.color}</span>
      </div>
      <div className="shop-card__footer">
        <span className="shop-card__price">${data.price}</span>
        <button className="shop-card__btn" type="button">ADD TO CART</button>
      </div>
    </li>
  );
};

// Валидация пропсов:
ShopCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })
};

export default ShopCard;
