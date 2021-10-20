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
        name: 'Brandon Fuller',
        expertize: 'HYGIENIST'
    },
    {
        id: 4,
        img: doctor4,
        name: 'Elizabeth Welsh',
        expertize: 'DENTIST'
    },
    {
        id: 5,
        img: doctor5,
        name: 'Shamimur Rahman',
        expertize: 'CLINICAL DIRECTOR'
    },
    {
        id: 6,
        img: doctor6,
        name: 'Sakib Anderson',
        expertize: 'ORTHODONTIST'

    },
]


const Doctors = () => {
    return (
        <div id="doctors" className='container mb-5'>
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