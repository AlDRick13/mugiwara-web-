import { Inter } from '@next/font/google';
import Header from '../components/general/Header';
import Footer from '../components/general/Footer';
import Home from './home';

const inter = Inter({ subsets: ['latin'] });

export default function Index() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
