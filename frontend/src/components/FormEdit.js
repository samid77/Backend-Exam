import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import { Redirect } from 'react-router-dom';


class FormEdit extends Component {
  state = {
    id: '',
    nama: '',
    email: '',
    alamat: '',
    tanggallahir: '',
    nomorhandphone: '',
    groups: '',
    rekening: '',
    pin: '',
    jeniskelamin: '',
    username: '',
    password: '',
    status: <br />,
    redirect: false,
  }
  componentDidMount() {
      var id = this.props.location.state.IDnasabah;
      axios.get(`http://localhost:8002/editdata/`+id)
      .then((result) => {
          this.setState({
              id: result.data[0].id,
              nama: result.data[0].nama_lengkap,
              email: result.data[0].email,
              alamat: result.data[0].alamat,
              nomorhandphone: result.data[0].nomor_handphone,
              tanggallahir: result.data[0].tanggal_lahir,
              rekening: result.data[0].nomor_rekening,
              pin: result.data[0].kode_pin,
              jeniskelamin: result.data[0].jenis_kelamin,
              username: result.data[0].username,
              password: result.data[0].password,
          });
      });
  }
  updateData = (e) => {
    var self = this;
    axios.post(`http://localhost:8002/updateData`, {
        id: e.userid.value,
        namalengkap: e.namalengkap.value,
        email: e.email.value,
        alamat: e.alamat.value,
        nomorhandphone: e.nomorhandphone.value,
        jeniskelamin: e.jeniskelamin.value,
        tanggallahir: e.tanggallahir.value,
    }).then((response) => {
        var serverResponse = response.data;
        if(serverResponse === 'oke'){
            self.setState({
                redirect: true,
            });
        } else if(serverResponse === -1){
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
    return (
      <div>
        {this.renderRedirect()}
        <Header />
          <div className="content-wrapper">
            <section className="content">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Edit Data Nasabah</h3>
                            </div>
                            {/* /.box-header */}
                            {/* form start */}
                            <form role="form">
                                <div className="box-body">
                                <input type="hidden" className="form-control" ref="userid" defaultValue={this.state.id}/>
                                    <div className="form-group">
                                        <label>Nama Nasabah</label>
                                        <input className="form-control" ref="namalengkap" type="text" defaultValue={this.state.nama}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Alamat Email</label>
                                        <input className="form-control" ref="email" defaultValue={this.state.email} type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>Alamat</label>
                                        <input className="form-control" ref="alamat" type="text" defaultValue={this.state.alamat}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Nomor Handphone</label>
                                        <input className="form-control" ref="nomorhandphone" type="text" defaultValue={this.state.nomorhandphone}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Jenis Kelamin</label>
                                        <input className="form-control" ref="jeniskelamin" type="text" defaultValue={this.state.jeniskelamin}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Tanggal Lahir</label>
                                        <input className="form-control" ref="tanggallahir" type="text" defaultValue={this.state.tanggallahir}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Nomor Rekening</label>
                                        <input disabled className="form-control" type="text" defaultValue={this.state.rekening}/>
                                    </div>
                                    <div className="form-group">
                                        <label>PIN</label>
                                        <input disabled className="form-control" type="text" defaultValue={this.state.pin}/>
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
export default FormEdit;
