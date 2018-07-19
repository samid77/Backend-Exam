import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

class Products extends Component {
  state = {
      dataproduk: [],
      alert: null,
  }
  componentDidMount() {
      axios.get(`http://localhost:8003/productlist`)
        .then((getData) => {
            console.log(getData.data);
            this.setState({
                dataproduk: getData.data,
            });
        });
  }
  saveData = (e) => {
    axios.post(`http://localhost:8003/saveData`, {
        productname: e.productname.value,
        productcode: e.productcode.value,
        price: e.price.value,
        description: e.productdescription.value
    });
  }
  render() {
    const data = this.state.dataproduk.map(
        (d, index) => {
            var number = index + 1;
            var productID = d.id;
            var productCode = d.product_code;
            var productName = d.product_name;
            var productDescription = d.description;
            var price = d.price;

            return <tr key={index} style={{textAlign: 'center'}}>
            <td>{number}</td>
            <td>{productCode}</td>
            <td>{productName}</td>
            <td>{productDescription}</td>
            <td>{price}</td>
            <td>
                <Link to={{pathname: '/editdata', state: {productID: productID}}} className="btn btn-sm btn-flat btn-warning"><i className="fa fa-pencil"></i> Edit</Link>&nbsp;
                <button className="btn btn-sm btn-flat btn-danger"><i className="fa fa-remove"></i> Delete</button>
            </td>
        </tr>
        }
    );
    return (
        <div>
            <Header />
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>Product List</h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                        <li><a href="#">Tables</a></li>
                        <li className="active">Data tables</li>
                    </ol>
                </section>
            {/* Main content */}
            <section className="content">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box box-primary">
                            <div className="box-header">
                                {/*box-header*/}
                            </div>
                            {/* /.box-header */}
                            <div className="box-body">
                                <button data-toggle="modal" data-target="#modal-default" className="btn btn-primary btn-flat btn-md" style={{marginBottom: '20px'}}><i className="fa fa-plus-circle"></i> Add Product Data</button>
                                <table id="example1" className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Product Code</th>
                                            <th>Product Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>No</th>
                                            <th>Product Code</th>
                                            <th>Product Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            {/* /.box-body */}
                        </div>
                        {/* /.box */}
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
            </section>
            {/* /.content */}
            <div className="modal fade" id="modal-default">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor: '#0a2a6b', color: 'white'}}>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">Products Form</h4>
                        </div>
                        <div className="modal-body">
                            <form role="form">
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label>Product Code</label>
                                            <input className="form-control" ref="productcode" placeholder="Product Code" type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Product Name</label>
                                            <input className="form-control" ref="productname" placeholder="Product Name" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Price</label>
                                            <input className="form-control" ref="price" placeholder="Product Price" type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Product Description</label>
                                            <textarea ref="productdescription" class="textarea" placeholder="Place some text here"
                                            style={{width: '100%', height: '200px',lineHeight: '18px', border: '1px solid #dddddd',padding: '10px'}}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>File input</label>
                                            <input type="file" />
                                            <p className="help-block">Example block-level help text here.</p>
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning btn-flat btn-md pull-left" data-dismiss="modal">Close</button>
                            <button type="button" onClick={()=> this.saveData(this.refs)} className="btn btn-flat btn-md btn-primary"><i className="fa fa-paper-plane"></i> Save</button>
                        </div>
                    </div>
                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </div>
            </div>
        </div>
    )
  }
}
export default Products;
