import React, { useEffect, useState } from 'react';
import "../App.css"

export default function Objects() {

    const array = [
        { id: 1, username: 'anand' },
        { id: 2, username: 'vivek' },
        { id: 3, username: 'arbaz' },
        { id: 4, username: 'mati' },
        { id: 5, username: 'john' },
        { id: 6, username: 'sai' },
        { id: 7, username: 'sneha' },
        { id: 8, username: 'swati' },
        { id: 9, username: 'prashant' },
    ]
    console.log("array", array);

    //state variables
    const [items, setItems] = useState(array);
    const [data, setData] = useState([]);

    // delete function
    const handleDelete = ((id) => {

        const remove = items.filter((el) => el.id !== id)
        setItems(remove);

    })

    // fetch the API data
    useEffect(() => {

        fetch("https://randomuser.me/api").then((res) => res.json()).then((val) => {
            setData(val.results);
            console.log("val", val)
        })

    }, [])  //to avoid the re-render and render only one time.


    // https://randomuser.me/api

    // html returns

    return (
        <>
        <h1><b>User Details</b></h1>
            <table>
               
                <tr>
                    <th><b>ID</b></th>
                    <th><b>User Name</b></th>
                    <th><b>Action</b></th>
                </tr>
                {

                    // eslint-disable-next-line array-callback-return
                    items.map((el) => {
                        return (
                            <tr key={el.id}>
                                <td><b>{el.id}</b></td>
                                <td>{el.username}</td>
                                <td><button className='btn' onClick={() => handleDelete(el.id)}>Delete</button></td>
                            </tr>
                        )
                    })

                }
            </table>
          
          {/* fetch data from API */}

            <div className='second'>
            <h1><b>User Details fetch from API</b></h1>
                {
                    data.map((el) => {
                        return (
                            <div className="flex" key={el.id.name} >
                                
                                <div className='h1'><b>Gender</b> :{el.gender}</div><br />
                                <div className='h1'><b>Title</b> :{el.name.title}</div><br />
                                <div className='h1'><b>First Name</b> :{el.name.first}</div><br />
                                <div className='h1'><b>Last Name</b> :{el.name.last}</div><br />
                                <div className='h1'><b>Location</b> :{el.location.street.number}</div><br />
                                <div className='h1'><b>Street Name</b> :{el.location.street.name}</div><br />
                                <div className='h1'><b>City</b> :{el.location.city}</div><br />
                                <div className='h1'><b>Country</b> :{el.location.country}</div><br />
                                <div className='h1'><b>Postcode</b> :{el.location.postcode}</div><br />
                                <div className='h1'><b>Coordinates</b> :{el.location.coordinates.latitude}</div><br />
                                <div className='h1'><b>Longitude</b> :{el.location.coordinates.longitude}</div><br />
                                <div className='h1'><b>TimeZone</b> :{el.location.timezone.offset}</div><br />
                                <div className='h1'><b>TimeZone Description</b> :{el.location.timezone.description}</div><br />
                                <div className='h1'><b>Email</b> :{el.email}</div><br />
                                <div className='h1'><b>Login Username</b> :{el.login.username}</div><br />
                                <div className='h1'><b>DOB</b> :{el.dob.date}</div><br />
                                <div className='h1'><b>Age</b> :{el.dob.age}</div><br />
                                <div className='h1'><b>Registered date</b> :{el.registered.date}</div><br />
                                <div className='h1'><b>Registered age</b> :{el.registered.age}</div><br />
                                <div className='h1'><b>Phone</b> :{el.phone}</div><br />
                                <div className='h1'><b>Cell</b> :{el.cell}</div><br />
                                <div className='h1'><b>ID</b> :{el.id.name}</div><br />
                                <div className='h1'><b>ID</b> :{el.id.value}</div><br />
                                <div className='h1'><b>Images</b>:</div><br />
                                <img src={el.picture.large} alt="large" />
                                <img src={el.picture.medium} alt="medium" />
                                <img src={el.picture.thumbnail} alt="thumbnail" />


                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}


