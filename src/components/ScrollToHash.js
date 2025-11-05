import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { hash, state } = useLocation();

  useEffect(() => {
    const idFromState = state && state.scrollTo;
    const id = idFromState || (hash ? hash.replace('#', '') : null);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [hash, state]);

  return null;
}


