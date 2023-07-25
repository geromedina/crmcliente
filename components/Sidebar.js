import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {

    // Routing de next
    const router = useRouter()
    // console.log(router.pathname)


    return ( 
        <aside className='bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5'>
            <div>
                <p className='text-white text-2xl font-black'>CRM Clientes</p>
            </div>

            <nav className='mt-5 list-none'>
                <li className={router.pathname === "/" ? "bg-blue-600 p-2" : "p-2"}>
                    <Link href='/'>
                        <p className='text-white block'>Clientes</p>
                    </Link>
                </li>
                <li className={router.pathname === "/pedidos" ? "bg-blue-600 p-2" : "p-2"}>
                    <Link href='/pedidos'>
                        <p className='text-white block'>Pedidos</p>
                    </Link>
                </li>
                <li className={router.pathname === "/productos" ? "bg-blue-600 p-2" : "p-2"}>
                    <Link href='/productos'>
                        <p className='text-white block'>Productos</p>
                    </Link>
                </li>
            </nav>

            <div className='sm:mt-10'>
                <p className='text-white text-2xl font-black'>Otras Opciones</p>
            </div>
            <nav className='mt-5 list-none'>

                <li className={router.pathname === "/mejoresvendedores" ? "bg-blue-600 p-2" : "p-2"}>
                    <Link href='/mejoresvendedores'>
                        <p className='text-white block'>Mejores Vendedores</p>
                    </Link>
                </li>

                <li className={router.pathname === "/mejoresclientes" ? "bg-blue-600 p-2" : "p-2"}>
                    <Link href='/mejoresclientes'>
                        <p className='text-white block'>Mejores Clientes</p>
                    </Link>
                </li>
            </nav>

        </aside>
    );
}
 
export default Sidebar;