import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='login-form pb-5 p-5 pt-5'>
            <div>
                <h2> Create Account</h2>

                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <Button block size="lg" type="submit" >
                        Login
                    </Button>
                </form>
                <p>Already have an account?<Link to="./login">Login</Link></p>

                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In </button>
            </div>
        </div>
    );
};

export default Register;