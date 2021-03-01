import React from 'react';
import { Suspense } from 'react';
import Loader from '../assets/GIFs/Loader';


export const WithSuspence = (Component) => {
    return (props) => {
        return <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    }
}