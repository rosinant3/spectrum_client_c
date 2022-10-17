import { useCallback } from 'react';

export const useLinkDownload = (url:any) => {

    const download = useCallback(() => {
        const a = document.createElement('a')
        a.href = url
        a.download = url.split('/').pop()
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }, [url]);

    return { download };
};