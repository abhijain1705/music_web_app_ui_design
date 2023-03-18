import React from 'react'
import Button from '../parts/button';
import Input from '../parts/input';
import Wrapper from '../parts/wrapper';

const Signup = () => {
    return (
        <Wrapper>
            <h3 className='text-[30px] font-[600]' >Register</h3>
            <Input isPassword={false} label={'Full Name'} />
            <Input isPassword={false} label={'Mobile Number'} />
            <Input isPassword={true} label={'Password'} />
            <Input isPassword={true} label={'Confirm Password'} />
            <Button label={'Submit'} />
            <a href='#' className='font-[600] whitespace-nowrap text-[12px] cursor-pointer'>Already have an account?</a>
        </Wrapper>
    )
}

export default Signup;