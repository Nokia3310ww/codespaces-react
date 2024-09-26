import React, { useState,useEffect } from 'react';


function Item({ isPacked = false, name }) {
    return (
        <li>
            {isPacked ? name + ' ✔' : name + ' ✘'}
        </li>
    );
}

export default function ItemList() {
    const [filterText, setFilterText] = useState('');
    useEffect(()=>{
        console.log("lodded")
    },[filterText])
    
    const items = [
        { name: "Sunglass", isPacked: false },
        { name: "Ball", isPacked: true },
        { name: "Swimming Suit", isPacked: false },
    ];

    const filterList = items.filter(i =>
        i.name.toLowerCase().includes(filterText.toLowerCase())
    );

    const itemsList = filterList.map(i => (
        <Item key={i.name} name={i.name} isPacked={i.isPacked} />
    ));

    return (
        <div>
            <input
                type="text"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />
            
            <ul>
                {itemsList}
            </ul>
        </div>
    );
}
