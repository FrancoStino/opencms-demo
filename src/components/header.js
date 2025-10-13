import React from 'react';

const DemoHeader = ({ title }) => {
  return (
    <header className="border-b border-gray-800">
      <div className="py-6">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-100 mb-1">
              {title}
            </h1>
            <p className="text-sm text-gray-400">
              Demo single page application con{' '}
              <a 
                href="https://www.opencms.org/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:underline"
              >
                OpenCms
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;
