import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class DaftarNasabah extends Component {
  state = {
      datanasabah: [],
      alert: null,
      status: <br />,
      redirect: false,
  }
  componentDidMount() {
      axios.get(`http://localhost:8002/daftarnasabah`)
        .then((getData) => {
            console.log(getData.data);
            this.setState({
                datanasabah: getData.data,
            });
        });
  }
  saveData = (e) => {
    var self = this;
    axios.post(`http://localhost:8002/saveData`, {
        namalengkap: e.namalengkap.value,
        email: e.email.value,
        alamat: e.alamat.value,
        handphone: e.handphone.value,
        tanggallahir: e.tanggallahir.value,
        rekening: e.rekening.value,
        kodepin: e.kodepin.value,
    }).then((response) => {
        var serverResponse = response.data;
        if(serverResponse === 'oke'){
            self.setState({
                redirect: true,
            });
        } else if(serverResponse === 'gagal'){
            self.setState({
                status: 'Data gagal dimasukan',
            });
        }
    });
  }

  deleteData = (e) => {
    var self = this;
    axios.post(`http://localhost:8002/deleteData`, {id: e})
    .then((response) => {
        var serverResponse = response.data;
        if(serverResponse === 'oke'){
            self.setState({
                redirect: true,
            });
        } else if(serverResponse === 'gagal'){
            self.setState({
                status: 'Data gagal dimasukan',
            });
        }
    });
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/daftarnasabah'/>
    }
  }
  render() {
    const data = this.state.datanasabah.map(
        (d, index) => {
            var number = index + 1;
            var IDnasabah = d.id;
            var namaNasabah = d.nama_lengkap;
            var rekeningNasabah = d.nomor_rekening;
            var emailNasabah = d.email;
            var nomorNasabah = d.nomor_handphone;
            var genderNasabah = d.jenis_kelamin;
            var tanggalLahir = d.tanggal_lahir;
            var alamatNasabah = d.alamat;

            return <tr key={index} style={{textAlign: 'center'}}>
            <td>{number}</td>
            <td>{namaNasabah}</td>
            <td>{rekeningNasabah}</td>
            <td>{emailNasabah}</td>
            <td>{tanggalLahir}</td>
            <td>{alamatNasabah}</td>
            <td>{nomorNasabah}</td>
            <td>{genderNasabah}</td>
            <td>
                <Link to={{pathname: '/editdata', state: {IDnasabah: IDnasabah}}} className="btn btn-sm btn-flat btn-warning"><i className="fa fa-pencil"></i> Edit</Link>&nbsp;
                <button type="button" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteData(IDnasabah) } } className="btn btn-sm btn-flat btn-danger"><i className="fa fa-remove"></i> Delete</button>
            </td>
        </tr>
        }
    );
    return (
        <div>
            {this.renderRedirect()}
            <Header />
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>Data Nasabah</h1>
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
                                <button data-toggle="modal" data-target="#modal-default" className="btn btn-primary btn-flat btn-md" style={{marginBottom: '20px'}}><i className="fa fa-plus-circle"></i> Tambah Data Nasabah</button>
                                <table id="example1" className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama Nasabah</th>
                                            <th>Nomor Rekening</th>
                                            <th>Email</th>
                                            <th>Tanggal Lahir</th>
                                            <th>Alamat</th>
                                            <th>Nomor Handphone</th>
                                            <th>Jenis Kelamin</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama Nasabah</th>
                                            <th>Nomor Rekening</th>
                                            <th>Email</th>
                                            <th>Tanggal Lahir</th>
                                            <th>Alamat</th>
                                            <th>Nomor Handphone</th>
                                            <th>Jenis Kelamin</th>
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
                            <h4 className="modal-title">Form Nasabah</h4>
                        </div>
                        <div className="modal-body">
                            <form role="form">
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label>Nama Lengkap</label>
                                            <input className="form-control" ref="namalengkap" placeholder="Nama Lengkap Nasabah" type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Alamat Email</label>
                                            <input className="form-control" ref="email" placeholder="Alamat Email Nasabah" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>Alamat</label>
                                            <input className="form-control" ref="alamat" placeholder="Alamat tinggal nasabah" type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Nomor Handphone</label>
                                            <input className="form-control" ref="handphone" placeholder="Nomor Handphone Nasabah" type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Jenis Kelamin</label>
                                            <select className="form-control">
                                                <option ref="pria">Pria</option>
                                                <option ref="wanita">Wanita</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Tanggal Lahir</label>
                                            <input className="form-control" ref="tanggallahir" placeholder="YYYY-MM-DD" type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Nomor Rekening</label>
                                            <input className="form-control" ref="rekening" placeholder="Masukan nomor rekening untuk nasabah" type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Kode Pin</label>
                                            <input className="form-control" ref="kodepin" placeholder="Masukan nomor rekening untuk nasabah" type="password"/>
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
export default DaftarNasabah;
