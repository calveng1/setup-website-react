import React from 'react';
import Header from './header'
import Footer from './footer'
import { Badge } from 'react-bootstrap';


class BadgeMenu extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <div style={{textAlign: 'center', margin: 50}}>
                    <h1>
                        Badges:
                    </h1>
                    <section>
                        <p>
                            São elementos que se adaptam ao tamanho de seu elemento pai, usando tamanhos de fonte relativos e unidades em.
                        </p>
                        
                    </section>

                    <section style={{display: 'flex', justifyContent: "center"}}>
                        <div>
                        <h1>
    Example heading <Badge variant="secondary">New</Badge>
  </h1>
  <h2>
    Example heading <Badge variant="secondary">New</Badge>
  </h2>
  <h3>
    Example heading <Badge variant="secondary">New</Badge>
  </h3>
  <h4>
    Example heading <Badge variant="secondary">New</Badge>
  </h4>
  <h5>
    Example heading <Badge variant="secondary">New</Badge>
  </h5>
  <h6>
    Example heading <Badge variant="secondary">New</Badge>
  </h6>
                        </div>
                        
                    </section>
                </div>

                <Footer/>
                
            </div>
          );
    }
}

export default BadgeMenu;
