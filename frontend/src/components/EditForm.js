import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

class EditForm extends Component {
  state = {
      id: '',
      namaproduk: '',
      harga: '',
      deskripsi: '',
      kodeproduk: ''
  }
  componentDidMount() {
      var id = this.props.location.state.productID;
      axios.get(`http://localhost:8003/editproduct/`+id)
      .then((result) => {
          console.log(result.data);
          this.setState({
            id: result.data[0].id,
            namaproduk: result.data[0].product_name,
            harga: result.data[0].price,
            deskripsi: result.data[0].description,
            kodeproduk: result.data[0].product_code,
          });

      })
  }
  updateData = (e) => {
    axios.post('http://localhost:8003/updateData/', {
        id: e.productid.value,
        productname: e.productname.value,
        productcode: e.productcode.value,
        price: e.price.value,
        description: e.productdescription.value
    });
  }
  render() {
    return (
      <div>
          <Header />
          <div className="content-wrapper">
            <section className="content">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Edit Product Data</h3>
                            </div>
                            {/* /.box-header */}
                            {/* form start */}
                            <form role="form">
                                <div className="box-body">
                                <input type="hidden" className="form-control" ref="productid" defaultValue={this.state.id}/>
                                    <div className="form-group">
                                        <label>Product Code</label>
                                        <input className="form-control" ref="productcode" placeholder="Product Code" type="text" defaultValue={this.state.kodeproduk}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Product Name</label>
                                        <input className="form-control" ref="productname" defaultValue={this.state.namaproduk} placeholder="Product Name" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>Product Price</label>
                                        <input className="form-control" ref="price" placeholder="Product Price" type="text" defaultValue={this.state.harga}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Product Description</label>
                                        <textarea id="editor1" ref="productdescription" name="editor1" rows="10" cols="80" Value={this.state.description} className="form-control"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>File input</label>
                                        <input type="file" />
                                        <p className="help-block">Example block-level help text here.</p>
                                    </div>
                                </div>
                                {/* /.box-body */}
                                <div className="box-footer">
                                    <button type="button" onClick={()=> this.updateData(this.refs)} className="btn btn-flat btn-md btn-primary"><i className="fa fa-paper-plane"></i> Update</button>
                                </div>
                            </form>
                            </div>
                    </div>
                </div>
            </section>
          </div>
      </div>
    )
  }
}
export default EditForm;
