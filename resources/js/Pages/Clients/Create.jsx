import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, errors, processing } = useForm({
        nome: '',
        data_nascimento: '',
        cpf_cnpj: '',
        foto: null,
        nome_social: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/clients', {
            // onSuccess: () => {
            //     window.location.href = '/clients';
            // },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                <a href="http://127.0.0.1:8000/clients" className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </h2>}
        >
            <Head title="Adicionar Cliente" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                        <div className='flex mb-1'>
                            <h3 className="flex mx-auto text-lg font-semibold mb-4">Adicionar Cliente</h3>
                        </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome" required
                                        value={data.nome}
                                        onChange={(e) => setData('nome', e.target.value)}
                                        className="mt-1 p-2 w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="data_nascimento" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Data de nascimento
                                    </label>
                                    <input
                                        type="date"
                                        id="data_nascimento"
                                        name="data_nascimento" required
                                        value={data.data_nascimento}
                                        onChange={(e) => setData('data_nascimento', e.target.value)}
                                        className="mt-1 p-2 w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    {errors.data_nascimento && <p className="text-red-500 text-xs mt-1">{errors.data_nascimento}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="cpf_cnpj" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        CPF / CNPJ
                                    </label>
                                    <input
                                        type="text"
                                        id="cpf_cnpj"
                                        name="cpf_cnpj" required
                                        value={data.cpf_cnpj}
                                        onChange={(e) => setData('cpf_cnpj', e.target.value)}
                                        className="mt-1 p-2 w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    {errors.cpf_cnpj && <p className="text-red-500 text-xs mt-1">{errors.cpf_cnpj}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="nome_social" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Nome Social
                                    </label>
                                    <input
                                        type="text"
                                        id="nome_social"
                                        name="nome_social"
                                        value={data.nome_social}
                                        onChange={(e) => setData('nome_social', e.target.value)}
                                        className="mt-1 p-2 w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    {errors.nome_social && <p className="text-red-500 text-xs mt-1">{errors.nome_social}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="foto" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Foto
                                    </label>
                                    <input
                                        type="file"
                                        id="foto"
                                        name="foto"
                                        onChange={(e) => setData('foto', e.target.files[0])}
                                        className="mt-1"
                                    />
                                    {errors.foto && <p className="text-red-500 text-xs mt-1">{errors.foto}</p>}
                                </div>


                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                        disabled={processing}
                                     >
                                         {processing ? 'Adicionando...' : 'Adicionar Cliente'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
