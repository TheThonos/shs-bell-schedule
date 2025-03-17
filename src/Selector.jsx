import { useState } from 'react';

var classColors = ['#FF8800', '#FFFF00'];

export default function SelectorButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [curClass, setCurClass] = useState(0);

    function handleClick(){
        setIsOpen(!isOpen);
    }

    function handleUpdate(newClass) {
        setCurClass(newClass);
        setIsOpen(false);
    }

    return (
        <div className="selector">
            <button onClick={handleClick} style={{backgroundColor: classColors[curClass]}}>&nbsp;</button>
            {isOpen && <SelectorMenu onUpdate={handleUpdate}/>}
        </div>
    )
}

function SelectorMenu({onUpdate}){
    return (
        <div className="selector-menu">
            <SelectorOption value={0} onUpdate={onUpdate}/>
            <SelectorOption value={1} onUpdate={onUpdate}/>
        </div>
    )
}

function SelectorOption({value, onUpdate}){
    return (
        <span value={value} onClick={() => onUpdate(value)} style={{backgroundColor: classColors[value]}}>&nbsp;</span>
    )
}