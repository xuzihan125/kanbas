function ImpliedReturn(){
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return(
        <div>
            <h3>Implied return</h3>
            <div> fourTimesFive = {fourTimesFive}</div>
            <div> multiply(4, 5) = {multiply(4, 5)}</div>
        </div>
    )
}

export default ImpliedReturn;
