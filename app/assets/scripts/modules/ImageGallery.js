class ImageGallery{
    constructor(){
        let img = document.querySelectorAll('.exhibition-page--expo-image');
        let hasClass = false;
    
    
    
        document.addEventListener('click', function(event) {
    console.log(event.target)
        for(let i = 0; i < img.length; i++){
    
    img[i].classList.remove('exhibition-page--expo-resize');
    }
    
    
    
            if(event.target.tagName.toLowerCase() == 'img' && !hasClass){
                event.target.classList.add('exhibition-page--expo-resize');
                
     
                hasClass = true;
    
                event.target.style.position = 'relative';
    
                for(let i = 0; i < img.length; i++){
                img[i].style.display = 'none'
    }
          event.target.style.display = 'block'
            } else if(event.target.tagName.toLowerCase() == 'img' && hasClass){
    
                event.target.classList.remove('exhibition-page--expo-resize');
                hasClass = false;
    
                
                for(let i = 0; i < img.length; i++){
    img[i].style.display = 'block'
    }
    
            }else{
                console.log('you HAVE NOT clicked on the image')
                for(let i = 0; i < img.length; i++){
    
    img[i].classList.remove('exhibition-page--expo-resize');
    img[i].style.display = 'block';
    }
                hasClass = true;
            }
            
        })
    
    }
}

export default ImageGallery;