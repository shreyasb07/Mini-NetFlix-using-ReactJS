import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Nav from './Nav';

class Upload extends Component {

  uploadWidget = () =>{
    window.cloudinary.openUploadWidget(
      {
      cloud_name: 'shreyasbhosale',
        // upload_preset: 'default-preset',
        upload_preset: 'umqocgek',
        tags: ['miniflix'],
        sources: ['local', 'url', 'google_photos', 'facebook', 'image_search']
    },
    function(error, result){
      console.log("This is the result of the last upload", result);
    });
  }

  render() {

    return (
      <div>
        <Nav />
        <h3 className="text-center">Upload Your 20-second Video in a Jiffy</h3>
        <hr/>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <button onClick=  {this.uploadWidget} className="btn btn-lg btn-info"> Upload Video</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;