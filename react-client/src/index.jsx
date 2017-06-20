import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      designs: [],
      designers: []
    }
  }

  // searchDesigners (designType) {
  //   $.ajax({
  //     url: '/designers',
  //     method: 'GET',
  //     data: {designType: designType},
  //     success: (designers) => {
  //       // console.log('INSIDE SEARCH DESIGNERS: ', designers);
  //       this.setState({
  //         designers: designers
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   })
  // }

  componentDidMount() {
    $.ajax({
      url: '/designs', 
      success: (designs) => {
        // console.log('AJAX /DESIGNS', designs);
        this.setState({
          designs: designs
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    $.ajax({
      url: '/designers',
      method: 'GET',
      success: (designers) => {
        // console.log('INSIDE SEARCH DESIGNERS: ', designers);
        this.setState({
          designers: designers
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }


  render () {
    return (<div>
      <h1>Interior Design Styles</h1>
      <List designs={this.state.designs} designers={this.state.designers}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// searchDesigners={this.searchDesigners.bind(this)