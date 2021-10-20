import React from 'react';

import doctor1 from '../../../Images/Doctor/doctor1.png'
import doctor2 from '../../../Images/Doctor/doctor2.png'
import doctor3 from '../../../Images/Doctor/doctor3.png'
import doctor4 from '../../../Images/Doctor/doctor4.png'
import doctor5 from '../../../Images/Doctor/doctor5.png'
import doctor6 from '../../../Images/Doctor/doctor6.png'
import Doctor from '../Doctor/Doctor';


const doctors = [
    {
        id: 1,
        img: doctor1,
        name: 'Alex Tumer',
        expertize: 'CLINICAL DIRECTOR'
    },
    {
        id: 2,
        img: doctor2,
        name: 'Andrea Hayes',
        expertize: 'ORTHODONTIST'
    },
    {
        id: 3,
        img: doctor3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        id: 4,
        img: doctor4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
    {
        id: 5,
        img: doctor5,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
    {
        id: 6,
        img: doctor6,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
]


const Doctors = () => {
    return (
        <div id="doctors" className='container'>
            <h5 className="text-primary mt-5" >OUR STAFF</h5>
            <h1 className="text-primary">Meet the Doctors </h1>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;