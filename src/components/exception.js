import React from 'react';

const DemoException = () => {
	return (
		<div className="text-center py-16 animate-fade-in">
			{/* Warning icon */ }
			<div className="relative mb-8">
				<div
					className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl shadow-2xl mx-auto flex items-center justify-center animate-pulse-slow">
					<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
							  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
					</svg>
				</div>

				{/* Warning rings */ }
				<div
					className="absolute inset-0 rounded-3xl border-4 border-transparent border-t-yellow-400 animate-spin opacity-30"></div>
				<div
					className="absolute inset-2 rounded-2xl border-4 border-transparent border-t-orange-400 animate-spin opacity-20"
					style={ {
						animationDirection: 'reverse',
						animationDuration:  '3s'
					} }></div>
			</div>

			{/* Main content */ }
			<div className="max-w-4xl mx-auto space-y-8">
				<div className="text-center mb-8">
					<h2 className="text-4xl font-black mb-4">
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Quasi ci siamo!
            </span>
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300">
						Non vedi contenuti qui perché l'API JSON non è ancora stata attivata.
					</p>
				</div>

				{/* Notice card */ }
				<div
					className="glass-card bg-yellow-50/80 dark:bg-yellow-900/20 backdrop-blur-xl border-yellow-200/50 dark:border-yellow-800/50">
					<div className="flex items-start gap-4">
						<div
							className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
							<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
									  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
							</svg>
						</div>
						<div className="text-left">
							<h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2">
								Configurazione richiesta
							</h3>
							<p className="text-yellow-700 dark:text-yellow-300 leading-relaxed">
								Per utilizzare questa demo, devi prima attivare l'API JSON di OpenCms seguendo i
								passaggi qui sotto.
							</p>
						</div>
					</div>
				</div>

				{/* Setup instructions */ }
				<div className="glass-card bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl text-left">
					<div className="flex items-center gap-3 mb-6">
						<div
							className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
							<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
									  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
									  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
							</svg>
						</div>
						<h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
							Attiva l'API JSON seguendo questi passaggi:
						</h3>
					</div>

					<div className="space-y-6">
						{ [
							{
								step:        "1",
								title:       "Vai alla directory di Tomcat",
								description: "Naviga nella directory webapps di Tomcat dove si trovano i file di configurazione di OpenCms:",
								code:        "[TOMCAT_HOME]/webapps/[OPENCMS]/WEB-INF/config/"
							},
							{
								step:        "2",
								title:       "Apri il file di configurazione",
								description: "Apri il file opencms-system.xml con il tuo editor di testo preferito."
							},
							{
								step:        "3",
								title:       "Aggiungi il resource handler",
								description: "Aggiungi la classe org.opencms.xml.xml2json.CmsJsonResourceHandler alla fine della lista dei resource init handlers:",
								code:        `[...]
<resourceinit>
  [...]
  <resourceinithandler class="org.opencms.xml.xml2json.CmsJsonResourceHandler" />
</resourceinit>
[...]`
							},
							{
								step:        "4",
								title:       "Riavvia Tomcat",
								description: "Riavvia il server Tomcat per applicare le modifiche."
							}
						].map( ( item, index ) => (
							<div key={ index }
								 className="flex gap-4 p-4 bg-white/40 dark:bg-gray-800/40 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
								<div
									className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white">
									{ item.step }
								</div>
								<div className="flex-1">
									<h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{ item.title }</h4>
									<p className="text-gray-700 dark:text-gray-300 mb-3">{ item.description }</p>
									{ item.code && (
										<pre
											className="p-4 bg-gray-900 dark:bg-gray-950 text-green-400 rounded-lg text-sm overflow-x-auto border border-gray-700">
                      <code>{ item.code }</code>
                    </pre>
									) }
								</div>
							</div>
						) ) }
					</div>
				</div>

				{/* Action button */ }
				<button
					onClick={ () => window.location.reload() }
					className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
				>
					<svg className="w-5 h-5 transform group-hover:rotate-180 transition-transform duration-300"
						 fill="none"
						 stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
							  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
					</svg>
					<span>Controlla di nuovo</span>
				</button>
			</div>
		</div>
	);
};

export default DemoException;
