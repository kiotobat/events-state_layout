import { useState } from 'react'; // Хук для хранения состояния

import products from '../../data/products.json'; // Данные о товарах в формате json
import viewListIcon from '../../assets/view_list.svg'; // Иконка показа товаров списком
import viewModuleIcon from '../../assets/view_module.svg'; // Иконка показа товаров модульной сеткой

import IconSwitch from '../IconSwitch/IconSwitch'; // Компонент-иконка
import ListView from '../ListView/ListView'; // Компонент-список с карточками ShopItem
import CardsView from '../CardsView/CardsView'; // Компонент-сетка с карточками ShopCard

import './store.css';

// Компонент, управляющий состоянием приложения:
const Store = () => {
  const [icon, setIcon] = useState(viewListIcon); // Состояние отображаемой иконки

  const handler = () => {
    setIcon(icon === viewListIcon ? viewModuleIcon : viewListIcon);
  };

  return (
    <div className="store">
      <header className="store__header">
        <IconSwitch icon={icon} onSwitch={handler} />
      </header>
      <main className="store__main">
        {icon === viewListIcon ? (
          <CardsView cards={products} />
        ) : (
          <ListView items={products} />
        )}
      </main>
    </div>
  );
};

export default Store;
