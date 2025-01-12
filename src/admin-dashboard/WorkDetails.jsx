import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useLoaderData, useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_url= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const WorkDetails = () => {
    const work = useLoaderData()
    const [previewImage, setPreviewImage] = useState(work.workImage);
    const navigate= useNavigate()
    const [handleLoading, setHandleLoading]= useState(false)
    const axiosSecure = useAxiosSecure();

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const tempUrl = URL.createObjectURL(file);
        setPreviewImage(tempUrl);
      }
    };

    const handleDelete = async (e) => {
      e.preventDefault();
      setHandleLoading(true);
      const response = await fetch(`http://localhost:5000/works/delete/${work._id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin-dashboard/works");
        setHandleLoading(false);
      } else {
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
        setHandleLoading(false);
      }
      setHandleLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHandleLoading(true)
        const form = e.target;
        const image = form.image.files[0];
        const workTitle = form.title.value;
        const madeOn = form.madeOn.value;
        const token = localStorage.getItem("token");
      
        if (image) {
          const formData = new FormData();
          formData.append("image", image);
      
          try {
            const imageResponse = await fetch(image_hosting_url, {
              method: "POST",
              body: formData,
            });
            const imageData = await imageResponse.json();
      
            if (imageData.success) {
              const updates = { workTitle, madeOn, workImage: imageData.data.url };
              const updateResponse = await axiosSecure.patch(`/works/${work._id}`, updates);
              
              if (updateResponse.modifiedCount== '1') {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  setHandleLoading(false)
              } else {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  setHandleLoading(false)
              }
            } else {
                Swal.fire({
                    position: "top",
                    icon: "error",
                    title: "Something went wrong",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  setHandleLoading(false)
            }
          } catch (error) {
            Swal.fire({
                position: "top",
                icon: "error",
                title: "Something went wrong",
                showConfirmButton: false,
                timer: 1500
              });
          }
        } else {
            const updates = { workTitle, madeOn,};
            const updateResponse = await axiosSecure.patch(`/works/${work._id}`, updates);
            if (updateResponse.modifiedCount== '1') {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Updated successfully",
                showConfirmButton: false,
                timer: 1500
              });
            } else {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        setHandleLoading(false)
      };
    return (
      <div className="h-full">
        <div className="bg-bodyGray w-full p-10 flex justify-center items-center h-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-fit">
            <div className="flex items-center justify-center mb-6 relative group cursor-pointer">
              <input onChange={handleImageChange} name="image" className="absolute top-0 left-0 h-full w-full z-10 cursor-pointer opacity-0" type="file" />
              <img className="sm:w-[50vw] w-full" src={previewImage} alt={work.workTitle} />
              <div className="absolute w-full h-full bg-black bottom-0 left-0 bg-opacity-50 group-hover:opacity-100 opacity-0 duration-300 flex justify-center items-center">
                <div className="text-center flex flex-col items-center">
                  <FiUpload size={40} color="#fff" />
                  <div className="text-white text-xl mt-2">Upload picture</div>
                </div>
              </div>
            </div>
            <input name="title" className="border border-textGray placeholder:text-neutral-700 placeholder:text-lg outline-none px-3 py-2" type="text" defaultValue={work?.workTitle} required />
            <input name="madeOn" className="border border-textGray placeholder:text-neutral-700 placeholder:text-lg outline-none px-3 py-2" type="text" defaultValue={work?.madeOn} required />
            <div className="flex justify-between">
              <button onClick={handleDelete} className="bg-amber-600 text-white w-fit px-6 py-2 cursor-pointer" type="button" >{handleLoading ? <BounceLoader size={26} color="currentColor" /> : 'Delete'}</button>
              <button className="bg-bodyBlack text-white w-fit px-6 py-2 cursor-pointer" type="submit" >{handleLoading ? <BounceLoader size={26} color="currentColor" /> : 'Save Change'} </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default WorkDetails;