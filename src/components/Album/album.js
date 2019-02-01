import React, { Component } from 'react';
import axios from 'axios';
import '../componentstyle.css';

class Request extends Component {


state = {
            client_id: 'c83aab06ee186e7',
            album_id: 'V5Qiy29',
            information: [], 
            prevInfo: []
            
       };

   
fetchAPI = () => {

    axios({
        method: 'get',
        url: 'https://api.imgur.com/3/album/' + this.state.album_id + '/images' ,
        headers: { 'authorization': 'Client-ID ' + this.state.client_id  }
    }).then((response) => {
        
        //let item = JSON.parse(response.data.data)
        
        var x =JSON.parse(JSON.stringify(response.data.data));
        console.log(response);
        let data = [...x];
      
        this.setState({

            information: data,
            prevInfo: data
        
        })

    }).catch((error) => {

        console.log(error);

    
    });

}

checkDescription = (descri) => {

    if(descri !== null) {

        return descri

    }


}

//will set state
componentDidMount() {
    
    this.fetchAPI();
   

};

componentDidUpdate() {
   
    setTimeout(this.fetchAPI,5000);
   
    
}

render() {

     console.log(this.state.information);

            return (
                <div className="request">
                    <h1>Album Images from Imgur</h1>
                    {this.state.information.map((item,key) => {
                    
                            return (
                            <div className="img-container" key={key}>
                                <img src={item.link} width="500" height="500" alt="Pictures from user album"></img>
                                <h3><a href={item.link}>{item.title}</a></h3>  
                                <p>{item.description}</p>                                               
                            </div> 
                            )
                     })}
                 </div>
            );
    }

}


export default Request;