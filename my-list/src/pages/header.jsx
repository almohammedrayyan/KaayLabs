import React, { useState } from "react";
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBSpinner,
    MDBBtn
  } from "mdb-react-ui-kit";
import { searchStart, searchUserStart } from "../redux/action";
import { useDispatch } from "react-redux";
const Header = ()=>{
    const [searchText,setSerachText] = useState("")
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(searchUserStart(searchText));
        setSerachText("");
    }
return(
    <div>
    <form onSubmit={handleSubmit} className="d-flex input-group w-auto">
        <div>
        <input type="text" className="form-control" placeholder="search" value={searchText} onChange={(e)=>setSerachText(e.target.value)}/>
        <MDBBtn color="dark" type="submit">Search</MDBBtn>
        </div>
    </form>
    </div>
)
}
export default Header