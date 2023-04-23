import React, { useState } from "react";



const PhotoUploader = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    //moge tu pisac kod 
    return (
      <div>
        {/* <h1>Upload and Display Image usign React Hook's</h1> */}
        {/* <h2></h2> /* nazwa zdjecia*/ }
        <div class="wrapped">
          <header>Upload and Display Image usign React Hook's</header>
          
            <form action="#">
                <input type="file" class="file-input"></input>
                <i class="fa-solid fa-cloud-arrow-down"></i>
                <p>Browse File to Upload</p>
            </form>
            <section class="progress-area">
                <li class="row">
                    <i class="fa-solid fa-file"></i>
                    <div class="content">
                        <div class="details">
                            <span class="name">image_name * Uploading</span>
                            <span class="percent"> 50%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress"></div>
                        </div>
                    </div>
                </li>
            </section>
            <section class="uploaded-area">
                <li class="row">
                    <div class="content">
                    <i class="fa-solid fa-file"></i>
                    <div class="details">
                            <span class="name">image_name * Uploaded</span>
                            <span class="size"> 70 KB</span>
                    </div>
                    </div>
                    <i class="fa-solid fa-check"></i>
                </li>
            </section>
        </div>
      </div>
    );
};

 
export default PhotoUploader;


//1. komponent photouploader ma pozwalac na wczytanie zdj i ma je wyświetlać
//2. zakomitowac zmiany z ładnym opisem po ang 1 zdanie
//3. stworzyc pull request na githubie 