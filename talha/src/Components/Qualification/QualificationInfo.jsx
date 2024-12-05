import "./Qualification.css"

export const QualificationInfo = ( {showTab} ) => {
    return (
        <div className="qualification-info-container"> 
             <div className={ showTab ? " left-side-qualification " : "close-qualification-tab" }>
                <LeftSideEducation/>
             </div>
             <div className={ showTab ? "close-qualification-tab" : "left-side-qualification"}>
                <LeftSideExperience/>
             </div>
             <div className="separate-section"> 
                <DotSection/>
                <DotSection/>
                <DotSection/>
                <DotSection/>
             </div>
             <div className={ showTab ? " right-side-qualification " : "close-qualification-tab" }>
                <RightSideEducation/>
             </div>
             <div className={ showTab ? "close-qualification-tab" : "right-side-qualification"}>
                <RightSideExperience/>
             </div>
        </div>
    )
}


const RightSideEducation = () => {
    const Education = [
        {
            course : "Intermediate",
            year : (
                <>
                  <i className="bx bx-calendar"></i> 2020-2021             
                </>
            ),
            institute : "Apex Group of Colleges"
        },
        {
            course : "BS Computer Science",
            year : (
                <>
                  <i className="bx bx-calendar"></i> 2020-2021             
                </>
            ),
            institute : "Govt. Science College"
        }
    ]
        return(
            <>
                {
                    Education.map(( edu ,idx ) => (
                        <div key={idx} className="education-detail">
                            <h4 className="edu-course">{edu.course}</h4>
                            <p className="edu-year ">{edu.year}</p>
                            <p className="edu-institute">{edu.institute}</p>
                        </div>
                    ))
                }
            </>
        )
}
const LeftSideEducation = () => {
    const Education = [
        {
            course : "Middle",
            year : (
                <>
                  <i className="bx bx-calendar"></i> 2020-2021             
                </>
            ),
            institute : "Ameen Model High School"
        },
        {
            course : "Matric",
            year : (
                <>
                  <i className="bx bx-calendar"></i> 2020-2021             
                </>
            ),
            institute : "City Stepping Stone School"
        }
    ]
        return(
            <>
                {
                    Education.map(( edu ,idx ) => (
                        <div key={idx} className="education-detail">
                            <h4 className="edu-course">{edu.course}</h4>
                            <p className="edu-year ">{edu.year}</p>
                            <p className="edu-institute">{edu.institute}</p>
                        </div>
                    ))
                }
            </>
        )
}

const LeftSideExperience = () =>{
    const Experience = [
        {
            course : "HTML Experience",
            year : (
                <>
                  <i className="bx bx-calendar"></i> 2020-2021             
                </>
            ),
            institute : "Youtube-CodeWithHarry",
        },
        {
            course : "CSS Experience",
            year : (
                <>
                  <i className="bx bx-calendar"></i> 2020-2021             
                </>
            ),
            institute : "Youtube-CodeWithHarry"
        }
    ]
    return (
             <>
                {
                    Experience.map(( exp ,idx ) => (
                        <div key={idx} className="experience-detail">
                            <h4 className="exp-course">{exp.course}</h4>
                            <p className="exp-year ">{exp.year}</p>
                            <p className="exp-institute">{exp.institute}</p>
                        </div>
                    ))
                }
            </>

    )
}
const RightSideExperience = () =>{
    const Experience = [
        {
            course : "JS Experience",
            year : (
                <>
                  <i className="bx bx-calendar"></i> 2020-2021             
                </>
            ),
            institute : "Youtube-CodeWithHarry",
        },
        {
            course : "React Experience",
            year : (
                <>
                  <i className="bx bx-calendar"></i> 2020-2021             
                </>
            ),
            institute : "Youtube-CodeWithHarry"
        }
    ]
    return (
             <>
                {
                    Experience.map(( exp ,idx ) => (
                        <div key={idx} className="experience-detail">
                            <h4 className="exp-course">{exp.course}</h4>
                            <p className="exp-year ">{exp.year}</p>
                            <p className="exp-institute">{exp.institute}</p>
                        </div>
                    ))
                }
            </>

    )
}

const DotSection = () =>{

    return(  
            <>
                <div className="separate-circles-div"></div> <div className="separate-straight-line"></div>
            </>
    )
}