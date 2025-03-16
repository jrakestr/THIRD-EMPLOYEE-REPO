import React from 'react';
import Logo from './Logo';

interface EmailTemplateProps {
  title: string;
  content: React.ReactNode;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ title, content }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-enterprise-primary p-6">
        <div className="flex justify-between items-center">
          <Logo variant="light" size="md" />
          <span className="text-white text-sm">SMART • MOBILITY • SOLUTIONS</span>
        </div>
      </div>
      
      <div className="p-8">
        <h1 className="text-2xl font-bold text-enterprise-primary mb-6">{title}</h1>
        <div className="text-gray-700">
          {content}
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          <p className="mb-2">DemandTrans Solutions, Inc.</p>
          <p className="mb-2">211 W. Wacker Drive, Suite 300, Chicago IL 60606</p>
          <p>© {new Date().getFullYear()} DemandTrans. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;