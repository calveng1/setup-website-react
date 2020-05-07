import React from 'react';
import Header from './header'
import Footer from './footer'



class Sobre extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <div style={{textAlign: 'center', margin: 50}}>
                    <h1>
                        Desenvolvedores:
                    </h1>
                    <section>
                        <h2>
                            Calven Martins
                        </h2>
                        
                    </section>

                    <section>
                        <h2>
                            Felipe Pasqualotto
                        </h2>
                        
                    </section>
                </div>

                <Footer/>
                
            </div>
          );
    }
}

export default Sobre;
