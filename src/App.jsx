import Navbar    from './components/layout/Navbar/Navbar';
import Hero      from './components/sections/Hero/Hero';
import Features  from './components/sections/Features/Features';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}
