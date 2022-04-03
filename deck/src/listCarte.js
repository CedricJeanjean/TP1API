import React from "react";
import ComponentCard from './componentCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class ListCarte extends React.Component {
    render() {
        let i = 0;
        if(this.props.liste != null){
            const liste  = this.props.liste;
            return  Object.keys(liste).map((key, index) => { 
                return <div key={key} onClick={() => {
                    this.props.listedeck.push(liste[key]);
                    this.props.liste.splice(key,1);
                    this.props.updateState(this.props.liste, this.props.listedeck)
                }
            } className="col-4"> <ComponentCard elem={liste[key]}/> </div>
            })
        }
    }
 }

 export default ListCarte;