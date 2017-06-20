import React, {Component} from 'react';
// import { AppRegistry, View, Image } from 'react-native';

const ListDesign = (props) => (
  <div>
    <li>
    <span><h3>{ props.design.designType }</h3></span>
    <p>{props.design.description}</p>
    {
      props.design.images.map(image => {
        return <img src={image} style={{width: 500, height: 500}}></img>
      })
    }
    </li>
  </div>
)

export default ListDesign;