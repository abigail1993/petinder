import React, { Component } from 'react';

class Selection extends Component {
	constructor(props){
		super();
	}
	render() {
		console.log(this.props.pets)
		return (
			<div className='container'>
				<div id='selection'>
					<div className='row option-container'>
						<div className='col-6 offset-3'>
							<img className='img-responsive img-selection' src='https://s-media-cache-ak0.pinimg.com/originals/cc/51/12/cc5112fe33dfe952e66692f816f2ea8e.jpg'></img>
						</div>
					</div>
					<div className='row option-container'>
						<div className='col-6 offset-3'>
							<img className='img-responsive img-selection' src='https://i.pinimg.com/236x/ca/03/3e/ca033e465a311fcbe9770eec6b7bf477.jpg'></img>
						</div>
					</div>
				</div>
			</div>)
	}

}

export default Selection;
