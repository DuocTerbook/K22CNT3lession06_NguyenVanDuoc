import React, { Component } from 'react'

export default class NVDProductadd extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:0,
            title:'',
            status:0
        }
    }
    NvdHandleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    //Submit form
    NvdHandleSubmit = (ev)=>{
        ev.preventDefault();
        this.props.onSummit(this.state); 
    }
    render() {
        return (
            <div>
                <h2>Thêm mới sản phẩm</h2>
                <form className='col-md-6'>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">ID</span>
                        <input
                            type="text" 
                            class="form-control"
                            id='id'
                            name='id'
                            value={this.state.id}
                            onChange={this.NvdHandleChange}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon2">Title</span>
                        <input
                            type="text" 
                            class="form-control"
                            name='title'
                            value={this.state.title}
                            onChange={this.NvdHandleChange}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon3">Status</span>
                        <input
                            type="text" 
                            class="form-control"
                            name='status'
                            value={this.state.status}
                            onChange={this.NvdHandleChange}
                        />
                    </div>
                    <button className='btn btn-success' onClick={this.NvdHandleSubmit}>Ghi lại</button>
                </form>
            </div>
        )
    }
}
