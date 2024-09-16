import { PropsWithChildren, ReactNode } from 'react';
import { Link } from '@inertiajs/react';
import Morena from '../../assets/images/logo.svg'

export default function Authenticated({ children }: PropsWithChildren<{ header?: ReactNode }>) {

    return (
        <>
            <header className="flex items-center justify-between px-24 bg-white text-black h-28">
                <div className="flex items-center">
                    <Link href="/">
                        <img src={Morena} alt="logo" />
                    </Link>
                </div>

                <nav className="flex items-center gap-3">
                    <Link className='nav-link w-max' href={route('dashboard')}>
                        Criar evento
                    </Link>
                    <span>|</span>
                    <Link className='nav-link w-max' href={route('dashboard')}>
                        Fulano da Morena
                    </Link>
                    <span>|</span>
                    <Link className='nav-link w-max' href={route('logout')} method="post" as="button">
                        Sair
                    </Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
