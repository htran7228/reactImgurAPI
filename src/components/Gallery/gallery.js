import React, { Component } from 'react';
import axios from 'axios';
import '../componentstyle.css';


class Gallery extends Component {

    state = {
        client_id: process.env.REACT_APP_IMGUR_CLIENT_ID,
        information: [], 
        prevInfo: [], //In case comparsion is ever needed. Not currently in use.
        section: "top",
        sort: "top",
        window: "" //intial state
    
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


/*

      componentDidUpdate() { //called after component is rendered
   
      
           
    }

*/

    componentDidMount() {  
    //call API once page is rendered where the window property will be empty in its intial state. Component will update afterwards
    //when selecting a sort option
    console.log("Hello");
    console.log(this.state.window);
    this.requestGalleryAPI();

   }
    

    shouldComponentUpdate(nextProps,nextState) { 
     
        console.log(nextState.window);
        return this.state.window !== nextState.window;

    }


    
  

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
