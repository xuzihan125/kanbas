function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped,   blockScoped,
        constant1,        numberArray1,   stringArray1
    ];

    return (
        <div>
            <h3>Working with Arrays</h3>
            <div>numberArray1 = {numberArray1}</div>
            <div>stringArray1 = {stringArray1}</div>
            <div>variableArray1 = {variableArray1}</div>
        </div>
    )
}

export default WorkingWithArrays;
