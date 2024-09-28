// app/page.js
import Image from 'next/image';
import Header from './components/header/page';
import Second from './components/header/page';
import Third from './components/third/page';
import Fourth from './components/Fourth/page';
import Mid from './components/mid/page';
import FAQ from './components/FAQ/page';
import Contact from './components/contact/contact';
import About from './components/about/page';
import Footer from './components/footer/footer';
export default function Home() {
  return (
   <>
  <Second></Second>
  <Mid></Mid>
  <Third></Third>
  <About></About>
  <FAQ></FAQ>
  <Fourth></Fourth>
  <Contact></Contact>
  <Footer></Footer>
   </>
  );
}
