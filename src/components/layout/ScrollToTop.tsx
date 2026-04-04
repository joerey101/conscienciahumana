import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Scroll a 0 de forma instantánea al cambiar la ruta
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Fallback con un pequeño delay para asegurar que el contenido renderizado no fuerce otro scroll
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
