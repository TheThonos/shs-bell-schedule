import { useState } from 'react';

var classColors = ['#FF8800', '#FFFF00', '#0000FF', '#00FF00', '#AAAA66', '#FFFFFF', '#FF0000'];

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

    /*
    Makes dropdown appear around current selection (but not centered around current selection, needs to get fixed)
    New format is:
    <div.selector>
        <span/> (repeated some amount of times)
        <span.selected/>
        <span/> (repeated some amount of times)
    </div.selector>

    App.css currently still based on old layout, so new layout will look weird.

    Set to false to view old layout, what I showed before
    Old format is:
    <div.selector>
        <span/>
        <div.selector-menu>
            <span/> (repeated 7 times)
        </div.selector-menu>
    </div.selector>

    */
    let useNewLayout = true;

    if(useNewLayout){
        return (
            <div className="selector">
                {
                    classColors.map((color, i) => {
                        if(i == curClass) return <span className='selected' onClick={handleClick} style={{backgroundColor: classColors[curClass]}}>&nbsp;</span>;
                        if(isOpen) return <SelectorOption value={i} onUpdate={handleUpdate} />
                    })
                }
            </div>
        )
    } else {
        return (
            <div className="selector">
                <span onClick={handleClick} style={{backgroundColor: classColors[curClass]}}>&nbsp;</span>
                {isOpen && <SelectorMenu onUpdate={handleUpdate}/>}
            </div>
        )
    }
}

function SelectorMenu({onUpdate}){
    return (
        <div className="selector-menu">
            {
                classColors.map((el, i) => {
                    return <SelectorOption value={i} onUpdate={onUpdate} />
                })
            }
        </div>
    )
}

function SelectorOption({value, onUpdate}){
    return (
        <span value={value} onClick={() => onUpdate(value)} style={{backgroundColor: classColors[value]}}>&nbsp;</span>
    )
}