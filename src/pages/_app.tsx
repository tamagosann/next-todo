import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { AnyAction, EmptyObject, Store } from "redux";
import Layout from '../components/layout';
import createStore from '../redux/store/store'

import '../styles/reset.css'

export const store = createStore();

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Todo List</title>
            {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
            {/* <link rel="manifest" href="/manifest.json" /> */}
            </Head>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </>
    )
}

export default App