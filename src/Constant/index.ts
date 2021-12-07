/// <reference path='../types/Constant.d.ts'/>

import Dashboard from '../Application/Dashboard'
import Axes from '../Axes'
import Css3d from '../Css3d'

export const MenuList: Constant.MenuList = [{
  title: 'dashboard',
  value: 'dashboard',
  path: '/dashboard',
  component: Dashboard,
}, {
  title: 'Css3d',
  value: 'Css3d',
  path: '/Css3d',
  component: Css3d,
}, {
  title: 'Axes',
  value: 'Axes',
  path: '/Axes',
  component: Axes,
}]