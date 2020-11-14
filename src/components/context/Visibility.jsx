import { createContext, useContext, useState, useEffect } from 'react';
import useWindowSize from '../../util/useWindowSize';

const VisibilityContext = createContext();

const VisibilityUpdateContext = createContext()

const VisibilityResetContext = createContext()

export function useVisibility(){
    return useContext(VisibilityContext);
}

export function useVisibilityUpdate(){
    return useContext(VisibilityUpdateContext);
}

export function useVisibilityReset(){
    return useContext(VisibilityResetContext);
}

export function VisibilityProvider({children}){
    const [visible, setVisible] = useState(true);
    const window = useWindowSize();

    useEffect(() => {
        if(window.width >= 757){
            resetVisible()
        }
        
    }, [window.width])

    function toggleVisible(){
        setVisible(pre => !pre);
    }

    function resetVisible(){
        setVisible(true);
    }

    return (
        <VisibilityContext.Provider value={visible} data-test='Visibility-provider-visible'>
            <VisibilityUpdateContext.Provider value={toggleVisible} data-test='Visibility-provider-setVisible'>
                <VisibilityResetContext.Provider value={resetVisible} data-test='Visibility-provider-resetVisible'>
                    {children}
                </VisibilityResetContext.Provider>
            </VisibilityUpdateContext.Provider>
        </VisibilityContext.Provider>
    );
}