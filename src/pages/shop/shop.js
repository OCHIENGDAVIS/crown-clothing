import React from 'react';

import PreviewCollection from '../../components/preview-collections/preview-collection';
import './shop.style.scss';
import SHOP_DATA from '../../data/collections';

export class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection) => (
          <PreviewCollection key={collection.id} {...collection} />
        ))}
      </div>
    );
  }
}
