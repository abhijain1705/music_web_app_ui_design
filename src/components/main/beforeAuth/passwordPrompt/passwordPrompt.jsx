import React from 'react';
import Button from '../parts/button';
import Wrapper from '../parts/wrapper';

const PasswordPropmt = () => {
    return (
        <Wrapper>
        <h3 className='text-[30px] whitespace-nowrap my-4 mx-8 font-[600]' >Password Changed!</h3>
            <Button label={'Continue Login'} />
            <div className='my-4'></div>
        </Wrapper>
    )
}

export default PasswordPropmt;