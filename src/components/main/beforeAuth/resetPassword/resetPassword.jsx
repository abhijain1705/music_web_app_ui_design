import React from 'react'
import Wrapper from '../parts/wrapper';
import Input from '../parts/input';
import Button from '../parts/button';

const ResetPassword = () => {
    return (
        <Wrapper>
            <h3 className='text-[30px] font-[600]' >Reset Password</h3>
            <Input label={'Mobile Number'} />
            <Input label={'OTP'} />
            <div className='w-full flex items-end justify-end'>
                <a href='#' className='font-[600]  text-[12px] cursor-pointer'>Resend it?</a>
            </div>
            <Button label={'Submit'} />
            <div className='mb-8'></div>
        </Wrapper>
    )
}

export default ResetPassword;