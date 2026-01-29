import { Suspense, lazy } from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Loader from './components/Loader';
import { ThemeProvider } from './contexts/ThemeContext';

// Lazy load only the Layout component
const Layout = lazy(() => import('./components/Layout/Layout'));

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;