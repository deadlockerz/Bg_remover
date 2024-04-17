import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  position: "relative",
  // Adjust this value as needed to position the loader
};

const Container = (props) => {
  const { imgFile } = props;
  const [image, setImage] = useState(null);
  const [bgremove, setBgremove] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log(bgremove, imgFile);
  // Set image state when imgFile changes
  useEffect(() => {
    if (imgFile) {
      setImage(imgFile);
    }
  }, [imgFile]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setLoading(true);
  };

  useEffect(() => {
    if (!image) return;

    const apikey = process.env.REACT_APP_API_KEY;
    const url = "https://api.remove.bg/v1.0/removebg";

    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", image);

    fetch(url, {
      method: "POST",
      headers: {
        "X-Api-key": apikey,
      },
      body: formData,
    })
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result;
          setBgremove(result);
          setLoading(false);
          navigate("/result", { state: { bgremove: result } });
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [image, navigate]);

  return (
    <div className="mx-auto px-4 py-8 select-none md:mt-32">
      <div className="flex flex-col lg:flex-row items-center  p-4  border border-gray shadow-lg rounded-lg lg:items-start justify-center ">
        <div className="relative group flex flex-col max-w-md mt-8 md:mt-1  p-4 ">
          <div className="w-full flex flex-col sm:justify-center sm:items-center  sm:gap-8 sm:pt-8 sm:pb-16 relative">
            <div className="p-4 text-center lg:text-4xl md:text-3xl sm:text-xl font-bold text-gray-600 whitespace-normal flex-wrap">
              Upload an image to <br />
              remove the background
            </div>
            <div className="flex flex-col items-center">
              <div>
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  name="image"
                  onChange={handleChange}
                />
              </div>
              <button
                onClick={() => document.getElementById("fileInput").click()}
                type="button"
                className="border border-transparent mb-4 rounded-full font-bold transition ease-in-out text-center font-body no-underline hover:no-underline inline-flex items-center justify-center text-lg md:text-2xl px-6 md:px-8 py-2 md:py-2.5 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-700 active:scale-[0.98] focus:outline-none focus-visible:outline-none focus-visible:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue-700"
              >
                Upload Image
              </button>
              <PuffLoader
                color={"#2563eb"}
                loading={loading}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                className="mt-4"
              />
            </div>
            <div className="hidden sm:flex flex-col gap-1.5">
              <p className="m-0 font-bold text-xl text-gray-500 text-typo-secondary">
                or drop a file,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
