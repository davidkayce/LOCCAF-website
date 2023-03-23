import React, {useContext, useEffect, useState,useRef} from 'react'



  const AppContext = React.createContext()
  const AppProvider = ({children}) =>{
    const [roth, setroth] = useState(JSON.parse(localStorage.getItem('roth')) || "");
    const church = useRef("");

    const [openMenu, setOpenMenu] = useState(false);

  //  const GetPreviousRoth = (value) =>{
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   }, [value]);
  //   return ref.current;
  //  } 


    const handleOpenChurch = (e) =>{
      church.current = e.currentTarget.id;
      if (roth === church.current) {
        setroth("");
      } else {
        setroth(church.current);
      }
        setOpenMenu(false)
     }
     
     const handleCloseChurch = () =>{
      setroth("")
      setOpenMenu(false)
    
    }
   
     
       useEffect(() => {
    
        window.localStorage.setItem('roth', JSON.stringify(roth));
    
      }, [roth]);

      return (
        <AppContext.Provider value={{roth, setroth, openMenu, setOpenMenu, handleOpenChurch, church , handleCloseChurch, }}>
            {children}
        </AppContext.Provider>
    )

}


export  const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}
