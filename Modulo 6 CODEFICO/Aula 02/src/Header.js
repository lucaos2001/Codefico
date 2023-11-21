import './Header.css'

function App(){
    return(
        <div id="Control">
        <Top />
        <Panel />
        <Profile />
        </div>
    );
}

function Top(){
    return(
        <div id="Top">
        <img src="./icon.png" alt="Logo do app taskwave" />
        <span>TaskWave</span>
        </div>
    );
}

function Panel(){
    return(
        <div id="Panel">
        <ul>
            <li>Minhas Áreas</li>
            <li>+Área</li>
            <li>Tarefas</li>
            <li>Logout</li>
        </ul>
        </div>
    );
}

function Profile(){
    return(
        <div id="Profile">
        <span>Nome do usuário</span>
        <img src="./download.jpg" alt="imagem de perfil do usuário" />
        </div>
    );
}


export default App;

