import React from 'react';
import Header from './header'
import Footer from './footer'
import { ButtonToolbar, Button } from 'react-bootstrap';



class ButtonMenu extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <div style={{textAlign: 'center', margin: 50}}>
                    <h1>
                        Button:
                    </h1>
                    <section>
                        <p>
                        Esse componente é um Botão, com vários estilos customizáveis para formulários, diálogos e outros elementos.<br/>
Para alternar o estilo do botão, é só modificar sua propriedade "variant".
                        </p>
                        
                    </section>

                    <section style={{display: 'flex', justifyContent: "center"}}>
                        <div>
                            <ButtonToolbar>
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="success">Success</Button>
                                <Button variant="warning">Warning</Button>
                                <Button variant="danger">Danger</Button>
                                <Button variant="info">Info</Button>
                                <Button variant="light">Light</Button>
                                <Button variant="dark">Dark</Button>
                                <Button variant="link">Link</Button>
                            </ButtonToolbar>
                        </div>
                        
                    </section>
                </div>

                <Footer/>
                
            </div>
          );
    }
}

export default ButtonMenu;
