import React from 'react';
import Image from './image';
import Paragraph from './paragraph';

const Article = ( {
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
		const image    = localeContent.Paragraph?.[ 0 ]?.Image || null;
		const imageAlt = localeContent.Title;

		return (
			<article
				onClick={ handleClickDetail }
				className="glass-card overflow-hidden cursor-pointer"
			>
				<div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
					<Image
						demo={ demo }
						content={ image }
						alt={ imageAlt }
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="p-4">
					<h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
						{ localeContent.Title }
					</h3>

					{ localeContent.Intro && (
						<p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
							{ localeContent.Intro }
						</p>
					) }

					{ localeContent.Author && (
						<p className="text-xs text-gray-500 dark:text-gray-500">
							{ localeContent.Author }
						</p>
					) }
				</div>
			</article>
		);
	}

	// Default (detail) view
	return (
		<section className="max-w-3xl mx-auto glass-card">
			<div className="mb-6">
				<h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
					{ localeContent.Title }
				</h1>

				{ localeContent.Author && (
					<p className="text-sm text-gray-600 dark:text-gray-400">
						di { localeContent.Author }
					</p>
				) }
			</div>

			<div className="prose prose-sm dark:prose-invert max-w-none">
				{ localeContent.Intro && (
					<p className="text-base text-gray-700 dark:text-gray-300 mb-6">
						{ localeContent.Intro }
					</p>
				) }

				<div className="space-y-6">
					{ paragraphs }
				</div>
			</div>
		</section>
	);
};

export default Article;
