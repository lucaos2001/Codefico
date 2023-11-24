import React, { useState } from 'react';
import './CadastroUsuario.css';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [sexo, setSexo] = useState('');
    const [usuariosCadastrados, setUsuariosCadastrados] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (nome && email && telefone && dataNascimento && sexo) {
            const novoUsuario = {
                nome,
                email,
                telefone,
                dataNascimento,
                sexo,
            };

            setUsuariosCadastrados((prevUsuarios) => [...prevUsuarios, novoUsuario]);

            handleClear();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    const handleClear = () => {
        setNome('');
        setEmail('');
        setTelefone('');
        setDataNascimento('');
        setSexo('');
    };

    return (
        <div id="Cadastramento">
            <h1>Formulário de Cadastramento</h1>
            <form id='Formulario' onSubmit={handleSubmit}>
                <span>
                    <label>Nome: </label>
                    <input
                        type='text'
                        id='sName'
                        placeholder='Nome completo:'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </span>
                <span>
                    <label>Email: </label>
                    <input
                        type='email'
                        id='sEmail'
                        placeholder='Email:'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </span>
                <span>
                    <label>Telefone: </label>
                    <input
                        type='tel'
                        id='sTelefone'
                        placeholder='(00) 00000-0000'
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </span>
                <span>
                    <label>Data de Nascimento: </label>
                    <input
                        type='date'
                        id='sData'
                        placeholder='dd/mm/aaaa'
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                    />
                </span>
                <span>
                    <fieldset id="field">
                        <legend>Sexo</legend>
                        <input
                            type="radio"
                            id="sSexoMasculino"
                            name="sexo"
                            value="Masculino"
                            checked={sexo === 'Masculino'}
                            onChange={() => setSexo('Masculino')}
                        />
                        <label>Masculino</label><br />
                        <input
                            type="radio"
                            id="sSexoFeminino"
                            name="sexo"
                            value="Feminino"
                            checked={sexo === 'Feminino'}
                            onChange={() => setSexo('Feminino')}
                        />
                        <label>Feminino</label>
                    </fieldset>
                </span>
                <span id='Botoes'>
                    <button className="enviar" type="submit">Enviar Formulário</button>
                    <button className="apagar" type="button" onClick={handleClear}>Apagar Informações</button>
                </span>
            </form>

            <div>
                <fieldset id="DadosUsuarios">
                <legend>Usuários Cadastrados</legend>
                <ul>
                    {usuariosCadastrados.map((usuario, index) => (
                        <li key={index}>
                            <strong>Nome:</strong> {usuario.nome}, 
                            <strong>Email:</strong> {usuario.email},
                            <strong>Telefone:</strong> {usuario.telefone},
                            <strong>Data de Nascimento:</strong> {usuario.dataNascimentol},
                            <strong>Sexo:</strong> {usuario.sexo}
                        </li>
                    ))}
                </ul>
                </fieldset>
            </div>
        </div>
    );
}

export default Cadastro;
