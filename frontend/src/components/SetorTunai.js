import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class SetorTunai extends Component {
  state = {
    nominalAwal: '',
  }
  componentDidMount() {
      axios.get(`http://localhost:8002/saldo`)
        .then((getData) => {
            console.log(getData.data[0].nominal);
            this.setState({
                nominalAwal: getData.data[0].nominal,
            })
        });
  }
  tambahNominal = (e) => {
    axios.post(`http://localhost:8002/setortunai`, {
      rekening: e.rekening.value,
      nominalsetor: e.nominalsetor.value,
      kodepin: e.kodepin.value,
    }).then((response) => {
      console.log(response.data);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="content-wrapper">
            <section className="content-header">
                <h1>Setor Tunai</h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                    <li><a href="#">Tables</a></li>
                    <li className="active">Data tables</li>
                </ol>
            </section>
            <section className="content">
              <div className="box box-primary">
                  <div className="box-header with-border">
                      <h3 className="box-title">Setor Tunai</h3>
                      <div className="box-tools pull-right">
                          <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" /></button>
                          <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-remove" /></button>
                      </div>
                  </div>
                  {/* /.box-header */}
                  <div className="box-body">
                      <div className="row">
                          <form role="form">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label>Masukan Nomor Rekening Anda</label>
                                  <input type="text" ref="rekening" className="form-control" placeholder="Masukan nomor rekening yang anda"/>
                              </div>
                              {/* /.form-group */}
                              <div className="form-group">
                                  <label>Masukan Kode PIN Anda</label>
                                  <input type="password" ref="kodepin" className="form-control" placeholder="Masukan kode pin rekening anda"/>
                              </div>
                              <div className="form-group">
                                  <label>Nominal Setoran</label>
                                  <input type="text" ref="nominalsetor" className="form-control" placeholder="Masukan nominal yang ingin anda setor"/>
                              </div>
                              {/* /.form-group */}
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                              <label>Saldo Saat ini</label>
                              <input type="text" className="form-control" disabled value={this.state.nominalAwal}/>
                              </div>
                              {/* /.form-group */}
                              <div className="form-group">
                                  <label>Status</label>
                                  <div className="alert alert-success alert-dismissible">
                                      <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                      <h4><i className="icon fa fa-check"></i> Setor tunai berhasil!</h4>
                                      Transaksi telah berhasil dilakukan.
                                  </div>
                              </div>
                              {/* /.form-group */}
                              <div className="form-group">
                                  <button type="button" onClick={() => this.tambahNominal(this.refs)} className="btn btn-danger btn-flat btn-md "><i className="fa fa-paper-plane"></i> Transfer</button>
                              </div>
                          </div>
                          {/* /.col */}
                          </form>
                      </div>
                      {/* /.row */}
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">*
                      Hati hati terhadap penipuan, pihak bank tidak akan pernah meminta pin dari nasabah atau imbalan dalam bentuk apapun
                  </div>
              </div>
            </section>
        </div>        
      </div>
    )
  }
}
export default SetorTunai;