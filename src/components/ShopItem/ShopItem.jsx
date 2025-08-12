import PropTypes from 'prop-types';

import './shopItem.css';

// Компонент карточки товара, отображаемого в виде списка:
const ShopItem = ({ data }) => {
  return (
    <li className="shop-item">
      <img className="shop-item__img" src={data.img} alt={data.name} />
      <h3 className="shop-item__title">{data.name}</h3>
      <span className="shop-item__color">{data.color}</span>
      <span className="shop-item__price">${data.price}</span>
      <button className="shop-item__btn" type="button">ADD TO CART</button>
    </li>
  );
};

// Валидация пропсов:
ShopItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })
};

export default ShopItem;
