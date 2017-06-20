import React from 'react';


const Designer = (props) => (
// {console.log('INSIDE DESIGNER!')}
  <div>
    <li>
      <h3>{props.designer.name}</h3>
      <p>{props.designer.bio}</p>
      {
        props.designer.images.map(image => {
          return <img src={image} style={{width: 200, height: 200}}></img>
        })
      }
    </li>
  </div>
)

export default Designer;