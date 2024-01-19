import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
      <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
        <div className="card" >
  <img src={this.props.pic?this.props.pic:"/image/no image.jpg"}  height="200px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title.slice(0,80)+"..."}</h5>
    <hr/>
    <div className='d-flex justify-content-between'>
        <p className='date-and-soure'>{this.props.source}</p>
        <p className='date-and-soure'>{(()=>new Date(this.props.date).toDateString())()}</p>
    <hr/>

    </div>
   
    <p className="card-text">{this.props.description.slice(0,150)+"..."}</p>
    <a href={this.props.url}  className="btn background text-light w-100 btn-sm" target='_blank' rel='norreferrer'>Continue Reading</a>
  </div>
</div>
      </div>
    )
  }
}
