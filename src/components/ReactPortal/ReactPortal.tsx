import { ReactNode, useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

// Define ReactPortal props.
type ReactPortalProps = {
  children: ReactNode;
  containerId?: string;
};

/**
 * Componente React Portal
 * Utilizado para criar e desmonstar portais
 */
export const ReactPortal = ({ children, containerId = 'react-portal' }: ReactPortalProps) => {
  const [portalContainer, setPortalContainer] = useState<Element | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(containerId);

    let created = false;

    if (!element) {
      created = true;
      const wrapper = document.createElement('div');
      wrapper.setAttribute('id', containerId);
      document.body.appendChild(wrapper);
      element = wrapper;
    }

    setPortalContainer(element);

    // Cleanup useEffect.
    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [containerId]);

  // Return null na primeira renderização
  if (portalContainer === null) return null;

  return ReactDOM.createPortal(children, portalContainer);
};
