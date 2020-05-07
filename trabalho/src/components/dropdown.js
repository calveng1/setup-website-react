import React from 'react';
import Header from './header'
import Footer from './footer'
import { Dropdown } from 'react-bootstrap';


class DropdownMenu extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <div style={{textAlign: 'center', margin: 50}}>
                    <h1>
                        Dropdown:
                    </h1>
                    <section>
                        <p>
                        Dropdowns são componentes alternáveis que demonstram/escondem uma lista de links, normalmente eles são encontrados em menus de sites.
                        </p>
                        
                    </section>

                    <section style={{display: 'flex', justifyContent: "center"}}>
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Ação 1</Dropdown.Item> <br/>
                                    <Dropdown.Item href="#/action-2">Ação 2</Dropdown.Item> <br/>
                                    <Dropdown.Item href="#/action-3">Ação 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        
                    </section>
                </div>

                <Footer/>
                
            </div>
          );
    }
}

export default DropdownMenu;
