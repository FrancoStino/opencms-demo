import React, { useState, useEffect, useCallback } from 'react';
import DemoException from '../components/exception';
import DemoFooter from '../components/footer';
import DemoHeader from '../components/header';
import Demo1List from '../components/Demo1List';
import Demo1Detail from '../components/Demo1Detail';
import LoadingSpinner from '../components/LoadingSpinner';

const TYPE_ARTICLE = 'article-m';
const PARAMS = '?content&wrapper';

export default function Home() {
  // State for dynamic server configuration
  const [server, setServer] = useState(null);
  const [serverImage, setServerImage] = useState(null);

  // Application state
  const [available, setAvailable] = useState(null);
  const [type, setType] = useState(TYPE_ARTICLE);
  const [content, setContent] = useState(null);
  const [result, setResult] = useState({});
  const [locale, setLocale] = useState('en');

  // API endpoints, derived from state
  const API_ENDPOINT = server ? `${server}/json` : null;
  const CONTENT_FOLDER = API_ENDPOINT ? `${API_ENDPOINT}/sites/default/mercury-demo/.content/` : null;

  // Effect to set server configuration on component mount (client-side only)
  useEffect(() => {
    const contextPath = document.getElementById('root')?.dataset.contextPath;
    const effectiveServer = (contextPath && contextPath !== '${pageContext.request.contextPath}')
      ? contextPath
      : process.env.NEXT_PUBLIC_OPENCMS_SERVER;

    setServer(effectiveServer);
    setServerImage(process.env.NEXT_PUBLIC_OPENCMS_SERVER_IMAGE);
  }, []);

  const loadContentList = useCallback((newType, newLocale) => {
    if (!CONTENT_FOLDER) return;
    const currentLocale = newLocale || locale;
    const currentType = newType || type;
    const url = `${CONTENT_FOLDER}${currentType}${PARAMS}&locale=${currentLocale}&fallbackLocale`;
    fetch(url)
      .then(response => response.json())
      .then((res) => {
        setType(currentType);
        setContent(null);
        setResult(res);
        setLocale(currentLocale);
      });
  }, [locale, type, CONTENT_FOLDER]);

  const loadContentDetail = useCallback((path, newLocale) => {
    if (!API_ENDPOINT) return;
    const currentLocale = newLocale || locale;
    const url = `${API_ENDPOINT}${path}${PARAMS}&locale=${currentLocale}&fallbackLocale`;
    fetch(url)
      .then(reponse => reponse.json())
      .then((res) => {
        setContent(path);
        setResult(res);
        setLocale(currentLocale);
      });
  }, [locale, API_ENDPOINT]);

  // Effect to check API availability and load initial data
  useEffect(() => {
    if (!API_ENDPOINT) {
      // Server URL not set yet, do nothing.
      return;
    }
    fetch(API_ENDPOINT)
      .then((res) => {
        if (res.ok) {
          setAvailable(true);
          loadContentList(type, locale);
        } else {
          setAvailable(false);
        }
      })
      .catch(() => {
        setAvailable(false);
      });
  }, [API_ENDPOINT, loadContentList, type, locale]);


  const demo = {
    SERVER: server,
    SERVER_IMAGE: serverImage,
    type,
    locale,
    result,
    loadContentList,
    loadContentDetail
  };

  let view;
  if (available === null) {
    view = (<LoadingSpinner />);
  } else if (available === false) {
    view = (<DemoException />);
  } else if (content) {
    view = (<Demo1Detail demo={demo} />);
  } else {
    view = (<Demo1List demo={demo} />);
  }

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DemoHeader title="Demo 1" />
        <div className="py-8">
          {view}
        </div>
        <DemoFooter />
      </main>
    </div>
  );
}
