import React, { useState } from 'react'

const ImageUpload = ({ onUpload }) => {
    const [selectedFile, setSelectedfile] = useState(null)

    let handelFileChange = (event) => {
        setSelectedfile(event.target.file[0]);

    };

    const handelUpload = () => {
        if (selectedFile) {
            onUpload(selectedFile);
            setSelectedfile(null)
        }
        <ImageItem />
    }


    let ImageItem = ({ image }) => {
        return (
            <div>
                <img src={image} alt="pic" />
            </div>
        )
    }



    let ImageGallary = ({ images }) => {
        return (
            <div className="App">
                <h2>Image Gallery </h2>
                <div>
                    {images.map((images, index) => (
                        <ImageItem key={index} image={images} />
                    ))}
                </div>
            </div>
        )

    }






    return (
        <div>
            <h2>Browser file</h2>
            <input type="file" onChange={handelFileChange} />
            <button onClick={handelUpload}>Upload</button>




        </div>
    )
}

export default ImageUpload