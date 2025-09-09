import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { EnquiryList } from "./enquiry/EnquiryList";
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function Enquiry() {
  let [enquiryList, setEnquiryList] = useState([]);
  let [formData, setFormdata] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    id: "",
  });

  let saveEnquiry = (e) => {
    e.preventDefault();

    if (formData._id) {
      axios
        .put(
          `https://mern-crud-app-backend-8r4q.onrender.com/api/website/enquiry/update/${formData._id}`,
          formData
        )
        .then((res) => {
          console.log(res.data);
          getAllenquiry();
          toast.success("Enquiry updated Successfully");
          setFormdata({
            name: "",
            email: "",
            number: "",
            message: "",
            id: "",
          });
          getAllenquiry();
        });
    } else {
      axios
        .post("https://mern-crud-app-backend-8r4q.onrender.com/api/website/enquiry/insert", formData)
        .then((res) => {
          console.log(res.data);
          getAllenquiry();
          toast.success("Enquiry Saved Successfully");
          setFormdata({
            name: "",
            email: "",
            number: "",
            message: "",
          });
        });
    }
  };

  let getAllenquiry = () => {
    axios
      .get("https://mern-crud-app-backend-8r4q.onrender.com/api/website/enquiry/view")
      .then((res) => {
        return res.data;
      })
      .then((finalData) => {
        setEnquiryList(finalData.list);
      });
  };

  let getNameValue = (e) => {
    let { name, value } = e.target;
    let onlyLetters = /^[A-Za-z\s]*$/;

    if (onlyLetters.test(value)) {
      let oldData = { ...formData };
      oldData[name] = value;
      setFormdata(oldData);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Only Alphabets are allowed!",
      });
    }
  };

  let getValue = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    let oldData = { ...formData };
    oldData[inputName] = inputValue;
    setFormdata(oldData);
  };

  useEffect(() => {
    getAllenquiry();
  }, []);

  return (
    <div>
      <ToastContainer />
      <h1 className="py-6 text-center font-bold text-[30px]">User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] gap-4">
        <div className="p-4 bg-gray-200">
          <h2 className="text-[20px] font-bold">Enquiry Form</h2>
          <form action="" onSubmit={saveEnquiry}>
            {formData._id}
            <div className="py-3">
              <Label htmlFor="name" className="!text-red-600">
                Name
              </Label>
              <TextInput
                type="text"
                name="name"
                value={formData.name}
                onChange={getNameValue}
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="py-3">
              <Label htmlFor="name" className="!text-red-600">
                Email
              </Label>
              <TextInput
                type="text"
                name="email"
                value={formData.email}
                onChange={getValue}
                placeholder="example@123"
                required
              />
            </div>

            <div className="py-3">
              <Label htmlFor="name" className="!text-red-600">
                Number
              </Label>
              <TextInput
                type="text"
                name="number"
                value={formData.number}
                onChange={getValue}
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="py-3">
              <Label htmlFor="name" className="!text-red-600">
                Message
              </Label>
              <Textarea
                placeholder="Leave a comment..."
                name="message"
                value={formData.message}
                onChange={getValue}
                required
                rows={4}
              />
            </div>

            <div py-3>
              <Button type="submit" className="w-[100%]">
                {formData._id ? "Update" : "Save"}
              </Button>
            </div>
          </form>
        </div>
        <EnquiryList
          data={enquiryList}
          getAllenquiry={getAllenquiry}
          Swal={Swal}
          setFormdata={setFormdata}
        />
      </div>
    </div>
  );
}
