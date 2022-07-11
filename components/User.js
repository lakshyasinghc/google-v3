import {useSession,signIn,signOut}from 'next-auth/react'; 
export default function User(){
    const{data:session}=useSession(); 
    console.log("the value of session is ",session);
    if(session){
        return(
            <>
                <img src={session.user.image} onClick={signOut} alt="user-image" className='h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1'></img>
            </> 
        )
    }
    return(
        <>
            <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 
            hover:shadow-md' onClick={signIn}>Sign in</button>
        </>
    )
}