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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    </Provider>
  </React.StrictMode>
)
