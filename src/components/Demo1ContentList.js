import React from 'react';
import Article from './article';
import Contact from './contact';
import FAQ from './faq';

const Demo1ContentList = ( {
							   demo,
							   contentList
						   } ) => {
	const items = Object.keys( contentList ).map( ( file, index ) => {
		const item = contentList[ file ];
		const key  = file + demo.locale;
		if ( !item.isXmlContent ) {
			return null;
		}

		// Add staggered animation delay
		const animationDelay = index * 0.1;

		switch ( item.attributes.type ) {
			case 'm-article':
				return <Article demo={ demo } content={ item } key={ key } mode="preview"
								animationDelay={ animationDelay }/>;
			case 'm-contact':
				return <Contact demo={ demo } content={ item } key={ key } mode="preview"
								animationDelay={ animationDelay }/>;
			case 'm-faq':
				return <FAQ demo={ demo } content={ item } key={ key } mode="preview"
							animationDelay={ animationDelay }/>;
			default:
				return (
					<div key={ key } className="glass-card">
						<p className="text-sm text-gray-600 dark:text-gray-400">Tipo non supportato</p>
					</div>
				);
		}
	} ).filter( Boolean ); // Filter out null items

	if ( items.length === 0 ) {
		return (
			<div className="text-center py-12">
				<p className="text-sm text-gray-600 dark:text-gray-400">
					Nessun contenuto trovato
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
			{ items }
		</div>
	);
};

export default Demo1ContentList;
