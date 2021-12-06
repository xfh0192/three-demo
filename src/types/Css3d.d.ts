import * as THREE from 'three'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

export interface Css3dProps {
  [string]: any
}
export interface Css3dState {
  objects: Array<CSS3DObject>,
  targets: Targets,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: CSS3DRenderer,
  controls: TrackballControls,
}

export interface Targets {
  table: THREE.Object3D[]
}

export type Table = (string | number)[]