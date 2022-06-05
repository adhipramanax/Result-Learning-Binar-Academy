import React from "react";
import react, { useState } from "react";

export default function formUpload() {
  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  console.log(file);

  useEffect(() => {
    let fileData = false;
    if (file !== "") {
      fileData = new FileReader();
      fileData.onload = (e) => {
        if (e.target.result) {
          setFileUrl(e.target.result);
        }
      };
      fileData.readAsDataURL(file);
    }
  }, [file]);
  return (
    <div>
      {file !== " " ? (
        <img src={fileUrl} alt="Uploaded_images" />
      ) : (
        "tidak ada image"
      )}
      <form>
        <input
          type="file"
          name="upload_gambar"
          id="Upload_gambar"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button>Submit Upload</button>
      </form>
    </div>
  );
}
