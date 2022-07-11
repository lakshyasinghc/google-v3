import Header from '../../components/Header'; 
import {getProviders,signIn}from 'next-auth/react'; 

export default function signin({providers}) {
    console.log("provider  value is ", providers);
  return (
    <>
        <Header/>
        <div className="mt-40">
            {Object.values(providers).map(
                (provider)=>(
                    <div key= {providers.name} className="flex flex-col items-center">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jEnEqftEVGcmHPOEiQ4NdgHaDt%26pid%3DApi&f=1" alt="google-image"
                        className='w-60 object-cover '
                        />
                           <p className='text-sm italic my-10 text-center' >This Website is Created for learning purposes</p>
                        <button className={ "bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"} onClick={ ()=>signIn(provider.id,{callbackUrl:"/"})}>Sign in with {provider.name}</button>
                    </div>
                )
            )}
        </div>
    </>
  )
}
export async function getServerSideProps(){
    const providers= await getProviders(); 
    return{
        props:{
            providers
        },
    }
}