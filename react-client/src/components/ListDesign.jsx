import React, {Component} from 'react';
import Designer from './ListDesigner.jsx';
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
        <h3>{ this.props.design.designType }<button onClick={() =>  this.toggleHidden()} >See Designers</button></h3>
        <p>{ this.props.design.description }</p>
        {
          this.props.design.images.map(image => {
            return <img src={image} style={{width: 300, height: 300}}></img>
          })
        }
        </li>
        <div>
          <ul>
            {
              this.state.isHidden ? null : this.props.designers.filter((designer) => {
                if (designer.designType === this.props.design.designType) {
                  return designer;
                }
              }).map(designer => <Designer designer={designer}/>)
            }          
          </ul>
        </div>
      </div>
    )
  }
}

export default ListDesign;

// <div className={this.state.isHidden ? 'hidden' : ''}>
//   <ul>
//     <li>
//       <h3>{this.props.designers.name}</h3>
//       <p>{this.props.designers.bio}</p>
//       {
//         this.props.designers.images.map(image => {
//           return <img src={image} style={{width: 200, height: 200}}></img>
//         })
//       }
//     </li>      
//   </ul>
// </div>