import Navbar    from './components/layout/Navbar/Navbar';
import Hero      from './components/sections/Hero/Hero';
import Features  from './components/sections/Features/Features';
import About     from './components/sections/About/About';
import Products  from './components/sections/Products/Products';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Products />
      </main>
    </>
  );
}
