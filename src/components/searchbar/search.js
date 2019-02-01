import React, {Component} from 'react';
import axios from 'axios';
import SearchBar from './searchbar'; 
import '../componentstyle.css';
import './searchbar.css';


class Search extends Component {

        state = {
            client_id: 'c83aab06ee186e7',
            searchString: "",
            search: []


        }

        searchGallery = (event) => {    
            let str = event.target.value 
            let newString = str.toString().toLowerCase();
              
            this.setState({
                searchString: newString ,
            });
            this.fetchSearchGallery();
            //console.log(str);

        }

        fetchSearchGallery = () => {

                axios({
                    method: 'get',
                    url: 'https://api.imgur.com/3/gallery/search/top/week/1?q_all=' + this.state.searchString  ,
                    headers: { 'authorization': 'Client-ID ' + this.state.client_id  }
                }).then((response) => {
                    var x =JSON.parse(JSON.stringify(response.data.data));
                    console.log(response.data.data);
                    let data = [...x];
                    this.setState({
                        search: data
                    })
                }).catch((error) => {

                    console.log(error);
                }
            )

        }

      
        render() {
            
            return (

                <div className="request">
                    <h1>Search Imgur Gallery</h1>
                    <SearchBar
                    change={this.searchGallery.bind(this)}
                    />
                    <div className="wrapper">
                     {this.state.search.map((item,key) => {
                            return (  
                                <div className="searchContainer" key={key}>   
                                    <h3><a href={item.link}>{item.title}</a></h3>  
                                    <img src={item.link} width="300" height="200" alt=""></img> 
                                    <li><p> Comment Count: {item.comment_count}</p> </li>
                                     <li><p> Upvotes: {item.score}</p></li>
                                     <li> <p> Downvotes: {item.downs}</p></li>                                                                                                 
                                     </div> 
                             )
                         })}  
                    </div>        
                 </div>
            );

        }
      }

export default Search;