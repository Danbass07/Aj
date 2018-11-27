import React, { Component } from 'react';
import Gallery from "./Gallery";
import './Home.css';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        //bind this
    }
   
   
   
   
    render() {
        return (
            <div className="Home">
             
             <Gallery />
            <div className="Text">
            <p>                An has alii clita. Ius propriae theophrastus ad. 
                Tritani efficiendi ei mea. Justo nulla corrumpit ex cum, sed unum
                 detraxit atomorum ex, et nec saepe scripta. Duis percipit singulis ut sed,
                 eligendi percipitur quo ad, duo eros nominavi ea.
            </p>
    <hr></hr>

            <p>     Case intellegebat duo at, veri graece adversarium eam ea, an 
                 eum assum voluptatum. Graecis verterem pertinacia eu ius, est ut 
                 debet consectetuer, tacimates praesent erroribus usu in. Omnium 
                 qualisque pri at. No sint cetero salutandi sed, feugait expetendis 
                 theophrastus per ut, clita tation tractatos cu cum. Nam possim inermis at, 
                 e veri soluta forensibus, soluta inermis assentior at est. Te nam facer omittam,
                  ea eruditi assentior ius, platonem constituam necessitatibus in mea. Eu elit 
                  democritum interesset eam, an graeco commune mea.
            </p>
            <hr></hr>
            <p>
                At quo vidisse corpora. Feugait accusata te nam, eam copiosae moderatius ea, at per modo animal
                . Pro et dicit ponderum contentiones, no accusam appetere vim. In pro nisl causae feugiat, 
                his atqui principes iracundia cu. An has unum brute, ex nobis exerci iuvaret duo. Has tollit
                cari conceptam an, sint quaerendum eum ad.
            </p>
            <hr></hr>

            <p>     Case intellegebat duo at, veri graece adversarium eam ea, an 
                 eum assum voluptatum. Graecis verterem pertinacia eu ius, est ut 
                 debet consectetuer, tacimates praesent erroribus usu in. Omnium 
                 qualisque pri at. No sint cetero salutandi sed, feugait expetendis 
                 theophrastus per ut, clita tation tractatos cu cum. Nam possim inermis at, 
                 e veri soluta forensibus, soluta inermis assentior at est. Te nam facer omittam,
                  ea eruditi assentior ius, platonem constituam necessitatibus in mea. Eu elit 
                  democritum interesset eam, an graeco commune mea.
            </p>
                </div>
                
            </div>
        );
    }
}
