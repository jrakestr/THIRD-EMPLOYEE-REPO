import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { LoadingFallback } from './utils/LazyLoader';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Solutions = lazy(() => import('./pages/Solutions'));
const SolutionDetail = lazy(() => import('./pages/SolutionDetail'));
const Technology = lazy(() => import('./pages/Technology'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const SuccessStories = lazy(() => import('./pages/SuccessStories'));
const About = lazy(() => import('./pages/About'));
const BrandGuidelines = lazy(() => import('./pages/BrandGuidelines'));
const ROICalculator = lazy(() => import('./pages/ROICalculator'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        } />
        
        {/* Solutions Routes */}
        <Route path="solutions" element={
          <Suspense fallback={<LoadingFallback />}>
            <Solutions />
          </Suspense>
        } />
        <Route path="solutions/:solutionId" element={
          <Suspense fallback={<LoadingFallback />}>
            <SolutionDetail />
          </Suspense>
        } />
        
        {/* Products Routes */}
        <Route path="products" element={
          <Suspense fallback={<LoadingFallback />}>
            <Technology />
          </Suspense>
        } />
        <Route path="products/:productId" element={
          <Suspense fallback={<LoadingFallback />}>
            <ProductDetail />
          </Suspense>
        } />
        
        {/* Other Routes */}
        <Route path="success-stories" element={
          <Suspense fallback={<LoadingFallback />}>
            <SuccessStories />
          </Suspense>
        } />
        <Route path="about" element={
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        } />
        <Route path="brand" element={
          <Suspense fallback={<LoadingFallback />}>
            <BrandGuidelines />
          </Suspense>
        } />
        <Route path="roi-calculator" element={
          <Suspense fallback={<LoadingFallback />}>
            <ROICalculator />
          </Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default App;