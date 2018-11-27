import React, {Component} from 'react';
import './Gallery.css';


class Screen extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            sliderPhotos: [
                'http://malek.ovh/rwc/resources/Img/1.jpg',
                'http://malek.ovh/rwc/resources/Img/2.jpg',
                'http://malek.ovh/rwc/resources/Img/3.jpg',
                'http://malek.ovh/rwc/resources/Img/4.jpg',
            ],

        };
    }

 

     
 render() {
    const style = {
     

        width: '100%',
        height: '180px',
        margin: '50px 5px',
        borderRadius: '10% 10% 10% 10%',
        boxShadow: '0px 1px 30px 1px rgba(0,0,0,1)'
        
}
        return (
      
        <div className="Gallery">
            
                     
                    <img className="Slide " style={style}  src={this.state.sliderPhotos[0]} alt="gallery1"  />
                    <img className="Slide " style={style}  src={this.state.sliderPhotos[1]} alt="gallery2"   />
                    <img className="Slide " style={style}  src={this.state.sliderPhotos[2]} alt="gallery3"  />
                    <img className="Slide " style={style}  src={this.state.sliderPhotos[3]} alt="gallery4"   />
               
                 {/* <div className="Panel">
            <button className="toggle" onClick={() => this.toggleHandler()}>{this.state.auto}</button>
        </div> */}
        </div>
       
       
        );
    }
}
export default Screen;