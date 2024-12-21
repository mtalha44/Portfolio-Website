

import { useState } from 'react';
import { QualificationInfo } from './QualificationInfo'
export const Qualification = () =>{
    const [ showTab , setShowTab ] = useState(1);
    return (
        <>
        <div className="qualification-section" id='qualification'>

            <div className="qualification-title flex-col">
                <h1 className="qualification-heading">Qualification</h1>
                <p className="qualification-subtitle">My Personal Journey</p>
            </div>
            <div className='qualification-tabs'>
                <span className={`flex-row ${ showTab === 0 ? 'qualification-tabs-name' : 'isActive' }`} onClick={() => setShowTab(1)}> <i class='bx bxs-graduation'></i> Education</span>
                <span className={ `flex-row ${  showTab === 1 ? 'qualification-tabs-name' : 'isActive' } `} onClick={() => setShowTab(0)}> <i className='bx bx-briefcase'></i> Experience</span>
            </div>
            <div className="qualification-info">         
                <QualificationInfo showTab = {showTab} />
            </div>
        </div>
        </>
    )
}