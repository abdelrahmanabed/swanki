import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ConfirmationPage = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const firstName = window.localStorage.getItem('firstName');
    setFirstName(firstName);
  }, []);

  const onHomeClick = () => {
    router.push('/');
  };
  return (
    <div className=' m-1 flex flex-col space-y-2 p-4'>
    <h1 className=' text-4xl font-thin'>Hi {firstName} </h1>
    <h1 className=' text-4xl text-main-t '>Thanks For Choosing Swanky </h1>

        <div className=' p-4 rounded-large bg-third-c'>
      <h1 className=' font-base text-3xl'>Your order is on its way! <br></br> <span className=' font-light text-base'>- You Can Call us <span className='underline'>+201000485879</span></span></h1>
      <p className=' font-extralight'>- It should arrive in 2 to 3 days. <br></br> - We will contact you if there are any issues.</p></div>
      <button onClick={onHomeClick} className='bg-main-t w-fit p-2 rounded-full'>Go to homepage</button>
    </div>
  );
};

export default ConfirmationPage;