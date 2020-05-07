import React from 'react';
import Header from './header'
import Footer from './footer'
import { Table } from 'react-bootstrap';


class TableMenu extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <div style={{textAlign: 'center', margin: 50}}>
                    <h1>
                        Table:
                    </h1>
                    <section>
                        <p>
                        Esse componente é uma tabela. Uma de suas principais características é sua alta personalização, com várias opções de estilização, recursos como hover e diferenciação de tamanhos, além de responsividade.
                        </p>
                        
                    </section>

                    <section style={{display: 'flex', justifyContent: "center"}}>
                        <div>
                        <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                              </tr>
                            </tbody>
                        </Table>
                        </div>
                        
                    </section>
                </div>

                <Footer/>
                
            </div>
          );
    }
}

export default TableMenu;
