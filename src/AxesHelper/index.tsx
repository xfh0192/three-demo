import React, { Component } from 'react'
import ReactDom from 'react-dom'
import _ from 'lodash'
import './index.less'

import * as THREE from 'three'

import { Css3dState, Css3dProps, Table, Targets } from '../types/Css3d'
import * as TWEEN from '@tweenjs/tween.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

export default class Css3d extends Component<Css3dProps, Css3dState> {
  constructor(props: any) {
    super(props)
    let camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000)
    this.state = {
      objects: [],
      targets: { table: [] },
      camera,
      scene: new THREE.Scene(),
      renderer: new CSS3DRenderer(),
      controls: new TrackballControls(camera, document.createElement('div')),
    }
  }
  componentDidMount = () => {
    this.addAxesHelper()
    this.handleRender()
  }

  addAxesHelper = () => {
    var axesHelper = new THREE.AxesHelper(100);
    this.state.scene.add(axesHelper)
  }

  handleRender = () => {
    const { scene, camera } = this.state
    this.state.renderer.render(scene, camera);
  }

  render() {
    return (
      <div className='css3d'>
        <div id="container"></div>
        <div id="menu">
          {/* <button id="table" onClick={this.handleTransform.bind(this, 'table')}>TABLE</button> */}
          <button id="sphere">SPHERE</button>
          <button id="helix">HELIX</button>
          <button id="grid">GRID</button>
        </div>
      </div>
    )
  }
}
