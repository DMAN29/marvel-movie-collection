import React from "react";
import Card from './Card';
import DataArray from "./DataArray";
const Container = ({ search }) => <>
    <div className="container">
        {DataArray.map((current) => 
            <Card
                key={current.id}
                data={current}
            />)
        }
    </div>
</>;

export default Container;