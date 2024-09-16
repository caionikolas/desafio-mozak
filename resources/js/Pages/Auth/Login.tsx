import { FormEventHandler } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import Header from '@/Components/Header';

export default function Login({ status }: { status?: string, canResetPassword: boolean }) {
    const registerForm = useForm({
        email: '',
        password: '',
    });

    //{ data, setData, post, processing, errors, reset } 

    const registerSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        registerForm.post(route('login'), {
            onFinish: () => registerForm.reset('password'),
        });
    };

    const { data, setData, post, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const submitLogin: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password'),
        });
    };

    return (
      <>
          <Header/>

          <div className='flex justify-evenly py-24'>
          <Head title="Entrar" />

                      <div className='flex flex-col gap-3'>
                      <h1 className='text-xl font-bold text-center'>Entre com a sua Conta</h1>
                      <p className='text-sm font-medium'>Entre com a sua conta para participar do evento</p>

                      {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                      <form onSubmit={registerSubmit}>
                          <div>
                              <InputLabel htmlFor="email" value="Email" />

                              <TextInput
                                  id="email"
                                  type="email"
                                  name="emailRegister"
                                  placeholder='Digite seu email'
                                  value={registerForm.data.email}
                                  className="mt-1 block w-full"
                                  autoComplete="username"
                                  isFocused={true}
                                  onChange={(e) => registerForm.setData('email', e.target.value)}
                              />

                              <InputError message={registerForm.errors.email} className="mt-2" />
                          </div>

                          <div className="mt-4">
                              <InputLabel htmlFor="password" value="Password" />

                              <TextInput
                                  id="password"
                                  type="password"
                                  name="passwordRegister"
                                  placeholder='Digite sua Senha'
                                  value={registerForm.data.password}
                                  className="mt-1 block w-full"
                                  autoComplete="current-password"
                                  onChange={(e) => registerForm.setData('password', e.target.value)}
                              />
                          </div>

                          <div className="flex items-center justify-end">
                              <button className="primary-btn mt-8" disabled={registerForm.processing}>
                                  Log in
                              </button>
                          </div>
                      </form>
                  </div>



              

                      <div>
              <form onSubmit={submitLogin}>
                  <div className='flex flex-col gap-3'>
                      <h1 className='text-xl font-bold text-center'>Entre com a sua Conta</h1>
                      <p className='text-sm font-medium'>Entre com a sua conta para participar do evento</p>

                      <InputLabel htmlFor="name" value="Name" />

                      <TextInput
                          id="name"
                          name="name"
                          placeholder='Digite seu nome'
                          value={data.name}
                          className="mt-1 block w-full"
                          autoComplete="name"
                          isFocused={true}
                          onChange={(e) => setData('name', e.target.value)}
                          required
                      />

                      <InputError message={errors.name} className="mt-2" />
                  </div>

                  <div className="mt-4">
                      <InputLabel htmlFor="email" value="Email" />

                      <TextInput
                          id="email"
                          type="email"
                          name="email"
                          placeholder='Digite seu email'
                          value={data.email}
                          className="mt-1 block w-full"
                          autoComplete="username"
                          onChange={(e) => setData('email', e.target.value)}
                          required
                      />

                      <InputError message={errors.email} className="mt-2" />
                  </div>

                  <div className="mt-4">
                      <InputLabel htmlFor="password" value="Senha" />

                      <TextInput
                          id="password"
                          type="password"
                          name="password"
                          placeholder='Digite sua senha'
                          value={data.password}
                          className="mt-1 block w-full p-4"
                          autoComplete="new-password"
                          onChange={(e) => setData('password', e.target.value)}
                          required
                      />

                      <InputError message={errors.password} className="mt-2" />
                  </div>

                  <div>
                      <button className="primary-btn mt-12">
                          Criar Conta
                      </button>
                  </div>
              </form>
              </div>

      </div>
      </>
  );
}