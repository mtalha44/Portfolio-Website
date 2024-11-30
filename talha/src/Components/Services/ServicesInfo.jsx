import "./Services.css"
export const ServicesInfo = () => {
    const Services = [
       {
          icon : [
              <i key="1" className='bx bx-book-content skil-icon'></i>,
              <i key="2" className='bx bx-code-alt skil-icon'></i >,
              <i key="3" className='bx bx-palette skil-icon'></i>
            ]
            ,
            name : [
                "Product Designer",
                "UI/UX Designer",
                "Visual Designer"
            ]
            ,
            option : (
                <>
                   View more <i className='bx bx-right-arrow-alt services-option-icon'></i> 
                </>
            )
       }
    ]
    return (
        <>
        
        {
            Services.map( ( Services , index ) => (
                <div key={index} className="services-info-card"> 
                     {Services.icon.map( (icon , idx ) =>(
                        <div key={idx} className="services-info-card-details" >
                            {icon}
                            <h2>{Services.name[idx]}</h2>
                            <div className="services-further-details flex-row">{Services.option}</div>
                        </div>
                     ))}                     
                </div> 
            ))
        }
        </>
    )
}