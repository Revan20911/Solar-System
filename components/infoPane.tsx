import { Planet } from "./types";
import React, { useEffect, useState } from "react";

const InfoBar = ({Info}: {Info: Planet | null}) => {

    return(
        <div className='w-96 h-screen bg-white fixed left-0 z-40'>
            <h1 >{Info?.name}</h1>
            <h2>{Info?.mass}</h2>
        </div>
    )
}

export default InfoBar;