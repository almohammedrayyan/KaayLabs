import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsersStart } from "../redux/action";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBSpinner,
  MDBBtn,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { useState } from "react";
const List = () => {
  const { users, loading, pageLimit, currentPage, paginationMode } =
    useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsersStart({ start: 0, end: 10, currentPage: 0 }));
  }, []);

  if (loading) {
    return (
      <MDBSpinner style={{ marginTop: "150px" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }

  const paginationRender = () => {
    if ( currentPage === 0 ) {
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBPaginationLink>1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBDropdownItem>
            <MDBBtn>Next</MDBBtn>
          </MDBDropdownItem>
        </MDBPagination>
    } else if ( currentPage < pageLimit - 1 && users.length === pageLimit ) {
      <MDBPagination className="mb-0">
        <MDBDropdownItem>
          <MDBBtn>Prev</MDBBtn>
        </MDBDropdownItem>
        <MDBPaginationItem>
          <MDBPaginationLink>{ currentPage + 1 }</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBDropdownItem>
          <MDBBtn>Next</MDBBtn>
        </MDBDropdownItem>
      </MDBPagination>;
    } else {
      <MDBPagination className="mb-0">
        <MDBDropdownItem>
          <MDBBtn>Prev</MDBBtn>
        </MDBDropdownItem>
        <MDBPaginationItem>
          <MDBPaginationLink>{ currentPage + 1}</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    }
  };
  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
          </tr>
        </MDBTableHead>
        {users &&
          users.map((item, index) => (
            <MDBTableBody>
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        {paginationRender()} 
      </div>
    </div>
    
  );
};
export default List;
