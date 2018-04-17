import React, { Component } from 'react';

class Matches extends React.Component {
    render(){
        return(
        <div>
            <div className='row'>
                <div className='col-sm col-md'>
                    <h1>MATCHES</h1>
                </div>
            </div>
            <div>
                <div className='row'>
                    <div className='col-sm col-md'>
                        <img src='https://dummyimage.com/600x400/000/fff' alt='mascota' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm col-md'>
                    <button type="button" class="btn btn-outline-light">
                        <span className="fa fa-envelope fa-lg white-text mr-md-5 mr-3 fa-2x btn"></span>
                    </button>
                    <button type="button" class="btn btn-outline-light">
                        <span className="fa fa-heart fa-lg white-text mr-md-5 mr-3 fa-2x btn"></span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Matches