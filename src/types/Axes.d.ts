import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

export interface AxesProps {
  [propName: string]: any
}
export interface AxesState {
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGL1Renderer,
  controls: TrackballControls,
  [propName: string]: any,
}
