import React from 'react';
import Paragraph from './paragraph';

const FAQ = ( {
				  demo,
				  content,
				  mode,
				  animationDelay = 0
			  } ) => {

	const localeContent = content.localeContent ? content.localeContent : content;

	const handleClickDetail = ( e ) => {
		e.preventDefault();
		demo.loadContentDetail( content.path );
	};

	const paragraphs = localeContent.Paragraph?.map( ( paragraph, idx ) => (
		<Paragraph demo={ demo } content={ paragraph } key={ idx }/>
	) );

	if ( mode === 'preview' ) {
		return (
			<article
				onClick={ handleClickDetail }
				className="glass-card cursor-pointer p-4"
			>
				<h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
					{ localeContent.Question }
				</h3>

				{ localeContent.Paragraph?.[ 0 ]?.Text && (
					<div
						className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3"
						dangerouslySetInnerHTML={ {
							__html: localeContent.Paragraph[ 0 ].Text.substring( 0, 150 ) + '...'
						} }
					/>
				) }
			</article>
		);
	}

	// Default (detail) view
	return (
		<section className="max-w-3xl mx-auto glass-card">
			<div className="mb-6">
				<h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
					{ localeContent.Question }
				</h1>
			</div>

			<div className="prose prose-sm dark:prose-invert max-w-none">
				<div className="space-y-6">
					{ paragraphs }
				</div>
			</div>
		</section>
	);
};

export default FAQ;
