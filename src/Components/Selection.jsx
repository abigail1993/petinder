import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Options from './Options'

class Selection extends Component {
	constructor(props){
		super();
	}
	render() {
		console.log(this.props.dogs.pet)
		console.log(this.props.cats.pet)

		return (
			<div className='container'>
				<div id='selection'>
					<div className='row option-container'>
						<div className='col-6 offset-3'>
							<Link to='/dogsOptions'><img className='img-responsive img-selection' src='https://s-media-cache-ak0.pinimg.com/originals/cc/51/12/cc5112fe33dfe952e66692f816f2ea8e.jpg'></img></Link>
						</div>
					</div>
					<div className='row option-container'>
						<div className='col-6 offset-3'>
							<Link to='/catsOptions'><img className='img-responsive img-selection' src='https://i.pinimg.com/236x/ca/03/3e/ca033e465a311fcbe9770eec6b7bf477.jpg'></img></Link>
						</div>
					</div>
				</div>

				<Switch>
          <Route exact path='/dogsOptions' render = {() => {
            return <Options dogsOptions={this.props.dogs.pet} />
          }} />
          <Route exact path='/catsOptions' render = {() => {
            return <Options catsOptions={this.props.cats.pet}/>
          }} />
        </Switch>
			</div>
			)
	}

}

export default Selection;
