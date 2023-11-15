import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div title="Create" />

            <div className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    
                    <a
                        href="http://127.0.0.1:8000/clients"
                        className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                    >
                        <div>
                            
                            <div className="h-16 w-16 bg-gray-50 dark:bg-gray-600/20 flex items-center justify-center rounded-full">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none"
                                viewBox="0 0 20 20" 
                                strokeWidth="1.5"
                                className="w-7 h-7 stroke-gray-300"
                                >
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                            </svg>
                            </div>
                            <div>
                                
                            </div>

                            <h2 className="flex mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                               <svg strokeWidth="1.5" className="self-center shrink-0 stroke-orange-500 w-6 h-6 mr-3">
                                    <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                                </svg> 
                                Todos os Clientes
                            </h2>
                            <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                Aqui estão listados todos os clientes cadastrados e podem ser visualizados
                                separadamente clicando no nome de cada um.
                            </p>
                        </div>
                    </a>
                    <a
                        href="http://127.0.0.1:8000/clients/create"
                        className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                    >
                        <div>
                            
                            <div className="h-16 w-16 bg-gray-50 dark:bg-gray-600/20 flex items-center justify-center rounded-full">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20" 
                                strokeWidth="1.5"
                                className="w-7 h-7 stroke-gray-300"
                            > 
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                            </svg>
                            </div>
                            <div>
                                
                            </div>

                            <h2 className="flex mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                               <svg strokeWidth="1.5" className="self-center shrink-0 stroke-orange-500 w-6 h-6 mr-3">
                                    <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                                </svg> 
                                Adicionar Cliente
                            </h2>
                            <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                
                                Adicione novos clientes à lista de clientes aqui. Informe nome, data de nascimento,
                                cpf ou cnpj, nome social e uma foto.
                            </p>
                        </div>
                    </a>

                    

                    <div className="p-6 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="h-16 w-16 bg-gray-50 dark:bg-gray-600/20 flex items-center justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-gray-300" viewBox="0 0 20 20" fill="none">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>

                        </div>
                        <h2 className="flex mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                            <svg strokeWidth="1.5" className="self-center shrink-0 stroke-orange-500 w-6 h-6 mr-3">
                                <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                            </svg> 
                            Contatos:
                        </h2>
                        <div className='pt-3 text-gray-300'>
                            <ul>
                                <li>Telefone: (83) 9xxx-xxxx</li>
                                <li>Email: contato@gmail.com</li>
                                <li><a href="https://github.com/allanrgc/laravel-pbs">Github</a></li>
                                <li><a href="https://linkedin.com/in/allanrgc">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>    
            
        </AuthenticatedLayout>
    );
}
