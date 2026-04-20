import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash in the URL, scroll to the top of the page.
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash, let the browser render the new page then scroll to the element.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // 100ms delay to ensure the page has mounted
    }
  }, [pathname, hash]);

  return null;
}
