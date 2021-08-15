import { useEffect } from 'react'

export const ImportScript = resourceUrl => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = resourceUrl;
        script.async = true;
        if (window.jQuery) {
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            }
        }
    }, [resourceUrl]);
}