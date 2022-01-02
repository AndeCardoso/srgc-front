import { createContext, useCallback, useState } from 'react';

import api from '../services/api';

export const InfosContext = createContext ({
    loading: false,
    settings: {},
    slide: [],
    sectionTitle: undefined,
    galleries: {},
    galleryTitle: [],
    socialMedias: {},
    theme: {}
})

export const InfosProviders = ({ children }) => {
    const [ infosState, setInfosState] = useState({
        isConnected: true,
        settings: {
            enterpriseName: undefined,
            email: undefined,
            phone: undefined,
            address: undefined,
            whatsapp: undefined,
        },
        slide: [],
        sectionTitle: undefined,
        galleries: [{
            gallery: undefined,
            images: []
        }],
        galleryTitle: [],
        socialMedias: {},
        theme: {
            primary: undefined,
            secondary: undefined,
        }
    });

    const getSettings= async () => {
            await api.get(`/settings`)
            .then(response => {
                setInfosState((prevState) => ({
                    ...prevState,
                    settings: {
                        enterpriseName: response.data.settings.enterpriseName,
                        email: response.data.settings.email,
                        phone: response.data.settings.phone,
                        address: response.data.settings.address,
                        whatsapp: response.data.settings.whatsapp,
                        whatsappNumber: response.data.settings.whatsapp.replace(/[^0-9]/g,''),
                    }
                }));
            });
        }

    const getSlide = async () => {
        await api.get(`/slide`)
        .then(response => {
            setInfosState((prevState) => ({
                ...prevState,
                slide: response.data.data,
            }));
        });
    };

    const getImages = async (value) => {
        const gallery = 'gallery' + value;
        await api.get(`/gallery/${gallery}`)
        .then(response => {
            setInfosState((prevState) => ({
                ...prevState,
                galleries: [{
                    gallery,
                    images: response.data.images,
                }]
            }));
        });
    };

    const getGalleries = async () => {
        await api.get(`/galleries-titles`)
        .then(response => {
            setInfosState((prevState) => ({
                ...prevState,
                galleries: response.data.data,
            }));
        });
    };

    const getSectionTitle = async () => {
        await api.get('/section')
        .then(response => {
            setInfosState((prevState) => ({
                ...prevState,
                sectionTitle: response.data.section.title,
            }));
        });
    }

    const getGalleriesTitles = async () => {
        await api.get(`/galleries-titles`)
        .then(response => {
            setInfosState((prevState) => ({
                ...prevState,
                galleryTitle: response.data.data,
            }));
        });
    }
    
    const getSocialMedias = async () => {
        await api.get(`/social-medias`)
        .then(response => {
            setInfosState((prevState) => ({
                ...prevState,
                socialMedias: {
                    facebook: response.data.socialMedias.facebook,
                    instagram: response.data.socialMedias.instagram,
                    booking: response.data.socialMedias.twitter,
                    sectionTitle: response.data.socialMedias.sectionTitle,
                }
            }));
        });
    };
    
    const getTheme = async () => {
        await api.get(`/theme`)
        .then(response => {
            setInfosState((prevState) => ({
                ...prevState,
                theme: {
                    primary: response.data.theme.primary,
                    secondary: response.data.theme.secondary,
                }
            }));
        });
    };

    const contextValue = {
        infosState,
        getSettings: useCallback(() => getSettings(), []),
        getSlide: useCallback(() => getSlide(), []),
        getGalleries: useCallback(() => getGalleries(), []),
        getGalleriesTitles: useCallback(() => getGalleriesTitles(), []),
        getImages: useCallback(() => getImages(), []),
        getSocialMedias: useCallback(() => getSocialMedias(), []),
        getSectionTitle: useCallback(() => getSectionTitle(), []),
        getTheme: useCallback(() => getTheme(), [])

    }

    return (
        <InfosContext.Provider value={contextValue}>
            {children}
        </InfosContext.Provider>
    );
};