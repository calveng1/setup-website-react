import React from 'react';
import Header from './header'
import Footer from './footer'
import { ListGroup } from 'react-bootstrap';


class ListMenu extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <div style={{textAlign: 'center', margin: 50}}>
                    <h1>
                        ListGroup:
                    </h1>
                    <section>
                        <p>
                        São componentes poderosos e muito flexíveis para demonstrar conteúdos.<br/>Sua personalização dá suporte para praticamente qualquer tipo de conteúdo.
                        </p>
                        
                    </section>

                    <section style={{display: 'flex', justifyContent: "center"}}>
                        <div>
                        <ListGroup>
                            <ListGroup.Item>Item 1</ListGroup.Item>
                            <ListGroup.Item>Item 2  </ListGroup.Item>
                            <ListGroup.Item>Item 3</ListGroup.Item>
                            <ListGroup.Item>Item 4</ListGroup.Item>
                            <ListGroup.Item>Item 5</ListGroup.Item>
                        </ListGroup>
                        </div>
                        
                    </section>
                </div>

                <Footer/>
                
            </div>
          );
    }
}

export default ListMenu;
