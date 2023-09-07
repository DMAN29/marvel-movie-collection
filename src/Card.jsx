import React from "react";
const Card = ({data}) => <>
    <div className="cards" title={data.discription}>         
    {<img
        src={data.imgsrc}
        alt="Marvel Hero"
    />}
    <span className="details">
        {data.name}
    </span>
    {data.rating===0?<span className="soon">Coming soon</span>:<>
    <p>
        <br />
        <span>📆 {data.releseDate}</span>
        <br />
        <span className="flex">
            <span>🎥 : {data.duration}</span>
            <span>⭐ : {data.rating}</span>
        </span>
    </p>
    <div>
    <button className="btn">
        <a href={data.link} rel="noreferrer" target="_blank">Watch Now</a></button>
    </div>
    </>
}
    </div> 
        
</>;

export default Card;