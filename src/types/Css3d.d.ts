import * as THREE from 'three'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export interface Css3dProps {
  [string]: any
}
export interface Css3dState {
  objects: Array<CSS3DObject>,
  // targets: object,
  // camera: 
}