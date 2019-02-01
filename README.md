This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Imgur API

  The purposes of this project is to understand Web APIs using React and Axios. I picked Imgur because of it's large collection of images that are uploaded daily by thousands of users. This serves as a guide for anybody interesting in using the API. The application currently display the user album, trending galleries, and a search bar that finds galleries based on what is entered. 

### Axios

  Axios is used to perform HTTP request to the Imgur API and can be installed via `npm install axios`. This is the syntax below used to make the request. The `method` property can be set to any of the HTTP request method such as `POST` or `GET`. The `url` will depend on the type of data that is to being accessed such as `https://api.imgur.com/3/album/{{albumHash}}/images` for Album images. The header requires a client id and a Imgur must be set up in order to obtain one. The API documentation for Imgur will provide step by step instruction on how to set that up and other important information(https://apidocs.imgur.com/). Once the request is successful it will return a JSON object and can be accessed via the `response` parameter. 


```
  axios({  
        method: 'get',
        url:  ,
        headers: { 'authorization': 'Client-ID ' + this.state.client_id  }
    }).then((response) => {        
       })
    }).catch((error) => {
        console.log(error);      
    });

    }

```

### Imgur Album

Images from a user Album can be retrieved only if the client id is known. This is the url `https://api.imgur.com/3/album/{{albumHash}}/images` and the `albumhash` is the last letter/numbers of the user url address for ther album. The application will display all current images in the user's album and will update after the they upload another images. 

![User Albums](/src/image/condition2.png)

## Gallery Trending Images

![Gallery Trends](/src/image/condition.png)


## Gallery Search bar

The search bar used in the application to find specfic galleries on imgur makes use of the `https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=cats` url. The parameters such as `sort` and `page` are optional and are used to sort out the images. The `q` paramter is for search queries and can be changed for more advance searches. See the Imgur API documentation to read more about the different options.  

```
  axios({  
        method: 'get',
        url: 'https://api.imgur.com/3/gallery/search/top/week/1?q_all=' + {{searchstring}}  ,
        headers: { 'authorization': 'Client-ID ' + this.state.client_id  }
    }).then((response) => {        
       })
    }).catch((error) => {
       
    });

    }

```
![Search Bar](/src/image/search.png)

*Not all images may display because some galleries links will have multiple images. Must find the specfic property in the JSON object to  display all them. Otherwise it will not show up in the search or trending. Works with those that have one images.
