import React, {useContext, useEffect, useState,useRef} from 'react'
import { useLocation } from 'react-router-dom';


  const AppContext = React.createContext()
  const AppProvider = ({children}) =>{
    const [roth, setroth] = useState("");
    const church = useRef(window.location.pathname);
    const location = useLocation();


    const [openMenu, setOpenMenu] = useState(false);

    // const usePathname = () => {
    //   return ;
    // }
    // const [handleCurrentChurch, sethandleCurrentChurch] = useState('');


 

    const handleTest =  () =>{
      if (location.pathname === "/"){
        setroth("")
      }
      if (location.pathname === "/amsterdam"){
        setroth("ams")
      }
      if (location.pathname === "/rotherdam"){
        setroth("roth")
      }
      

    }

 
   


    // const handleOpenChurch = (e) =>{
    //   church.current = e.currentTarget.id;
    //   if (roth === church.current) {
    //     setroth("");
    //   } else {
    //     setroth(church.current);
    //   }
    //     setOpenMenu(false)
    //  }
     
    //  const handleCloseChurch = () =>{
    //   setroth("")
    //   setOpenMenu(false)
    
    // }
    // useEffect(() => {
    //   if (roth){
    //   }
    //   console.log(roth)


    // },[roth]);
   
    useEffect(() =>{
      handleTest()
      console.log(location.pathname)
    },[location])
     
      //  useEffect(() => {
    
      //   localStorage.setItem('roth', JSON.stringify(roth));
    
      // }, [roth]);

      return (
        <AppContext.Provider value={{roth, setroth, openMenu, setOpenMenu, church ,handleTest }}>
            {children}
        </AppContext.Provider>
    )

}


export  const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}
