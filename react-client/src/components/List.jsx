import React from 'react';
import ListDesign from './ListDesign.jsx';

const List = (props) => (
  <div>
    <h4> Interior Design Styles & Designers </h4>
    There are { props.designs.length } design types.
    <ul>
      { props.designs.map(design => <ListDesign design={design} designers={props.designers}/>)}
    </ul>
  </div>
)

export default List;

// searchDesigners={this.searchDesigners.bind(this)