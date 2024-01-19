import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
export default class App extends Component {
  constructor (){
    super()
    this.state = {
      language : "en",
      search:""
    }
  }
  changeLanguage = (data)=>{
    this.setState({language:data})
  }
  changeSearch = (data)=>{
    this.setState({search:data})
  }
  render() {
    return (
        <>
        <BrowserRouter>
          <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>  
            <Routes>
             <Route path='/' element={<Home search={this.state.search} language={this.state.language} q="All"/>}/>
             <Route path='/All' element={<Home search={this.state.search} language={this.state.language} q="All"/>}/>
             <Route path='/Crime' element={<Home search={this.state.search} language={this.state.language} q="Crime"/>}/>
             <Route path='/Education' element={<Home search={this.state.search} language={this.state.language} q="Education"/>}/>
             <Route path='/Politics' element={<Home search={this.state.search} language={this.state.language} q="Politics"/>}/>
             <Route path='/Entertainment' element={<Home search={this.state.search} language={this.state.language} q="Entertainment"/>}/>
             <Route path='/Science' element={<Home search={this.state.search} language={this.state.language} q="Science"/>}/>
             <Route path='/Technology' element={<Home search={this.state.search} language={this.state.language} q="Technology"/>}/>
             <Route path='/Sports' element={<Home search={this.state.search} language={this.state.language} q="Sports"/>}/>
             <Route path='/Cricket' element={<Home search={this.state.search} language={this.state.language} q="Cricket"/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
       </>
    )
  }
}
