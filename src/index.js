import React from 'react'
import ReactDOM from 'react-dom'

// Your top level component
import App from './App'

// Bootstrap's CSS
import './assets/css/bootstrap.min.css'

// Animate.css
import './assets/css/animate.min.css'

// Slick
import './assets/css/slick.min.css'
import './assets/css/slick-theme.min.css'

// Rodal
import 'rodal/lib/rodal.css';

// Global CSS (normalize)
import './globalStyles'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}
