import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import { Grid } from 'react-flexbox-grid/lib/index';

class App extends Component {

  render() {
    return (
      <div>
		<Grid>
			<nav>
				<ul>
					<li><Link to='/'>Users</Link></li>
				</ul>
			</nav>
			{this.props.children}
			</Grid>
		</div>
      );
  }
}

export default App;
