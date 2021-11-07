import { createContext, useCallback, useState } from 'react';

import api from '../services/api';

export const InfosContext = createContext ({
    settings: {},
    slide: [],
    galleries: [{}],
})

export const InfosProviders = ({ children }) => {

    const token = '$2b$10$imE3ylmcaAHEfmX/VjTHiuCZ1V1WIH227Utj.eSwjWDinntWEfMeq';

    const [ infosState, setInfosState] = useState({
        settings: {
            enterpriseName: undefined,
            phone: undefined,
            address: undefined,
            email: undefined,
        },
        slide: [],
        galleries: [{
            name: undefined,
            photos: []
        }],
        socialMedias: [{}],
        theme: {
            primary: undefined,
            secondary: undefined,
        }
    });

    const getSettings= () => {
        
        setInfosState(
            (prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }));

            api.defaults.headers.token =  token;
            api.get(`settings`)
            .then(
                ({ data }) => {
                    setInfosState((prevState) => ({
                        ...prevState,
                        settings: {
                            enterpriseName: data.settings.enterpriseName,
                            phone: data.settings.phone,
                            address: data.settings.address,
                            email: data.settings.email,
                        },
                    }));
            })
    };

    const getSlide = () => {
        api.defaults.headers.token =  token;
        api.get(`slide`)
        .then(
            ({ data }) => {
                setInfosState((prevState) => ({
                    ...prevState,
                    repositories: data,
                }));
        });
    };

    const getGalleries = () => {
        api.defaults.headers.token =  token;
        api.get(`galleries`)
        .then(
            ({ data }) => {
                setInfosState((prevState) => ({
                    ...prevState,
                    starred: data,
                }));
        });
    };
    
    const getSocialMedias = () => {
        api.get(`social-medias`)
        .then(
            ({ data }) => {
                setInfosState((prevState) => ({
                    ...prevState,
                    starred: data,
                }));
        });
    };

    const contextValue = {
        infosState,
        getSettings: useCallback(() => getSettings(), []),
        getSlide: useCallback(() => getSlide(), []),
        getGallery: useCallback(() => getGalleries(), []),
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
};