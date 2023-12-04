import React from "react";
import{custemers}from '../data/custemers';

export const Stastics=()=>{
    let countCustemers=0;

    custemers.forEach(custemer => {
        countCustemers++;
    });
    let countAcourdingToYear=0;
    custemers.filter(custemer=>custemer.joinDate===2023).forEach(element=>{
        countAcourdingToYear++;
    })
    
    return<div>
        <h3>Custemers Stastics:</h3>
        <h4>Amount of custemers:{countCustemers}, custemers in the same year:{countAcourdingToYear}</h4>
      
    </div>

}