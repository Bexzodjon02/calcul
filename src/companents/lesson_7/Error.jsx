import React from 'react'
import ErrorVideo from "./145678444-40650a1b-c382-463b-bc22-df28c6f9c262.gif"
import {Link} from "react-router-dom";

export default function error() {
  return (
    <div>
         <Link to={"/login"}>Qayta kiritsh</Link>
        <iframe width="800" height="400" src={ErrorVideo} ></iframe>
        </div>
  )
}
