import React from 'react';
import Demo1ContentSelect from './Demo1ContentSelect';
import Demo1LocaleSelect from './Demo1LocaleSelect';
import Demo1ContentList from './Demo1ContentList';

const Demo1List = ({ demo }) => (
  <div className="space-y-6">
    {/* Controls Section */}
    <section className="glass-card">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Demo1ContentSelect demo={demo} />
        <Demo1LocaleSelect demo={demo} />
      </div>
    </section>
    
    {/* Content Section */}
    <section>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Contenuti
      </h2>
      <Demo1ContentList demo={demo} contentList={demo.result} />
    </section>
  </div>
);

export default Demo1List;
