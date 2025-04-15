
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import axios from "axios";

 export function getImagesByQuery(query) {
    return axios
        .get(`https://pixabay.com/api/?key=49722241-b38f1bcf58efdc2f53696c0dc&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            const data = response.data;
            if (data.hits.length === 0) {
                iziToast.show({
                    title: 'Error',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                    backgroundColor: "#ef4040",
                    messageColor: "#fff",
                    timeout: 5000,
                    progressBar: false,
                    close: true,
                    transitionIn: 'fadeInDown',
                    transitionOut: 'fadeOutUp',
                });
                
            }
                return data.hits;
            })
        
            .catch(error => {
            console.log(error);
            throw error;
        });
    
}
