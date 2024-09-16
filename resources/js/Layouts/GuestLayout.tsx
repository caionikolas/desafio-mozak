import ApplicationLogo from '@/Components/ApplicationLogo';
import Header from '@/Components/Header';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import Morena from '../../assets/images/logo.svg'

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <Header laravelVersion={''} phpVersion={''} auth={{
                user: undefined
            }}/>

        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>


        </>
        
    );
}
