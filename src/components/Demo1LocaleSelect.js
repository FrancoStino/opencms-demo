import React from 'react';

const localeList = [ 'en', 'de' ];

const localeInfo = {
	'en': {
		name:        'English',
		flag:        '🇺🇸',
		description: 'Contenuto in inglese'
	},
	'de': {
		name:        'Deutsch',
		flag:        '🇩🇪',
		description: 'Contenuto in tedesco'
	}
};

const Demo1LocaleSelect = ( { demo } ) => {
	const handleChange = ( event ) => {
		demo.loadContentList( demo.type, event.target.value );
	};

	return (
		<div className="space-y-3">
			<h4 className="text-sm font-medium text-gray-100">Lingua</h4>

			<fieldset className="space-y-2">
				<legend className="sr-only">Lingua</legend>
				{ localeList.map( ( locale ) => (
					<div key={ locale }>
						<input
							type="radio"
							name="locale"
							value={ locale }
							id={ `locale_${ locale }` }
							className="sr-only peer"
							checked={ demo.locale === locale }
							onChange={ handleChange }
						/>
						<label
							htmlFor={ `locale_${ locale }` }
							className="block cursor-pointer px-3 py-2 border border-gray-700 rounded peer-checked:border-primary-600 peer-checked:bg-primary-900/20"
						>
              <span className="text-sm text-gray-100">
                { localeInfo[ locale ].flag } { localeInfo[ locale ].name }
              </span>
						</label>
					</div>
				) ) }
			</fieldset>
		</div>
	);
};

export default Demo1LocaleSelect;
