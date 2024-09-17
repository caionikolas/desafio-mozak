import EventCard from '@/Components/EventCard';
import Footer from '@/Components/Footer';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <AuthenticatedLayout>
                <Head title="Meus Eventos" />
                
                <h1 className='events'>Meus eventos</h1>
                <div className='flex items-center flex-wrap justify-start gap-8 mt-20 w-[1200px]'>
                    <Link href={route('eventInfo')}>
                        <EventCard/>
                    </Link>
                    <Link href={route('eventInfo')}>
                        <EventCard/>
                    </Link>
                    <Link href={route('eventInfo')}>
                        <EventCard/>
                    </Link>
                    <Link href={route('eventInfo')}>
                        <EventCard/>
                    </Link>
                </div>
            </AuthenticatedLayout> 

            <Footer/>
        </>

    );
}
