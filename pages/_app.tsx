import '../styles/reset.scss';
import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import RootLayout from './layout';
import { ReduxProvider } from '../redux/provider';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {' '}
            <ReduxProvider>
                {/* <RootLayout> */}
                <Component {...pageProps} />
                {/* </RootLayout> */}
            </ReduxProvider>
        </>
    );
}
