const simplecomp=()=>{
    const handleClick=()=>{
        const messageElement=document.getElementById('message');
        messageElement.textContent="you click the button!";
    };
    return(
        <div>
            <h1 id="message">Click the button to change this text </h1>
            <button onClick={handleClick}> click Me</button>
        </div>
    )
}
export default simplecomp;