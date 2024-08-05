import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import "./style/index.css"

import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <div className="background">
          <div className="background-main">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<User />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </Provider>
  </React.StrictMode>
)
