import React, { useState } from "react";

function UploadImage() {
  const [image, setImage] = useState();
  //function to handle form change
  function handleFormChange(e) {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  }
  return (
    <div>
      <form>
        <input type="file" accept="image/*" onChange={handleFormChange} />
        <button className="" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}

export default UploadImage;
