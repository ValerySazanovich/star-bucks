import Navbar    from './components/layout/Navbar/Navbar';
import Footer    from './components/layout/Footer/Footer';
import Hero      from './components/sections/Hero/Hero';
import Features  from './components/sections/Features/Features';
import About     from './components/sections/About/About';
import Products  from './components/sections/Products/Products';
import Events    from './components/sections/Events/Events';
import Contacts  from './components/sections/Contacts/Contacts';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Products />
        <Events />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
