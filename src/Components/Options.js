import React, { Component } from 'react';

class Options extends Component {
  render() {
    return (<div className="App container-fluid">
              <div className="row">
                <div className="col-sm-12" id="App-options">
                  <div className="card">
                    <img id="App-img-options" className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                      <h1 className="card-title">Nombre</h1>
                      <p className="card-text">Caracteristicas</p>
                      <p className="card-text">Raza</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
    }

export default Options;
