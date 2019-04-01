import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';
import { testRequestActions } from '../redux/actions/testActions';

import Layout from '../components/MyLayout';
import Link from 'next/link';

// export default function Index(){return <div>Hello</div>}

class Index extends Component {

  static async getInitialProps(props) {
    const { ctx: { req, store, isServer } } = props;
     store.dispatch(testRequestActions());
    return { isServer };
  }

  render() {  
    console.log(`this.props: `,this.props)
    // const {data} = this.props && this.props.myTestResult
    return <Layout>
        <h1>Batman TV Shows</h1> 
        <ul>
          {/* {data.map(item => (
            <li key={item.show.id}>
              <Link as={`/p/${item.show.id}`} href={`/post?id=${item.show.id}`}>
                <a>{item.show.name}</a>
              </Link>
            </li>
          ))} */}
        </ul>
      </Layout>
  }
}

const mapStateToProps = state => {
  console.log(`state: `,state)
  return {
      myTestResult: state.testReducer
  }
}

const mapDispatchToProps = dispatch => ({
  testResult: () => dispatch(testRequestActions())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));