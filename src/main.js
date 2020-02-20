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
      <div class="main-header">Philip Basnage</div>
    );
  }
}

ReactDOM.render(<MainInfo />, document.getElementById("root"));
