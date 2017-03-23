import React from 'react';
import '../styles/index.scss';
import Grid from './snake/Grid';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Snake!</h1>
				<p>(work in progress)</p>
				<Grid></Grid>
      </div>
    )
  }
}
