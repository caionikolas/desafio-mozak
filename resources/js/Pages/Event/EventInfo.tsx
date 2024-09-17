import { Head, Link } from "@inertiajs/react";
import Morena from '../../../assets/images/logo.svg'
import AuthHeader from "@/Components/AuthHeader";

export default function EventInfo() {
  return (
    <div className="bg-zinc-100">
      <AuthHeader/>

      <main className="py-40 px-20 h-screen">
        <Head title="Info" />
        <h1 className="title text-start text-5xl pb-4">JOTA25 em São José dos Campos</h1>

        <div className="flex flex-col gap-8 m-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-start gap-4">
              <p>icon</p>
              <div>
                <p className="font-bold">Sábado, 19 de outubro de 2024</p>
                <p>Início: 14:00 - Encerramento: 23:59</p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <p>icon</p>
              <div>
                <p className="font-bold">Farma Conde Arena</p>
                <p>Rua Winston Churchill, 230 - São José dos Campos - São Paulo, 12240-681</p>
              </div>
            </div>
            
          </div>

          <div className="w-[480px]">
            <h1 className="text-3xl font-bold">Informações do Evento</h1>
            <p>A Fejuada dos Monges, tradicional no interior paulista chegou em Poços de
            Caldas!! <br />
            Unindo a receita secreta dos Monges ao melhor da música. <br />
            No seu ingresso já está incluso a camiseta oficial dos Feijuqueiros, que é de <br />
            uso obrigatório no evento e 4 horas de Open Feijuca!</p>
          </div>


        </div>

        <div>
            <button className="primary-btn w-96 h-12 mt-16 text-lg">
                Inscrever
            </button>
        </div>
      </main>
      
    </div>
    
  )
}