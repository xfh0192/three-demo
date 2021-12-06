import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Css3d from '../Css3d'
import AxesHelper from '../AxesHelper';

export default class Application extends Component {
  click = () => {
    console.log('application');
  }
  render() {
    return (
      <div>
        Application
        <button onClick={this.click}>button</button>
        {/* <Css3d /> */}
        <AxesHelper />
      </div>
    )
  }
}