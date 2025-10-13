import React from 'react';

const typeList = [ 'article-m', 'contact-m', 'faq-m' ];
const labels   = {
	'article-m': 'Articoli',
	'contact-m': 'Contatti',
	'faq-m':     'FAQ'
};

const icons = {
	'article-m': (
					 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
							   d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
					 </svg>
				 ),
	'contact-m': (
					 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
							   d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
					 </svg>
				 ),
	'faq-m':     (
					 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
							   d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
					 </svg>
				 )
};

const colors = {
	'article-m': 'from-primary-500 to-primary-600',
	'contact-m': 'from-secondary-500 to-secondary-600',
	'faq-m':     'from-accent-500 to-accent-600'
};

const Demo1ContentSelect = ( { demo } ) => {
	const handleChange = ( event ) => {
		demo.loadContentList( event.target.value );
	};

	return (
		<div className="space-y-3">
			<h4 className="text-sm font-medium text-gray-100">Tipo di Contenuto</h4>

			<fieldset className="space-y-2">
				<legend className="sr-only">Tipo di contenuto</legend>
				{ typeList.map( ( type ) => (
					<div key={ type }>
						<input
							type="radio"
							name="content"
							value={ type }
							id={ `content-type_${ type }` }
							className="sr-only peer"
							checked={ demo.type === type }
							onChange={ handleChange }
						/>
						<label
							htmlFor={ `content-type_${ type }` }
							className="block cursor-pointer px-3 py-2 border border-gray-700 rounded peer-checked:border-primary-600 peer-checked:bg-primary-900/20"
						>
              <span className="text-sm text-gray-100">
                { labels[ type ] }
              </span>
						</label>
					</div>
				) ) }
			</fieldset>
		</div>
	);
};

export default Demo1ContentSelect;
