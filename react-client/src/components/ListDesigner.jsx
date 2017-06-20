import React, {Component} from 'react';
// import { AppRegistry, View, Image } from 'react-native';

const ListDesigner = (props) => (
  <div>
    <li>
      { props.item.designType }
    </li>
  </div>
)

export default ListDesigner;