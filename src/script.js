const form = document.querySelector("form");
fileInput = form.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");



{selectedImage && (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            {/* <h1>{selectedImage}</h1> */}
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}
  
       
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            setSelectedImage(event.target.files[0]);
          }}
        ></input>
       