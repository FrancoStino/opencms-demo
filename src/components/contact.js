import React from 'react';
import Image from './image';

const Contact = ({ demo, content, mode, animationDelay = 0 }) => {

  const localeContent = content.localeContent ? content.localeContent : content;

  const handleClickDetail = (e) => {
    e.preventDefault();
    demo.loadContentDetail(content.path);
  };

  const title = localeContent.Kind === 'person' 
    ? `${localeContent.Name?.FirstName} ${localeContent.Name?.LastName}` 
    : localeContent.Organization;

  if (mode === 'preview') {
    return (
      <article 
        onClick={handleClickDetail}
        className="glass-card overflow-hidden cursor-pointer"
      >
        <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image 
            demo={demo} 
            content={localeContent.Image} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
            {title}
          </h3>
          
          {localeContent.Position && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {localeContent.Position}
            </p>
          )}

          {localeContent.Organization && localeContent.Kind === 'person' && (
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {localeContent.Organization}
            </p>
          )}
        </div>
      </article>
    );
  }

  // Default (detail) view
  const contactDetails = localeContent.Contact;
  const address = contactDetails?.AddressChoice?.Address;

  return (
    <section className="max-w-3xl mx-auto glass-card">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-1">
          <Image 
            demo={demo} 
            content={localeContent.Image} 
            alt={title} 
            className="w-full rounded-lg"
          />
        </div>
        
        <div className="md:col-span-2">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h1>
          
          {localeContent.Position && (
            <p className="text-base text-gray-600 dark:text-gray-400 mb-1">
              {localeContent.Position}
            </p>
          )}
          
          {localeContent.Organization && localeContent.Kind === 'person' && (
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {localeContent.Organization}
            </p>
          )}
        </div>
      </div>
      
      <div className="space-y-4 text-sm">
        {address && (
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Indirizzo</h3>
            <p className="text-gray-600 dark:text-gray-400">{address.StreetAddress}</p>
            <p className="text-gray-600 dark:text-gray-400">{address.PostalCode} {address.Locality}</p>
          </div>
        )}
        
        {contactDetails?.Email?.Email && (
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Email</h3>
            <a 
              href={`mailto:${contactDetails.Email.Email}`} 
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              {contactDetails.Email.Email}
            </a>
          </div>
        )}
        
        {contactDetails?.Phone && (
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Telefono</h3>
            <p className="text-gray-600 dark:text-gray-400">{contactDetails.Phone}</p>
          </div>
        )}
        
        {contactDetails?.Mobile && (
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Cellulare</h3>
            <p className="text-gray-600 dark:text-gray-400">{contactDetails.Mobile}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
