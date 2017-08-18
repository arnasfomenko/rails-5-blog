import React from 'react'
import ReactDOM from 'react-dom'
import * as ViewsTree from './views/index'
import 'whatwg-fetch'

App.ReactRender = (component, container='root') => {
 if (document.getElementById(container)) {
   ReactDOM.render(
     component,
     document.getElementById(container)
   )
 } else {
   console.log(`ReactRender element #${container} not found.`)
 }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log(ViewsTree)
  const dataset = document.getElementsByTagName('body')[0].dataset
  const controllerParts = dataset.controller.split('/')

  let viewName = ''
  let action = dataset.action

  // index.js reserver by es6
  if (action == 'index')
    action = 'main'

  controllerParts.forEach((part) => {
    const camelCasePart = part.replace(/_\w/g, (m) => {
      return m[1].toUpperCase()
    })

    viewName += camelCasePart.charAt(0).toUpperCase() + camelCasePart.slice(1)
  })

  const camelCaseAction = action.replace(/_\w/g, (m) => {
    return m[1].toUpperCase()
  })
  viewName += camelCaseAction.charAt(0).toUpperCase() + camelCaseAction.slice(1)

  viewName += 'View'

  if (ViewsTree && ViewsTree.default && ViewsTree.default[viewName]) {
    console.log(viewName + ' view loaded')
    ViewsTree.default[viewName]()
  } else {
    console.log('No view found for: ' + viewName)
  }
})
