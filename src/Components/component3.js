import React, { Component } from 'react';


class Matches extends React.Component {
    render(){
        return(
        <div className="container-fluid">
            <div class='row'>
                <div className='col-sm col- col-md '>
                    <h1>MATCHES</h1>
                </div> 
                <div className="col-sm-12" id="App-options">
                    <div className="card">
                        <img id="App-img-options" className="card-img-top" src="..." alt="Card image cap"/>
                    </div>
                </div>
                </div>  
                    <div className='col-sm col- col-md'>
                        <button type="button" class="btn btn-light">
                            <span className="fa fa-envelope fa-lg "></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span className="fa fa-heart fa-lg"></span>
                        </button>
                    </div>
            </div>
        )
    }
}

export default Matches