import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {

  render() {
    return (
      <div>
				<Helmet
      title='MyApp'
      titleTemplate='MyApp - %s'
      meta={[
        {
          'char-set': 'utf-8'
        },
        {
          'name': 'description',
          'content': 'My super dooper dope app'
        }
      ]}
      />
				<Grid>
				<Row>
				<nav>
					<ul>
						<li><Link to='/'>Users</Link></li>
					</ul>
				</nav>
				</Row>
				<Row>
				{this.props.children}
				</Row>
				</Grid>
			</div>
      );
  }
}

export default App;
