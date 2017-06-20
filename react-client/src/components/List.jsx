import React from 'react';
import ListDesigner from './ListDesigner.jsx';

const List = (props) => (
  <div>
    <h4> Interior Designs & Designers </h4>
    There are { props.items.length } designs type.
    <ul>
      { props.items.map(item => <ListDesigner item={item}/>)}
    </ul>
  </div>
)

export default List;