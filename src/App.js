import React from 'react'
import {Button} from 'react-bootstrap';
import './App.css';
import tof from "./assets/pic.jpg"


class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			interval: null,
			timer: 0
		};
	}

	componentDidMount(){
		this.setState ({
			interval: setInterval( () =>{
				this.setState({timer:this.state.timer + 1});
			},1000)
		})
	}

	componentWillUnmount(){
		clearInterval(this.state.interval)
	}

    state={
      isVisible:false
    }

    person=[
      'Mohamed lahmer',
      'Graduated in 2017',
      'Water-ressources engineer'
    ]
  toggleVisibility = () => {
    this.setState({
      isVisible : !this.state.isVisible
    })
  }

render(){
  return (
    <div className='page'>
			<div className="mb-2">
			<h2 className='timer'>{this.state.timer}</h2>	
      <Button variant="primary" size="sm" onClick={this.toggleVisibility}>{this.state.isVisible ? "Hide profile" : "Show profile" }
			</Button>{' '}
			</div>
      {this.state.isVisible ? 
    (
    <div>
      <ul className='list'>
       {this.person.map((info,i)=> (
         <li key={i}>{info}</li>
         ))}
      </ul>   
      <img className='img' src={tof} alt='img' width='400px'></img>
			
    </div>
		
    ): (<h4>Click on the button to see the profile</h4>)}
    </div>
  );
}
}
export default App;
