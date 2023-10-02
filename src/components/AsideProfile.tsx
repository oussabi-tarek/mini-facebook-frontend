import PROFILE from '../images/profile.png';
import BIO from '../images/bio.png';
import SINCE from '../images/iconSince.jpeg';
import UpdateIcon from '../images/updateIcon.png'

const AsideProfile = () => {

    return(
        <>
            <div className="w-full flex flex-col border-1">
                
                <div className='flex flex-col p-6'>
                    <span className='flex justify-center mb-2 text-xl font-bold border-2 border-w rounded-full'>About Me</span>
                    <div className='flex mb-3'><img src={BIO} className="w-6 h-6 mr-3" alt="bio"/> Am Barry, a software engineer at university cady ayyad at Marrakech</div>
                    <div className='flex mb-3'><img src={SINCE} className="w-6 h-6 mr-3" alt="membership" />Member since 2013</div>
                </div>
                <div className='w-full bg-gray-200 p-6'>
                 <div className='flex flex-col'>
                    <div className='flex relative'>
                        <img src={PROFILE} alt="user" className='w-36 h-36 rounded-full' />
                        <p className='text-xl mt-12 ml-2 '>Boubacar Barry</p>                        
                    </div>
                </div>

               <div className='flex justify-start w-full border-b-2 p-6 border-black'>
            
                    <div className='text-center mr-auto ml-6'>
                            <div className="font-bold">10000</div>
                            <div>POSTs</div>
                        </div>
                        <div className='text-center mr-auto'>
                            <div className="font-bold">70%</div>
                            <div>Liked</div>
                        </div>
                         <div className='text-center mr-auto'>
                            <div className="font-bold">30%</div>
                            <div>Unliked</div>
                        </div>           
                    
                </div>          

                <div>
                    <div className='flex justify-center'>
                        <h4 className='text-xl font-bold text-center p-6'>Your Information</h4>
                        <button>
                            <img src={UpdateIcon} alt="update" className="w-6 h-6"/>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-4 ">
                    <div className="grid grid-cols-2 mb-6">
                        <div className='mr-2'>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value="Barry"
                                className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />     
                        </div>
                        <div> 
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value="Boubacar"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />  
                        </div>      
                    </div>

                    <div className="grid grid-cols-1 mb-6">      
                        <input
                             id="email"
                            name="email"
                            type="text"
                            value="bboubacar366@gmail.com"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />              
                    </div>
                    <div className="grid grid-cols-1 mb-6">      
                        <input
                             id="location"
                            name="location"
                            type="text"
                            value="Marrakech, Sidi Abbad 1"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />              
                    </div>    
                    </div>

                </div>

                </div>
            </div>
        </>
    )

}
export default AsideProfile;