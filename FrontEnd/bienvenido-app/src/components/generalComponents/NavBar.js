import React from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import bienVenidoLogo from '../../images/BienVenidoLogo.svg';

import '../../styles/GlobalStyle.css';

const NavBarItens = [
    { name: 'Comienzo', href: '/', current: true },
    { name: 'Acerca de', href: '/about', current: false },
    { name: 'Trabajos', href: '/work', current: false },
    { name: 'Contactos', href: '/contact', current: false },
]

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    return (
        <>
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-32">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Abrir menú principal</span>
                                        {open ? (
                                            <img src={bienVenidoLogo} alt="bienvenido logo" className="w-32" aria-hidden="true" />
                                        ) : (
                                            <img src={bienVenidoLogo} alt="bienvenido logo" className="block w-16" aria-hidden="true" />
                                            // <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <img src={bienVenidoLogo} alt="bienvenido logo" className="hidden lg:block h-16 w-auto" aria-hidden="true" />
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {NavBarItens.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-4xl font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center  pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    >
                                        <span className="sr-only">Ver notificaciones</span>
                                        {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Abrir menú principal</span>

                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-lg text-gray-700')}
                                                        >
                                                            Comienzo
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/about"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-lg text-gray-700')}
                                                        >
                                                            Acerca de
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/work"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-lg text-gray-700')}
                                                        >
                                                            Trabajos
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/contact"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-lg text-gray-700')}
                                                        >
                                                            Contactos
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {NavBarItens.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-3xl font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* <header className="header">
                <img src={bienVenidoLogo} alt="" className="logo" />
                <Link to="/" className="logo-name"> BienVenido </Link>
                <nav className="navbar">
                    <div id="close-navbar" className="fas fa-times"></div>
                    <Link to="/">Comienzo</Link>
                    <Link to="/about">Acerca de</Link>
                    <Link to="/work">Trabajos</Link>
                    <Link to="/contact">Contactos</Link>
                    <Link to="/"><FontAwesomeIcon id="account-btn" icon={faUser} size='1.5x' color="white" /></Link>
                </nav>

                <div className="icons">
                    <FontAwesomeIcon id="menu-btn" icon={faBars} size='3x' color="white" />
                </div>
            </header > */}
        </>
    )
}
export default Navbar;