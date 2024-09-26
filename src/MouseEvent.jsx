export default function MouseEvent(){
    return(
        <h1 
            onClick={e=>console.log("onMouseClick")}
            onMouseEnter={e=>console.log("onMouseEnter")}
            onMouseOver={e=>console.log("onMouseOver")}
            onMouseDown={e=>console.log("onMouseDown")}
            onMouseUp={e=>console.log("onMouseUp")}

        >
            Click!
        </h1>
        
    );
}