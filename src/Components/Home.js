import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (<div className="App container-fluid">
              <div className="row">
                <div className="col-sm-12" id="App-options">
                   <img id="App-img-options" className="card-img-top" src="..." alt="Card image cap"/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8">
                   <a>LOG IN</a> <a>SIGN UP</a>
                </div>
                
              </div>
              <div>
                <div class="form-group col-md-6 offset-3">
                   <label for="inputEmail4">Email</label>
                   <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div class="form-group col-md-6 offset-3">
                   <label for="inputPassword4">Password</label>
                   <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
                
                <button type="submit" class="btn btn-primary">Sign in</button>
                </div>

                <div> 
                    <h3>login con firebase</h3>
                </div>
           </div>
     );
  }
}

export default Home;
