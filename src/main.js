import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

export class MainInfo extends React.Component {
  constructor(props) {
    super(props);
    document.title = "Philip Basnage";
  }
  render() {
    return (
    	<div>
    		<div class="main-header">Philip Basnage</div>
      		<div class="main-summary">Welcome to my website! I'm a multi-talented professional with a wide range of interests
      		and skills. This website is hand-coded by myself using ReactJS and Typescript. If you're interested in my resume or
      		hiring, please click 'Professional'. Otherwise feel free to check out my side projects, which I'm equally
      		passionate about.</div>
      		<div class="column-wrapper">
      			<div class="column-option twitch">Content Creator</div>
      			<div class="column-option pro">Professional</div>
      			<div class="column-option music">Musician</div>
      		</div>
    	</div>
    );
  }
}

ReactDOM.render(<MainInfo />, document.getElementById("root"));
