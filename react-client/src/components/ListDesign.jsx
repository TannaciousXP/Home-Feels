import React, {Component} from 'react';
// import { AppRegistry, View, Image } from 'react-native';
//  onClick={() => props.searchDesigners(props.design.designType)} 
// const ListDesign = (props) => (
//   <div>
//     <li>
//     <h3>{ props.design.designType }<button onClick={() => props.searchDesigners(props.design.designType)} >See Designers</button></h3>
//     <p>{props.design.description}</p>
//     {
//       props.design.images.map(image => {
//         return <img src={image} style={{width: 300, height: 300}}></img>
//       })
//     }
//     </li>
//   </div>
// )

class ListDesign extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }
  toggleHidden() {
    this.setState({isHidden: !this.state.isHidden});
  } 
  render () {
    return (
      <div>
        <li>
        <h3>{ this.props.design.designType }<button onClick={() => this.props.searchDesigners(this.props.design.designType)} >See Designers</button></h3>
        <p>{ this.props.design.description }</p>
        {
          this.props.design.images.map(image => {
            return <img src={image} style={{width: 300, height: 300}}></img>
          })
        }
        </li>
      </div>
    )
  }
}

export default ListDesign;