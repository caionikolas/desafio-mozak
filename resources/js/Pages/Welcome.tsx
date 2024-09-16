import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Morena from '../../assets/images/logo.svg'
import EventCard from '@/Components/EventCard';
import Footer from '@/Components/Footer';

export default function Welcome({ auth}: PageProps<{ laravelVersion: string, phpVersion: string }>) {

    return (
        <>
            <Head title="Morena." />
            <header className='flex items-center justify-between px-24 bg-white text-black h-28'>
                <Link href='/' className="nav-link text-3xl font-extrabold">
                    <img src={Morena} alt="Logo" />
                </Link>
                <nav>
                    {auth.user ? (
                        <div className="flex items-center gap-3">
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
                    </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link
                                href={route('login')}
                                className="nav-link text-black"
                            >
                                Criar evento
                            </Link>
                            <span>|</span>
                            <Link
                                href={route('login')}
                                className="nav-link text-black"
                            >
                                Entrar
                            </Link>
                        </div>
                    )}
                </nav>
            </header>

            <main>                
                <h1 className='events'>Eventos da morena.</h1>
                <div className='flex items-center flex-wrap justify-start gap-8 mt-20 w-[1200px]'>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                </div>
            </main>
            <Footer/>
        </>
    );
}
