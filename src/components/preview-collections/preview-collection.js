import React from 'react';

import './preview-collection.style.scss';
import CollectionItem from '../collection-item/collection-item';

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map(({ id, ...otherItemsProps }) => (
          <CollectionItem key={id} {...otherItemsProps} />
        ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
