import React from 'react';
import {render} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
 


const Home = () => {
    return (
    	<div>
    		<ReactCSSTransitionGroup transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}>
    		<h2>{'TutsPlus - Welcome to React Animations'}</h2>
    		</ReactCSSTransitionGroup>
    	</div>
        
    );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: [],
      name:''
    };
  }
  add(){
    var arr = this.state.data.slice();
    arr.push({'id':(new Date()).getTime(),'name':this.state.name})
    this.setState({data:arr})
  }
  handleChange(e){
    this.setState({name:e.target.value})
  }
  render() {
    return (
      <div>
        Enter Name <input onChange={this.handleChange} type="text" /> <input onClick={this.add} type="button" value="Add" />
        
        <ul>
        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={false} transitionEnterTimeout={3000} transitionEnter={true} transitionLeave={false}>
        {
          this.state.data.map(function(player) {
             return <li key={player.id}>{player.name}</li>
          })
        }
        </ReactCSSTransitionGroup>
        </ul>
        
      </div>
    )
  }
}
 
render(
    <App />,
    document.getElementById('app')
);
