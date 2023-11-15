import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';


export default function Show({ auth, client }) {
    const { data, setData, patch, errors, processing } = useForm({
        nome: client.nome,
        data_nascimento: client.data_nascimento,
        cpf_cnpj: client.cpf_cnpj,
        nome_social: client.nome_social,
        // foto: null
    
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // const formData = new FormData();
        // formData.append('nome', data.nome || client.nome);
        // formData.append('data_nascimento', data.data_nascimento || client.data_nascimento);
        // formData.append('cpf_cnpj', data.cpf_cnpj || client.cpf_cnpj);
        // formData.append('nome_social', data.nome_social || client.nome_social);
        // // formData.append('foto', data.foto || client.foto);
        // console.log("FORM DATA", formData)
        // if (data.foto) {
        //     formData.append('foto', data.foto);
        //     console.log("RETORNO DATA FOTO", data.foto)
        // } else if (client.foto) {
        //     formData.append('foto', client.foto);

        // }
        //   console.log('Conteúdo do FormData:', formData);
          patch(route('clients.update', { client }),  {
              data: data,  
              onSuccess: () => {
                //   console.log("RETORNO SUCESSO AQUI", client)
                  // visit(route('clients.show', { client }));
                },
            });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // console.log('Arquivo selecionado:', file);
        setData('foto', file);
    };    

    const confirmDelete = () => {
        if (confirm("Tem certeza de que deseja excluir este cliente?")) {
            window.location.href = '/clients';
            axios.delete(route('clients.destroy', { client }))
            .then(response => {
                window.location.reload();
                // visit(route('clients.index'));
            }).catch(error => {
                console.error(error);
            });
        }
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
            <Head title={`Cliente: ${client.nome}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className='flex mb-3'>
                            
                            <h3 className="flex mx-auto text-lg font-semibold mb-4">Detalhes do Cliente</h3>
                            </div>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="mb-4">
                                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        value={data.nome || ''}
                                        onChange={(e) => setData('nome', e.target.value)}
                                        className="mt-1 p-2 w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="data_nascimento" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Data de Nascimento
                                    </label>
                                    <input
                                        type="text"
                                        id="data_nascimento"
                                        name="data_nascimento"
                                        value={data.data_nascimento || ''}
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
                                        name="cpf_cnpj"
                                        value={data.cpf_cnpj || ''}
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
                                        value={data.nome_social || ''}
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
                                        onChange={(e) => handleFileChange(e)}
                                        className="mt-1"
                                    />
                                    {errors.foto && <p className="text-red-500 text-xs mt-1">{errors.foto}</p>}
                                    {client.foto && (
                                        <div className="mt-2">
                                            {/* <img
                                                src={`/storage/${client.foto}`}
                                                alt="Foto do Cliente"
                                                className="max-w-full h-auto"
                                            /> */}
                                            <img
                                                src={`/storage/${client.foto}`}
                                                srcSet={`/storage/${client.foto} 480w,
                                                        /storage/${client.foto} 800w,
                                                        /storage/${client.foto} 1200w`}
                                                sizes="(max-height: 600px) 480px,
                                                        (max-height: 800px) 800px"
                                                alt={`Descrição da Imagem de ${client.name}`}
                                                className="max-w-full h-auto"
                                            />
                                        </div>
                                    )}
                                </div>
                                
                                <div className="mt-4">
                                    <button
                                         type="submit"
                                         className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                         disabled={processing}
                                     >
                                         {processing ? 'Salvando...' : 'Salvar Edições'}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="p-4 flex justify-end">
                            <button className="text-red-500 hover:underline" onClick={confirmDelete}>
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
