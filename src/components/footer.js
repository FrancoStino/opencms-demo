import React from 'react';

const DemoFooter = () => {
	return (
		<footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
			<div className="text-center py-6">
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
					<a
						href="https://documentation.opencms.org/opencms-documentation/interfaces/headless-json-api/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
					>
						Documentazione
					</a>
					<span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
					<a
						href="https://github.com/alkacon/mercury-json"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
					>
						GitHub
					</a>
					<span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
					<a
						href="https://www.opencms.org/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
					>
						OpenCms
					</a>
				</div>
				<p className="text-xs text-gray-500 dark:text-gray-500">
					© 2024 OpenCms Demo
				</p>
			</div>
		</footer>
	);
};

export default DemoFooter;
