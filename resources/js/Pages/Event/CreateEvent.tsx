import AuthHeader from "@/Components/AuthHeader";
import Checkbox from "@/Components/Checkbox";
import DatetimeLocal from "@/Components/InputDatetime";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import InputNumber from "@/Components/InputNumber";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function CreateEvent() {
  const { data, setData, post, errors, processing } = useForm({
    isActive: false,
    name: '',
    description: '',
    startsAt: '',
    endsAt:'',
    maxSubscription: 0,
    zipcode: '',
    number:'',
    city: '',
    state: 0,
    complement: '',
    address:'',
});

const submit: FormEventHandler = (e) => {
    e.preventDefault();

    console.log(data)

    post(route('createEvent'));
};

  return (
    <>
      <AuthHeader/>

      <Head title="Eventos" />

      <h1 className="events">Cadastrar Evento</h1>
      <p className="text-sm font-medium text-center pt-3">Cadastra-se para participar ou criar um evento.</p>

      <form onSubmit={submit} >

        <div className="flex items-center justify-center gap-48 pt-14">
        <div className="w-[500px] flex flex-col gap-5">

<div>
  <InputLabel htmlFor="name" value="Ativo?" />

  <Checkbox
    name="isActive"
    checked={data.isActive}
    onChange={(e) => setData('isActive', e.target.checked)}
  />

  <InputError message={errors.isActive} className="mt-2" />
</div>

<div>
  <InputLabel htmlFor="name" value="Nome do Evento"/>

  <TextInput
    id="name"
    name="name"
    placeholder='Digite o nome do evento'
    value={data.name}
    className="mt-1 block w-full"
    autoComplete="name"
    isFocused={true}
    onChange={(e) => setData('name', e.target.value)}
    required
  />

  <InputError message={errors.name} className="mt-2" />
</div>

<div>
  <InputLabel htmlFor="name" value="Descrição do Evento"/>

  <TextArea 
    id="description"
    name="description"
    value={data.description}
    rows={5}
    cols={15}
    autoComplete="description"
    placeholder="Sobre o Evento"
    onChange={(e) => setData('description', e.target.value)}
  />

  <InputError message={errors.name} className="mt-2" />

</div>

<div>
  <InputLabel htmlFor="name" value="Data/Hora Inicio do Evento"/>

  <DatetimeLocal 
    id="startsAt"
    name="startsAt"
    placeholder="00/00/0000 00:00"
    min="2024-09-16"
    value={data.startsAt}
    className="mt-1 block w-full"
    onChange={(e) => setData('startsAt', e.target.value.toString())}
    required 
  />

  <InputError message={errors.startsAt} className="mt-2" />
</div>

<div>
  <InputLabel htmlFor="name" value="Data/Hora Fim do Evento"/>

  <DatetimeLocal 
    id="endsAt"
    name="endsAt"
    placeholder="00/00/0000 00:00"
    value={data.endsAt}
    className="mt-1 block w-full"
    onChange={(e) => setData('endsAt', e.target.value.toString())}
  />

  <InputError message={errors.endsAt} className="mt-2" />
</div>

<div>
  <InputLabel htmlFor="name" value="Vagas para o evento"/>

  <InputNumber 
    id="maxSubscription"
    name="maxSubscription"
    placeholder="Limite máximo de pessoas"
    min={1}
    value={data.maxSubscription}
    className="mt-1 block w-full"
    onChange={(e) => setData('maxSubscription', Number(e.target.value))}
    required
  />

  <InputError message={errors.maxSubscription} className="mt-2" />
</div>
</div>


<div className="w-[500px] flex flex-col gap-5">
<div>
  <InputLabel htmlFor="name" value="CEP"/>

  <TextInput
    id="zipcode"
    name="zipcode"
    placeholder='00000-000'
    value={data.zipcode}
    className="mt-1 block w-full"
    autoComplete="zipcode"
    isFocused={true}
    onChange={(e) => setData('zipcode', e.target.value)}
    required
  />

  <InputError message={errors.zipcode} className="mt-2" />
</div>

<div>
  <InputLabel htmlFor="name" value="Endereço"/>

  <TextInput
    id="address"
    name="address"
    value={data.address}
    className="mt-1 block w-full"
    autoComplete="address"
    isFocused={true}
    onChange={(e) => setData('address', e.target.value)}
    required
  />

  <InputError message={errors.address} className="mt-2" />
</div>

<div>
  <InputLabel htmlFor="name" value="Complemento"/>

  <TextInput
    id="complement"
    name="complement"
    value={data.complement}
    className="mt-1 block w-full"
    autoComplete="complement"
    isFocused={true}
    onChange={(e) => setData('complement', e.target.value)}
  />

  <InputError message={errors.complement} className="mt-2" />
</div>

<div>
  <InputLabel htmlFor="name" value="Numero"/>

  <TextInput
    id="number"
    name="number"
    value={data.number}
    className="mt-1 block w-full"
    autoComplete="number"
    isFocused={true}
    onChange={(e) => setData('number', e.target.value)}
    required
  />

  <InputError message={errors.number} className="mt-2" />
</div>

<div>
  <InputLabel htmlFor="name" value="Bairro"/>

  <TextInput
    id="number"
    name="number"
    value={data.number}
    className="mt-1 block w-full"
    autoComplete="number"
    isFocused={true}
    onChange={(e) => setData('number', e.target.value)}
    required
  />

  <InputError message={errors.maxSubscription} className="mt-2" />
</div>

<div>
  <InputLabel htmlFor="name" value="Cidade"/>

  <TextInput
    id="city"
    name="city"
    value={data.city}
    className="mt-1 block w-full"
    autoComplete="city"
    isFocused={true}
    onChange={(e) => setData('city', e.target.value)}
    required
  />

  <InputError message={errors.city} className="mt-2" />
</div>

<div>
  <InputLabel htmlFor="name" value="Estado"/>

  <InputNumber 
    id="state"
    name="state"
    placeholder="Limite máximo de pessoas"
    min={1}
    value={data.state}
    className="mt-1 block w-full"
    onChange={(e) => setData('state', Number(e.target.value))}
    required
  />

  <InputError message={errors.state} className="mt-2" />
</div>
</div>
        </div>

        <div className="flex items-center justify-center pb-16">
        <button className="primary-btn w-80 h-12 mt-16" disabled={processing}>
            Cadastrar Evento
        </button>
      </div>
      </form>

    </>
    
  )
}