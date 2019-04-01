import App, { Container } from 'next/app';
import React from 'react';
import Router from 'next/router';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import AWSAppSyncClient from 'aws-appsync';
import createStore from '../redux/store';
import { Provider } from 'react-redux';
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';
import { currentEnv } from '../config';

const client = new AWSAppSyncClient(currentEnv.app_sync);

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps({ ctx });
        }
    
        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <ApolloProvider client={client}>
                    <Rehydrated>
                        <Provider store={store}>
                            <Component {...pageProps} />
                        </Provider>
                    </Rehydrated>
                </ApolloProvider>
            </Container>
        )
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));