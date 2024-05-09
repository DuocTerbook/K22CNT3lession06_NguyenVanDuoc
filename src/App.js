import React, { Component } from 'react'
import NVDProductlist from './components/NVDProductlist';
import NVDProductadd from './components/NVDProductadd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Nguyễn Văn Được', id: 2210900016, status:1 },
        { title: 'Cabbage', id: 1,status:1 },
        { title: 'Garlic', id: 2,status:0 },
        { title: 'Apple', id: 3,status:0 },
        { title: 'SamSung', id: 4,status:1 },
      ]
    }
  }
  NvdHandleSubmit = (param)=>{
    console.log("App:",param);
    //Thêm vào mảng dữ liệu product
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Nguyễn Văn Được - Render Data - Event Form </h1>
        <hr/>
        <NVDProductlist renderProducts={this.state.products}/>
        <hr/>
        <NVDProductadd onSummit = {this.NvdHandleSubmit}/>
      </div>
    )
  }
}
