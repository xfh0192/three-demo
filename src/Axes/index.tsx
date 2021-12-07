import React, { Component } from 'react'
import ReactDom from 'react-dom'
import _ from 'lodash'
import './index.less'

import * as THREE from 'three'

import { AxesState, AxesProps } from '../types/Axes'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

// for test Axes and Camera
export default class Axes extends Component<AxesProps, AxesState> {
  constructor(props: any) {
    super(props)
    let camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 200)
    this.state = {
      camera,
      scene: new THREE.Scene(),
      renderer: new THREE.WebGL1Renderer(),
      controls: new TrackballControls(camera, document.createElement('div')),
    }
  }
  componentDidMount = () => {
    this.init()
    this.addAxesHelper()
    this.handleRender()
  }
  init = () => {
    let { scene, camera, renderer } = this.state
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    /**
     * x轴红色
     * y轴绿色
     * z轴蓝色
     */
    camera.position.set(100, -100, 100)  // 相机位置
    camera.lookAt(0, 0, 0) // 设置相机方向（指向的场景对象）
  }
  addAxesHelper = () => {
    var axesHelper = new THREE.AxesHelper(1000);
    this.state.scene.add(axesHelper)
  }

  handleRender = () => {
    const { scene, camera } = this.state
    //环境光    环境光颜色与网格模型的颜色进行RGB进行乘法运算
    let ambient = new THREE.AmbientLight(0xffffff)
    scene.add(ambient)
    this.state.renderer.render(scene, camera);
  }

  render() {
    return (
      <div className='Axes'>
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
