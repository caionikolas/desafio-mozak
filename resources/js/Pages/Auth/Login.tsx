import { FormEventHandler } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import Header from '@/Components/Header';

export default function Login() {
    const loginForm = useForm({
        email: '',
        password: '',
    });

    const loginSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        loginForm.post(route('login'));
    };

    const registerForm = useForm({
        name: '',
        email: '',
        password: '',
    });

    const registerSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        registerForm.post(route('register'));
    };

    return (
      <>
        <Header/>

        <div className='flex items-center justify-evenly py-24'>
            <Head title="Entrar" />

            { /*  Login Form  */  }
            <div className='flex flex-col gap-3'>
                <form onSubmit={loginSubmit}>         
                    <h1 className='events pb-5'>
                        Entre com a sua Conta
                    </h1>
                    <p className='text-lg font-medium'>
                        Entre com a sua conta para participar do evento
                    </p>

                    <div className='m-4'>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="emailRegister"
                                placeholder='Digite seu email'
                                value={loginForm.data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => loginForm.setData('email', e.target.value)}
                            />

                            <InputError message={loginForm.errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Senha" />

                            <TextInput
                                id="password"
                                type="password"
                                name="passwordRegister"
                                placeholder='Digite sua Senha'
                                value={loginForm.data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => loginForm.setData('password', e.target.value)}
                            />
                        </div>

                        <div className="flex items-center justify-end">
                            <button className="primary-btn w-96 h-12 mt-12 text-lg" disabled={registerForm.processing}>
                                Acessar
                            </button>
                        </div>
                    </div>

                            
                </form>
            </div>

            { /*  Register Form  */  }
            <div>
                <form onSubmit={registerSubmit}>
                    <h1 className='events pb-5'>
                        Cadastre-se
                    </h1>
                    <p className='text-lg font-medium'>
                        Cadastre-se para participar ou criar um evento
                    </p>
                    <div className='m-4'>
                        <div className='flex flex-col gap-3'>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                placeholder='Digite seu nome'
                                value={registerForm.data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => registerForm.setData('name', e.target.value)}
                                required
                            />

                            <InputError message={registerForm.errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                placeholder='Digite seu email'
                                value={registerForm.data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => registerForm.setData('email', e.target.value)}
                                required
                            />

                            <InputError message={registerForm.errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Senha" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                placeholder='Digite sua senha'
                                value={registerForm.data.password}
                                className="mt-1 block w-full p-4"
                                autoComplete="new-password"
                                onChange={(e) => registerForm.setData('password', e.target.value)}
                                required
                            />

                            <InputError message={registerForm.errors.password} className="mt-2" />
                        </div>

                        <div>
                            <button className="primary-btn w-96 h-12 mt-12 text-lg">
                                Criar Conta
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </>
  );
}