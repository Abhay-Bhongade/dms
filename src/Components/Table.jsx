import { useState,useEffect } from 'react'
import './App.css'
import {
  Pagination,
  Stack,
  CircularProgress,
  Typography,
} from "@mui/material";
import axios from 'axios';

function Table() {
const [data,setData] = useState([]);
const [loading,setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 9;
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log("res", res);
      setData(res?.data)
    } catch (error) {
      console.log("error while fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

  
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data?.slice(startIndex, endIndex);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
     <h3>React Table</h3>
     {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress
            style={{
              color: "orange",
            }}
          />
        </div>
      ) : (
        <div className="container-fluid bg-white">
          <div className="row">
            <div className="col-md-12 mb-2  mt-3">
              <div className="row">
                <div className="col-md-6">
                  <Typography variant="h5" style={{ color: "#ff8000" }}>
                 
                  </Typography>
                </div>

                <div className="col-md-6">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            {getCurrentPageData().length === 0 ? (
              <div className="commonfornodata">
                <h5 className="text-muted">Nothing to Display...</h5>
              </div>
            ) : (
              <>
                <div className="col-md-12 mt-3">
                  <div className="table-wrapper">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="mx-2">Sr.No</th>
                          <th>Username</th>
                          <th>Website</th>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>City</th>
                          <th>Suite</th>
                          <th>Street</th>
                          <th>Price</th>
                          <th>Stock</th>
                          <th>Available</th>
                          <th>In Stock</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getCurrentPageData().map((user, index) => (
                          <tr
                            key={user?.id}
                          >
                            <td>{user?.username}</td>
                            <td>{user?.website}</td>
                            <td>
                              {user?.name}
                            </td>
                            <td>{user?.phone}</td>
                            <td>
                            {user?.email}
                            </td>
                            <td>{user?.address?.city}</td>
                            <td>{user?.address?.street}</td>

                            <td>
                              {user?.address?.suite}
                            </td>
                            <td>
                            {user?.email}
                            </td>
                            <td>{user?.phone}</td>
                            <td>{user?.address.city}</td>
                            <td>{user?.website}</td>
                            <td>{user?.name}</td>
                            <td>{user?.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            <div className="col-md-12 pagination-area">
              <Stack spacing={2}>
                <Pagination
                  count={Math.ceil(data?.length / itemsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
                  sx={{ color: "#ff8000" }}
                  variant="outlined"
                  shape="rounded"
                />
              </Stack>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Table
