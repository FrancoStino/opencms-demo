import React from 'react';
import Image from './image';

const Paragraph = ( {
						demo,
						content
					} ) => {
	if ( !content ) {
		return null;
	}

	const {
			  Caption,
			  Image: imageContent,
			  Text,
			  Title
		  } = content;

	return (
		// Using a fragment to avoid adding extra divs that can interfere with prose styling
		<>
			{ Caption && (
				<h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 my-6 flex items-center gap-3">
					<div className="w-2 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>
					<span className="italic">{ Caption }</span>
				</h4>
			) }
			{ imageContent && (
				<div className="my-10">
					<div className="relative group">
						<div
							className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
						<Image
							demo={ demo }
							content={ { Image: imageContent } }
							alt={ Title }
							className="relative rounded-2xl shadow-2xl w-full transform group-hover:scale-[1.02] transition-transform duration-300"
						/>
					</div>
				</div>
			) }
			{ Text && (
				<div
					className="prose-content text-gray-700 dark:text-gray-300 leading-relaxed"
					dangerouslySetInnerHTML={ { __html: Text } }
				/>
			) }
		</>
	);
};

export default Paragraph;
