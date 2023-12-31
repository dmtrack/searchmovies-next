import { useRef, useEffect } from 'react';

const useAutoFocus = () => {
    const inputRef: React.Ref<any> = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return inputRef;
};

export default useAutoFocus;
