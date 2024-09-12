import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="bg-white ">
        <nav>
          <Link to='/' className="nav-link text-3xl font-extrabold">Morena.</Link>
          <div>
            <Link to='/create-event' className="nav-link text-black">
              Criar Evento
            </Link>
            <span>|</span>
            <Link to='/login' className="nav-link">
              Entrar
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>
    </>
  )
}