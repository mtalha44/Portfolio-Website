
import "./Skills.css"
import { SkillsInfo } from "./SkillsInfo"

export const Skills = () =>{ 

    return (
        <>
            <div className="skills flex-col" id="skills">
                <div className="skills-title flex-col">
                    <h1 className="skills-title-text">Skills</h1>
                    <p className="skills-sub-title">My Technical Level</p>
                </div>
                <div className="skills-detail">
                    <SkillsInfo/>
                </div>
            </div>
        </>
    )
}