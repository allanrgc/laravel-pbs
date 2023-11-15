<?php

namespace App\Http\Controllers;

use App\Models\Clients;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ClientsController extends Controller
{
    public function index()
    {
        $clients = Clients::all();

        $clients->each(function ($client) {
            $client->data_nascimento = Carbon::parse($client->data_nascimento)->format('d/m/Y');
        });
        return Inertia::render('Clients/All', [
            'clients' => $clients
        ]);
    }

    public function create()
    {
        return Inertia::render('Clients/Create');
    }

    public function store(Request $request)
    {
        
        $request->validate([
            'nome' => 'required',
            'data_nascimento' => 'required|date',
            'cpf_cnpj' => 'required|unique:clients',
            'nome_social' => 'nullable',
            'foto' => 'image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);
        
        $client = Clients::create($request->except('foto'));

        if ($request->hasFile('foto')) {
            $client->foto = $request->file('foto')->store('clientes_fotos', 'public');
            $client->save();
        }

        return redirect()->route('clients.index');
    }

    public function show(Clients $client)
    {     
        return Inertia::render('Clients/Show', compact('client'));
    }

    public function edit(Clients $client)
    {
        return view('clients.edit', compact('client'));
    }

    public function update(Request $request, Clients $client)
    {
        \Log::info('Request Data:', $request->all());
        
        $request->validate([
            'nome' => 'min:0|max:30',
            'data_nascimento' => 'min:0|max:10|date',
            'cpf_cnpj' => 'min:1|max:14|unique:clients,cpf_cnpj,'.$client->id, //min: 11 | max: 14
            'nome_social' => 'min:0|max:90',
            'foto' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ],[
            'cpf_cnpj.unique' => 'O CPF ou CNPJ já está em uso.',
        ]);

        $client->update($request->except('foto'));

        if ($request->hasFile('foto')) {
            \Log::info('File received:', ['file' => $request->file('foto')]);

            $client->foto = $request->file('foto')->store('clientes_fotos', 'public');
            $client->save();

            \Log::info('File saved:', ['file_path' => $client->foto]);
        }else {
            \Log::info('No file received');
        }

        if ($request->hasFile('foto')) {
            $image = $request->file('foto');
            $path = $image->store('clientes_fotos', 'public');
        
            $resizedImage = Image::make(storage_path("app/public/{$path}"))
                ->resize(300, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('jpg', 80); 
        
            Storage::disk('public')->put($path, $resizedImage);
        
            $client->foto = $path;
            $client->save();
        }

        return redirect()->route('clients.show', ['client' => $client]);
    }
    public function destroy(Clients $client)
    {
        $client->delete();
        return redirect()->route('clients.index');
    }
}
