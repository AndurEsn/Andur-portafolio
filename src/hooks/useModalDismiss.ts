import { useCallback, useEffect, useRef } from 'react';

const COMPACT_MODAL = '(max-width: 639px)';

function isCompactModal() {
  return window.matchMedia(COMPACT_MODAL).matches;
}

export default function useModalDismiss(isOpen: boolean, onClose: () => void) {
  const onCloseRef = useRef(onClose);
  const pushedRef = useRef(false);
  onCloseRef.current = onClose;

  const requestClose = useCallback(() => {
    if (pushedRef.current) {
      window.history.back();
      return;
    }
    onCloseRef.current();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    if (isCompactModal() && !pushedRef.current) {
      window.history.pushState({ andurModal: true }, '');
      pushedRef.current = true;
    }

    const onPopState = () => {
      if (!pushedRef.current) return;
      pushedRef.current = false;
      onCloseRef.current();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      requestClose();
    };

    window.addEventListener('popstate', onPopState);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, requestClose]);

  return requestClose;
}
