import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Grid, Col, PageHeader} from 'react-bootstrap';

import {fetchRequest} from './actions/roadActions';
import Bucket from './components/bucket';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.fetchRequest ();
  }

  render () {
    if (this.props.buckets.isFetching) {
      return (
        <div className="App">
          <PageHeader>
             InnRoad
          </PageHeader>
          {/* <h1 className="App-title">InnRoad</h1> */}
          <div className="row">
            Loading...
          </div>
        </div>
      );
    }
    return (
      <div className="App">
          <PageHeader>
             InnRoad
          </PageHeader>
        <div className="main">
        <div className="row">
          {this.props.buckets.data.map (bucket => {
            return (
                <Col xs={3} md={3} sm={3} lg={3} key={bucket.BucketId}>
                <Bucket bucket={bucket}/>
                </Col>
            )
          })}
        </div>
        </div>  
      </div>
    );
  }
}

const mapStateToProps = ({buckets}) => ({buckets});

export default connect (mapStateToProps, {fetchRequest}) (App);
