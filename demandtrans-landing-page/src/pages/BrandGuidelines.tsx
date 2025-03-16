import React from 'react';
import Logo from '../components/Logo';

const BrandGuidelines = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-enterprise-primary">Brand Guidelines</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-enterprise-primary">Logo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <Logo size="lg" variant="default" />
              <p className="mt-4 text-gray-600">Primary Logo</p>
            </div>
            <div className="p-8 bg-enterprise-primary rounded-lg shadow-md">
              <Logo size="lg" variant="light" />
              <p className="mt-4 text-white">Light Logo (for dark backgrounds)</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-md">
              <Logo size="lg" variant="dark" />
              <p className="mt-4 text-gray-600">Dark Logo (for light backgrounds)</p>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-enterprise-primary">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4">
              <div className="h-24 bg-enterprise-primary rounded-lg mb-2"></div>
              <p className="font-semibold">Primary Blue</p>
              <p className="text-sm text-gray-600">#0056a6</p>
            </div>
            <div className="p-4">
              <div className="h-24 bg-enterprise-accent rounded-lg mb-2"></div>
              <p className="font-semibold">Accent Blue</p>
              <p className="text-sm text-gray-600">#00a0df</p>
            </div>
            <div className="p-4">
              <div className="h-24 bg-white border border-gray-200 rounded-lg mb-2"></div>
              <p className="font-semibold">White</p>
              <p className="text-sm text-gray-600">#ffffff</p>
            </div>
            <div className="p-4">
              <div className="h-24 bg-gray-800 rounded-lg mb-2"></div>
              <p className="font-semibold">Dark Gray</p>
              <p className="text-sm text-gray-600">#333333</p>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-enterprise-primary">Typography</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-enterprise-primary">Montserrat</h3>
              <p className="font-montserrat text-4xl font-bold">Headings (Bold)</p>
              <p className="font-montserrat text-2xl font-semibold mt-2">Subheadings (Semibold)</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-enterprise-primary">Open Sans</h3>
              <p className="font-opensans text-lg">Body Text (Regular)</p>
              <p className="font-opensans text-lg font-semibold mt-2">Emphasized Text (Semibold)</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-enterprise-primary">Logo Usage Guidelines</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-enterprise-primary">Do's</h3>
            <ul className="list-disc pl-5 mb-8 space-y-2">
              <li>Maintain the logo's proportions when resizing</li>
              <li>Use the light variant on dark backgrounds</li>
              <li>Ensure adequate spacing around the logo</li>
              <li>Use the provided color variants</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4 text-enterprise-primary">Don'ts</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Don't stretch or distort the logo</li>
              <li>Don't change the logo colors outside of the approved variants</li>
              <li>Don't place the logo on busy backgrounds without proper contrast</li>
              <li>Don't add effects like shadows or glows to the logo</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandGuidelines;