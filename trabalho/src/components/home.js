import React from 'react';
import Header from './header'
import Footer from './footer'


class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <div style={{textAlign: 'center', margin: 50}}>
                    <section>
                        <h2>
                            1º Passo - Instalando o NPM
                        </h2>
                        <p>
                            Para criar um projeto em React o primeiro passo é a instalação do npm(Node Package Manager). Seu download pode ser feito pelo site do <a href="https://nodejs.org/en/">Node.js</a>, baixando o mesmo. 
        Depois de instalado, execute o comando:
                        </p>
                        <b>
                            npm i create-react-app
                        </b>
                        <p>
                            Esse comando irá instalar o pacote criador de projetos React do npm.
                        </p>
                    </section>

                    <section>
                        <h2>
                            2º - Criando o projeto 
                        </h2>
                        <p>
                            Com o package create-react-app instalado, você já consegue criar um projeto base em React. Para isso, execute o comando:
                        </p>
                        <b>
                            create-react-app nome_do_projeto
                        </b>
                        <p>
                            Esse comando irá criar a base. Depois disso você já pode executar:
                        </p>
                        <b>
                            cd nome_do_projeto
                        </b>
                        <p>
                            Comando que serve para navegar até a pasta do projeto recém criado. E em seguida: 
                        </p>
                        <b>
                            npm i --save react-router-dom
                        </b>
                        <p>
                            Para criar as rotas de navegação da aplicação.
                        </p>
                    </section>

                    <section>
                        <h2>
                            3º - Executando o projeto
                        </h2>
                        <p>
                            A partir desse momento, você já pode executar seu projeto criado, rodando o código:
                        </p>
                        <b>
                            npm start
                        </b>
                    </section>

                    <section>
                        <h2>
                            4º - Navegando entre telas
                        </h2>
                        <p>
                            Para navegação entre as telas, no arquivo index.js, adicione a seguinte linha de código no inicio do arquivo:
                        </p>
                        <b>
                            {"import { BrowserRouter, Switch, Route } from 'react-router-dom'"}
                        </b>
                        <p>
                        Depois, onde está escrito:
                        </p>
                        <b>
                        {"ReactDOM.render(<App />, document.getElementById('root'));"}
                        </b>
                        <p>
                        Substituir por:
                        </p>
                        <b>
                        {'ReactDOM.render(<BrowserRouter><Switch><Route path="/home" exact={true} component={Home} /><Route path="/button" exact={true} component={Button} /><Route path="/dropdown" exact={true} component={Dropdown} /><Route path="/alert" exact={true} component={Alert} /><Route path="/tooltip" exact={true} component={Tooltip} /><Route path="/image" exact={true} component={Image} /><Route path="/sobre" exact={true} component={Sobre} /></Switch></BrowserRouter>,document.getElementById("root"));'}
                        </b>
                        <p>
                            Para mapear as rotas de nosso projeto.
                        </p>
                    </section>

                    <section>
                        <h2>
                        5 - Criando os componentes base
                        </h2>
                        <p>
                        Com o propósito de manter o seu projeto organizado, recomendamos a criação de uma pasta chamada components dentro de nome_do_projeto/src.
Depois de criar a pasta components, podemos começar a adicionar os componentes do projeto à ela.
O primeiro componente de nosso projeto é o Header. Ele aparecerá em todas as páginas do site.
Para criar o Header, devemos criar os arquivos:
                        </p>
                        <b>
                        header.js
                        </b>
                        <p>
                        e
                        </p>
                        <b>
                        footer.js
                        </b>
                        <p>
                        Sendo que seus conteúdos desses arquivos são, respectivamente:
                        </p>
                        <b>
                        {'import React from "react"; import { Link } from "react-router-dom" class Header extends React.Component { render() { return ( <div> <ul style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "nowrap", flexDirection: "row"}}><li><Link to="/home">Home</Link></li><li><Link to="/films">Button</Link></li><li><Link to="/starships">Dropdown</Link></li><li><Link to="/people">Alert</Link></li><li><Link to="/planets">Tooltip</Link></li><li><Link to="/species">Image</Link></li><li><Link to="/login">Sobre</Link></li></ul></div>); }} export default Header;'}
                        </b>
                        <p>
                            e
                        </p>
                        <b>
                        {'import React from "react"; import { Link } from "react-router-dom" class Footer extends React.Component { render() { return ( <div style={{display: "flex", justifyContent: "center"}}><a href="https://react-bootstrap.github.io/">React Bootstrap</a></div>);}} export default Footer;'}
                        </b>
                        <p>
                        Depois de criados o Header e Footer, adicionamos eles em todas as nossas páginas incluindo as tags
                        </p>
                        <b>
                            {'<Header/>'}
                        </b>
                        <p>
                            e
                        </p>
                        <b>
                            {'<Footer/>'}
                        </b>
                        <p>
                            nos componentes que desejarmos.
                        </p>
                    </section>
                </div>

                <Footer/>
                
            </div>
          );
    }
}

export default Home;
