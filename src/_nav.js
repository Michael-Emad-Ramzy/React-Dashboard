import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilCart,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  // cilChartTable,
  cilStar,
  // cidApplications,
  cilLayers,
  cilMoney,
  cilAccountLogout,
  cilActionUndo,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'success',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: 'Management',
  },
  {
    component: CNavItem,
    name: 'Products',
    to: '/theme/colors',
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Orders',
    to: '/theme/typography',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Earnings & Financials',
  },
  {
    component: CNavGroup,
    name: 'Earnings Summary',
    to: '/base',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Earnings Summary',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Withdraw Requests',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Sales Reports',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Promotions & Discounts',
  },
  {
    component: CNavItem,
    name: 'Discount Creation',
    to: '/theme/colors',
    icon: <CIcon icon={cilActionUndo} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
