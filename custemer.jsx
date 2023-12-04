import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

export const Custemer = () => {
    const { custemerID } = useParams();

    // const updateCustemer = () => {

    //     const newCust = Object.fromEntries([...(new FormData(form)).entries()]);

    //     custemerID.name=newCust.name;
    //     custemerID.email=newCust.email;
    //     form.reset();

    // }


    useEffect(() => {
        // updateCustemer();
    }, [custemerID]
  )
    return <div>
        <h3>deataile of custumer: {custemerID}</h3>

        <form name="cangeDeatailes" onChange={e=> updateCustemer()}>
            <div>
                <label htmlFor="fullName">Name</label>
                <input type="text" name="name"></input>
            </div>
            <div>
                <label htmlFor="fullName">email</label>
                <input type="email" name="email"></input>
            </div>
            <button type="reset">change info </button>
        </form>

    </div>

}