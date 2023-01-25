import { Inter } from '@next/font/google';
import Header from '../components/general/Header';
import Footer from '../components/general/Footer';
import Home from './home';
import Login from './login';

const inter = Inter({ subsets: ['latin'] });

export default function Index() {
  return (
    <>
      
      <Login />
      
    </>
  );
}
