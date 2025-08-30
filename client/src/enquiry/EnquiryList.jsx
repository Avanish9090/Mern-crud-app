import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
// import { toast } from "react-toastify";

export function EnquiryList({ data, getAllenquiry, Swal, setFormdata }) {
  let editSingle = (enId) => {
    axios
      .get(`http://localhost:8020/api/website/enquiry/find/${enId}`)
      .then((res) => {
        let data = res.data;
        setFormdata(data.resultRes);
      });
  };

  let deleteRow = (delId) => {
    Swal.fire({
      title: "Do you want to delet Enquiry?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8020/api/website/enquiry/delete/${delId}`)
          .then(() => {
            // toast.success("Data deleted");
            getAllenquiry();
          });
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div className="p-4 bg-gray-200">
      <h2 className="text-[20px] font-bold mb-4">Enquiry List</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Number</TableHeadCell>
              <TableHeadCell>Meassage</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Delete</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {data.length >= 1 ? (
              data.map((item, index) => {
                return (
                  <TableRow
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.number}</TableCell>
                    <TableCell>{item.message}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => editSingle(item._id)}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        {" "}
                        Edit
                      </button>
                    </TableCell>
                    <TableCell>
                      <button
                        onClick={() => deleteRow(item._id)}
                        className="font-medium text-red-600 hover:underline"
                      >
                        {" "}
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow className="text-center font-bold text-[40px]">
                No Data Found !
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
