import React from 'react';

import { MenuItem } from '../menu-item/menu-item';
import { sections } from '../../data/sections';
import './directory.styles.scss';

export class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem key={section.id} {...section} />
        ))}
      </div>
    );
  }
}
