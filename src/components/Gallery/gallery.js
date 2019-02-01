import React, { Component } from 'react';
import axios from 'axios';
import '../componentstyle.css';


class Gallery extends Component {

    state = {
        client_id: 'c83aab06ee186e7',
        information: [], 
        prevInfo: [], //In case comparsion is ever needed. Not currently in use.
        section: "top",
        sort: "top",
        window: ""

        
   };

    requestGalleryAPI = () => {
     
    axios({  
        method: 'get',
        url: 'https://api.imgur.com/3/gallery/' + this.state.section  + '/' +  this.state.sort + '/' + this.state.window + '/1?showViral=true&mature=false&album_previews=true' ,
        headers: { 'authorization': 'Client-ID ' + this.state.client_id  }
    }).then((response) => {
        
        //let item = JSON.parse(response.data.data)   
        var x =JSON.parse(JSON.stringify(response.data.data));       
        let data = [...x];
        //console.log(data);

        this.setState({

            information: data,
            prevInfo: data
        
        })

    }).catch((error) => {

        console.log(error);
      
    });

    }
 
    componentDidMount() {  //call API once page is rendered

        this.requestGalleryAPI();

    }

/*
   shouldComponentUpdate(nextState) {

        return this.state.information !== nextState.information

    }

      componentDidUpdate() { //updates 
   
        setTimeout(this.requestGalleryAPI ,1000);
           
    }

*/
  
  

    render() {

        return(
            <div className="request">
                 <h1>Gallery Images from Imgur</h1>
                 <div className="sectionOption">
                     <li><button onClick={() => {this.setState({window:"day"}); this.requestGalleryAPI.call(this) }}>day</button></li>
                     <li><button onClick={() => {this.setState({window:"week"}); this.requestGalleryAPI.call(this)}}>week</button></li>
                     <li><button onClick={() => {this.setState({window:"month"}); this.requestGalleryAPI.call(this)}}>month</button></li>
                     <li><button onClick={() => {this.setState({window:"year"}); this.requestGalleryAPI.call(this)}}>year</button></li>
                 </div>
                 {this.state.information.map((item,key) => {
                    return (
                        <div key={key} className="img-container"  >
                            <img  src={item.link} width="500" height="500" alt=""></img>
                            <h3><a href={item.link}>{item.title}</a></h3>
                            <li><p> Comment Count: {item.comment_count}</p> </li>
                           <li><p> Upvotes: {item.score}</p></li>
                           <li> <p> Downvotes: {item.downs}</p></li>                    
                        </div> 
                    )
                 })}
            </div>
        )
    }

}

export default Gallery;
