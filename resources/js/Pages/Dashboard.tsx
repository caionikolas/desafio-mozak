import EventCard from '@/Components/EventCard';
import Footer from '@/Components/Footer';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <AuthenticatedLayout>
                <Head title="Meus Eventos" />
                
                <h1 className='events'>Meus eventos</h1>
                <div className='flex items-center flex-wrap justify-start gap-8 mt-20 w-[1200px]'>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                </div>
            </AuthenticatedLayout> 

            <Footer/>
        </>

    );
}
