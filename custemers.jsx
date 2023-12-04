import React from "react";
import{custemers}from '../data/custemers';
import {useParams,Link} from 'react-router-dom';

export const Custemers=()=>{
    // const {id}=useParams();

    return<div>
        <h3>deataile of custumers:</h3>
        <ul>
        {custemers
            // .filter(custemer=>custemer.id===parseInt(id))
            .map(custemer => <li key={custemer.id} > <Link to={'/custemer/' + custemer.id}>{ custemer.name }</Link></li>)}

        </ul>
       
    </div>

}