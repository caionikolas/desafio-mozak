import { Link } from "@inertiajs/react";
import Morena from '../../assets/images/logo.svg'
import { PageProps } from "@/types";

export default function Header() {
  return (
      <>
          <header className='flex items-center justify-between px-24 bg-white text-black h-28'>
              <Link href='/' className="nav-link text-3xl font-extrabold">
                  <img src={Morena} alt="Logo" />
              </Link>
              <nav>
                <div className="flex items-center gap-3">
                    <Link
                        href={route('login')}
                        className="nav-link text-black"
                    >
                        Criar evento
                    </Link>
                    <span>|</span>
                    <Link
                        href={route('register')}
                        className="nav-link text-black"
                    >
                        Entrar
                    </Link>
                </div>
              </nav>
          </header>
      </>
  )
}