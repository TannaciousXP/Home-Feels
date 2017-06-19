import React from 'react';
import ListItem from './ListDesigner.jsx';

const List = (props) => (
  <div>
    <h4> Interior Designers </h4>
    There are { props.items.length } items.
    { props.items.map(item => <ListDesigner item={item}/>)}
  </div>
)

export default List;