import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_url= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddWork = () => {
    const [previewImage, setPreviewImage] = useState('');
    const navigate= useNavigate()
    const [handleLoading, setHandleLoading]= useState(false)

    const handleImageChange = (e) => {
      const image = e.target.files[0];
      if (image) {
        const tempUrl = URL.createObjectURL(image);
        setPreviewImage(tempUrl);
      }
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      setHandleLoading(true)
      const form = e.target;
      const workTitle = form.title.value;
      const madeOn = form.madeOn.value;
      const image = form.image.files[0];
      const formData = new FormData();
      formData.append("image", image);

      try {
        const imageResponse = await fetch(image_hosting_url, {
          method: "POST",
          body: formData,
        });
        const imageData = await imageResponse.json();

        if (imageData.success) {
          const newWork = { workTitle, madeOn, workImage: imageData.data.url };

          const Response = await fetch(`https://anas-portfolio-server.vercel.app/works/add-new`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newWork),
          });
          const addedData = await Response.json();

          if (Response.ok) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate('/admin-dashboard/Works')
          } else {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Something went wrong",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      setHandleLoading(false)
    };

    return (
        <div className="h-full">
                <div className="bg-bodyGray w-full p-10 flex justify-center items-center h-full">
                  <form onSubmit={handleSubmit} className={`flex flex-col gap-3 w-fit`}>
                      <div className={`w-[50vw] flex justify-center items-center relative ${!previewImage && 'py-20'}`}>
                        <img className={`z-20 ${previewImage && 'w-full h-max'}`} src={previewImage} alt="" />
                        <input onChange={handleImageChange} name="image" className="absolute z-10 top-0 left-0 opacity-0 h-full w-full cursor-pointer" type="file" required/>
                        <div className="text-center absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-30">
                          <FiUpload size={40} color="#fff" />
                          <div className="text-white text-xl mt-2">Upload picture</div>
                        </div>
                      </div>
                    <input name="title" className="border border-textGray placeholder:text-neutral-700 placeholder:text-lg outline-none px-3 py-2" placeholder="Work title" type="text"  required/>
                    <input name="madeOn" className="border border-textGray placeholder:text-neutral-700 placeholder:text-lg outline-none px-3 py-2" type="text" placeholder="Made on" required/>
                    <div className="flex justify-end">
                    <button className="bg-bodyBlack text-white w-fit px-6 py-2 cursor-pointer" type="submit" >{handleLoading ? <BounceLoader size={26} color="currentColor" /> : 'Add Work'} </button>
                    </div>
                  </form>
                </div>
              </div>
    );
};

export default AddWork;