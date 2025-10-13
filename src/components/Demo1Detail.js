import React from 'react';
import Article from './article';
import Contact from './contact';
import FAQ from './faq';

const TYPE_ARTICLE = 'article-m';
const TYPE_CONTACT = 'contact-m';
const TYPE_FAQ = 'faq-m';

const Demo1Detail = ({ demo }) => {
  const handleClickList = (event) => {
    event.preventDefault();
    demo.loadContentList(demo.type);
  };

  const renderContent = () => {
    switch (demo.type) {
      case TYPE_ARTICLE:
        return <Article demo={demo} content={demo.result} />;
      case TYPE_CONTACT:
        return <Contact demo={demo} content={demo.result} />;
      case TYPE_FAQ:
        return <FAQ demo={demo} content={demo.result} />;
      default:
        return (
          <div className="text-center py-12">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tipo di contenuto non supportato
            </p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Back Navigation */}
      <button
        onClick={handleClickList}
        className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
      >
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span>Torna alla lista</span>
      </button>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default Demo1Detail;
