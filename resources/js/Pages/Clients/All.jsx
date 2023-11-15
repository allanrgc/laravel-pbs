import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function All({ auth, clients }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Clientes</h2>}
        >
            <Head title="Clients" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in! BRUHH</div> */}
                        <div>
                            <div className='p-4 flex justify-end'>
                                <a
                                    href="/clients/create"
                                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                    >
                                        Adicionar Cliente
                                </a>
                            </div>
                        {/* <p>
                            <a href="/clients/create" className="text-blue-500 hover:underline">Adicionar Cliente</a>
                        </p> */}
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Nascimento</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPF/CNPJ</th>
                                        {/* <th>Foto</th> */}
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome Social</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
                                    {clients.map((client) => (
                                        <tr key={client.id} className="hover:bg-gray-100 dark:hover:bg-gray-900">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <a href={`/clients/${client.id}`} className="text-blue-500 hover:underline">{client.nome}</a>
                                            </td>
                                            
                                            <td className="px-6 text-gray-400 py-4 whitespace-nowrap">{client.data_nascimento}</td>
                                            <td className="px-6 text-gray-400 py-4 whitespace-nowrap">{client.cpf_cnpj}</td>
                                            {/* <td>
                                                {client.foto && (
                                                    <img src={client.foto} alt={`Foto de ${client.nome}`} className="h-8 w-8 rounded-full" />
                                                )}
                                            </td> */}
                                            <td className="px-6 text-gray-400 py-4 whitespace-nowrap">{client.nome_social}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
