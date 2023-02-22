// function changeText(elementName, propertyName, firstValue, secondValue){
//     const myElement = document.getElementById(elementName);
//     if(myElement.style.propertyName === firstValue)
//     {
//         myElement.style.propertyName = secondValue;
//     }
//     else{
//         myElement.style.propertyName = firstValue;
//     }
// }
// // Bold Text in Text Area
// const boldIcon = document.getElementById('bold-icon');
// boldIcon.addEventListener('click', function(){
//     changeText('editor-text', 'fontWeight', 'bold', 'normal');
// })

const myElement = document.getElementById('editor-text');

// Adding Style after click
function addingColor (property, value){
    if(value === 'add'){
        property.style.backgroundColor = 'rgb(100 116 139)';
        property.style.color = '#fff'
    }
    else{
        property.style.backgroundColor = '';
        property.style.color = '';
    }
}

// Bold Text in Text Area
const boldIcon = document.getElementById('bold-icon');
boldIcon.addEventListener('click', function(){
    if(myElement.style.fontWeight === 'bold'){
        myElement.style.fontWeight = 'normal';
        addingColor(boldIcon, '');
    }
    else{
        myElement.style.fontWeight = 'bold';
        addingColor(boldIcon, 'add');
    }
})

// italic Text in Text Area
const italicIcon = document.getElementById('italic-icon');
italicIcon.addEventListener('click', function(){
    if(myElement.style.fontStyle === 'italic'){
        myElement.style.fontStyle = 'normal';
        addingColor(italicIcon, '');
    }
    else{
        myElement.style.fontStyle = 'italic';
        addingColor(italicIcon, 'add');
    }
})

// Under Line Text in Text Area
const underlineIcon = document.getElementById('underline-icon');
underlineIcon.addEventListener('click', function(){
    if(myElement.style.textDecoration === 'underline'){
        myElement.style.textDecoration = 'none';
        addingColor(underlineIcon, '');
    }
    else{
        myElement.style.textDecoration = 'underline';
        addingColor(underlineIcon, 'add');
    }
})


// italic Text in Text Area
const caseIcon = document.getElementById('case-icon');
caseIcon.addEventListener('click', function(){
    if(myElement.style.textTransform === 'capitalize'){
        myElement.style.textTransform = 'lowercase';
        addingColor(caseIcon, 'add');
    }
    else if(myElement.style.textTransform === 'none'){
        myElement.style.textTransform = 'uppercase';
        addingColor(caseIcon, 'add');
    }
    else if(myElement.style.textTransform === 'uppercase'){
        myElement.style.textTransform = 'capitalize';
        addingColor(caseIcon, 'add');
    }
    else{
        myElement.style.textTransform = 'none';
        addingColor(caseIcon, '');
    }
})


// Text align Left Text in Text Area
const textleft = document.getElementById('text-align-left');
textleft.addEventListener('click', function(){
    if(myElement.style.textAlign === 'left'){
        myElement.style.textAlign = 'left';
        addingColor(textleft, 'add');
        addingColor(textright, '');
        addingColor(textcenter, '');
        addingColor(textjustify, '');
    }
    else{
        myElement.style.textAlign = 'left';
        addingColor(textright, '');
        addingColor(textleft, 'add');
        addingColor(textcenter, '');
        addingColor(textjustify, '');
    }
})
// Text align right Text in Text Area
const textright = document.getElementById('text-align-right');
textright.addEventListener('click', function(){
    if(myElement.style.textAlign === ''){
        myElement.style.textAlign = 'right';
        addingColor(textright, 'add');
        addingColor(textleft, '');
        addingColor(textcenter, '');
        addingColor(textjustify, '');
    }
    else if(myElement.style.textAlign === 'left'){
        myElement.style.textAlign = 'right';
        addingColor(textright, 'add');
        addingColor(textleft, '');
        addingColor(textcenter, '');
        addingColor(textjustify, '');
    }
    else if(myElement.style.textAlign === 'right'){
        myElement.style.textAlign = 'right';
        addingColor(textright, 'add');
        addingColor(textleft, '');
        addingColor(textcenter, '');
        addingColor(textjustify, '');
    }
    else if(myElement.style.textAlign === 'center'){
        myElement.style.textAlign = 'right';
        addingColor(textright, 'add');
        addingColor(textleft, '');
        addingColor(textcenter, '');
        addingColor(textjustify, '');
    }
    else if(myElement.style.textAlign === 'justify'){
        myElement.style.textAlign = 'right';
        addingColor(textright, 'add');
        addingColor(textcenter, '');
        addingColor(textleft, '');
        addingColor(textjustify, '');
    }
    else{
        myElement.style.textAlign = '';
        addingColor(textright, '');
        addingColor(textleft, '');
        addingColor(textcenter, '');
        addingColor(textjustify, '');
    }
})

// Text align center Text in Text Area
const textcenter = document.getElementById('text-align-center');
textcenter.addEventListener('click', function(){
    if(myElement.style.textAlign === ''){
        myElement.style.textAlign = 'center';
        addingColor(textcenter, 'add');
        addingColor(textleft, '');
        addingColor(textright, '');
        addingColor(textjustify, '');
    }
    else if(myElement.style.textAlign === 'left'){
        myElement.style.textAlign = 'center';
        addingColor(textcenter, 'add');
        addingColor(textleft, '');
        addingColor(textright, '');
        addingColor(textjustify, '');
    }
    else if(myElement.style.textAlign === 'right'){
        myElement.style.textAlign = 'center';
        addingColor(textcenter, 'add');
        addingColor(textleft, '');
        addingColor(textright, '');
        addingColor(textjustify, '');
    }
    else if(myElement.style.textAlign === 'center'){
        myElement.style.textAlign = 'center';
        addingColor(textcenter, 'add');
        addingColor(textleft, '');
        addingColor(textright, '');
        addingColor(textjustify, '');
    }
    else if(myElement.style.textAlign === 'justify'){
        myElement.style.textAlign = 'center';
        addingColor(textcenter, 'add');
        addingColor(textleft, '');
        addingColor(textright, '');
        addingColor(textjustify, '');
    }
    else{
        myElement.style.textAlign = '';
        addingColor(textcenter, '');
        addingColor(textleft, '');
        addingColor(textright, '');
        addingColor(textjustify, '');
    }
})

// Text align justify Text in Text Area
const textjustify = document.getElementById('text-align-justify');
textjustify.addEventListener('click', function(){
    if(myElement.style.textAlign === 'justify'){
        myElement.style.textAlign = 'justify';
        addingColor(textjustify, 'add');
        addingColor(textleft, '');
        addingColor(textright, '');
        addingColor(textcenter, '');
    }
    else if(myElement.style.textAlign === 'left'){
        myElement.style.textAlign = 'justify';
        addingColor(textjustify, 'add');
        addingColor(textleft, '');
        addingColor(textright, '');
        addingColor(textcenter, '');
    }
    else if(myElement.style.textAlign === 'right'){
        myElement.style.textAlign = 'justify';
        addingColor(textjustify, 'add');
        addingColor(textleft, '');
        addingColor(textright, '');
        addingColor(textcenter, '');
    }
    else if(myElement.style.textAlign === 'center'){
        myElement.style.textAlign = 'justify';
        addingColor(textjustify, 'add');
        addingColor(textleft, '');
        addingColor(textright, '');
        addingColor(textcenter, '');
    }
    else if(myElement.style.textAlign === ''){
        myElement.style.textAlign = 'justify';
        addingColor(textjustify, 'add');
        addingColor(textleft, '');
        addingColor(textright, '');
        addingColor(textcenter, '');
    }
    else{
        myElement.style.textAlign = '';
        addingColor(textleft, '');
        addingColor(textright, '');
        addingColor(textcenter, '');
        addingColor(textjustify, '');
    }
})

// Font family change in Text Editor
const option = document.getElementById('option');
option.addEventListener('change', function(event){
    const myFontFamily = event.target.value;
    myElement.style.fontFamily = myFontFamily;
})

// Change Font Size in Text Editor
const fontSize = document.getElementById('font-size');
fontSize.addEventListener('change', function(event){
    const myFontSize = event.target.value;
    myElement.style.fontSize = myFontSize+'px';
})

// Grow Font Size in Text Editor
const growFontSize = document.getElementById('grow-font-size');
growFontSize.addEventListener('click', function(){
    let growFontSizeNow = fontSize.value;
    growFontSizeNow++;
    growFontSizeNow++;
    myElement.style.fontSize = growFontSizeNow+'px';
    fontSize.value = growFontSizeNow;
})

// Grow Font Size in Text Editor
const shrinkFontSize = document.getElementById('shrink-font-size');
shrinkFontSize.addEventListener('click', function(){
    let shrinkFontSizeNow = fontSize.value;
    shrinkFontSizeNow--;
    shrinkFontSizeNow--;
    if(shrinkFontSizeNow >= 1){
        myElement.style.fontSize = shrinkFontSizeNow+'px';
        fontSize.value = shrinkFontSizeNow;
    }
})