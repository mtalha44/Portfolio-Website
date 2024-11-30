
export const SkillsInfo = () => {

    const Skills = [
        {
          name :"Frontend",
          icon :[ 
                   <i key="1" className='bx bxl-html5' ></i> ,
                   <i key="2" className="bx bxl-css3"></i> ,
                   <i key="3" className="bx bxl-bootstrap"></i> ,
                   <i key="4" className="bx bxl-javascript"></i> ,
                   <i key="5" className="bx bxl-react"></i> ,
                   <i key="6" className='bx bxl-git'></i> 
              ] ,
          skills : [
                   "HTML" , "CSS" , "BOOTSTRAP" , "JAVASCRIPT" , "REACT" , "GIT"
              ],
          level : [
                  "Basic" , "Intermediate" , "Basic"  , "Intermediate" , "Intermediate" , "Basic"
          ]
        },
        {
            name :"Programming Languages",
            icon :[ 
                     <i key="7" className='bx bxl-c-plus-plus'></i> ,
                     <i key="8" className="bx bxs-cube-alt"></i> ,
                     <i key="9" className="bx bxs-tree"></i> ,
                     <i key="10" className="bx bx-desktop"></i> ,
                     <i key="11" className="bx bx-book"></i> ,
                     <i key="12" className="bx bx-book"></i> 
                ] ,
            skills : [
                     "C/C++" , "OOP" , "DSA" , "Assembly" , "REACT" , "GIT"
                ],
            level : [
                    "Intermediate" , "Intermediate" , "Basic"  , "Intermediate" , "Intermediate" , "Basic"
            ]     
          }
    ]
    return (
        <>
        
            {
                Skills.map(( skill , index) => (
                    <div key={index} className="skills-info">
                        <h2 className="skill-info-name">{skill.name}</h2>
                        <div className="skill-info-comp">
                            <Child icons={skill.icon} level ={skill.level} skills ={skill.skills} />

                        </div>

                  </div>
               ))
            }
        </>
    );
};

const Child = ({ icons , level , skills }) =>{
     
    return (
        <>
            {
                skills.map((skills , index ) => (
                    <div key={index} className="skill-items">
                        {icons[index]}
                        <h4 className="skill-name">{skills}</h4>
                        <p className="skill-level">{level[index]}</p>
                    </div>
                ))
            }
        </>
    )
}