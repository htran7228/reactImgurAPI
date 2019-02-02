import React from 'react';

const axu = (WrappedComponent) => {//High order component for naviagation

    const wrapper = {
        margin: '10px',
        padding: '10px'
    }
    
  
    return(props) => {

        return (
        <div style={wrapper}>
            <WrappedComponent
                {...props}
            />
            
        </div>
           

        )

    }
   

}


export default axu;