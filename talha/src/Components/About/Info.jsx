
export const Info = ({ achievements }) => {
    return (
        <div className="achievements ">    
            {
            achievements.map(( achievement ,index ) => (
                <div key={index} className="achievement-item flex-col">
                    {achievement.icon}
                    <h4>{achievement.award}</h4>
                    <p className="detail-text">{achievement.detail}</p>
                </div>

            ))
            }
        </div>
    );
};