import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import DataArray from './DataArray';
import Card from './Card';
import Error from './Error';
const App = () => {
    const [search,setSearch]= useState("");
    const mainList = DataArray;
    const [list,setList] = useState(mainList);
    const value = (data)=>{
        setSearch(data);
    }
    const goBack = ()=>{
        setList(mainList);
    }
    useEffect(()=>{
            const newList = mainList.filter((current)=>{
                return current.name.toLowerCase().includes(search.toLowerCase());
            })
            setList(newList)
    },[search]);
    return <>
        <Nav onClick={value} />
        <div className="container">
        {list.length!==0?list.map((current) => 
            <Card
                key={current.id}
                data={current}
            />)
        :<Error onClick={goBack}/>}
    </div>
    </>;
} 
export default App;