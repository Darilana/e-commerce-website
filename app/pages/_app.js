import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
    subsets: ['latin'],
    variable: '--font-noto-sans',
});

export default function MyApp({ Component, pageProps }) {
    return (
        <main className={`${notoSans.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
}
