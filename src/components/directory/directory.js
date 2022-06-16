import React from 'react';
import { connect } from 'react-redux';

import { MenuItem } from '../menu-item/menu-item';
import { sections } from '../../data/sections';
import './directory.styles.scss';

const Directory = ({ directory }) => {
  console.log(directory);
  return (
    <div className="directory-menu">
      {directory.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};
const mapStateToProps = ({ directory }) => {
  return directory;
};

export default connect(mapStateToProps)(Directory);
