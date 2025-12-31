export function whatsMyType<T>( argument : T ) : T {
    console.log(argument);
    console.log(typeof(argument));
    return argument;
}

whatsMyType(1);
whatsMyType('1');
whatsMyType(true);
whatsMyType([1,2,3,4,5]);
whatsMyType(['hola', 'mundo']);
whatsMyType(1.50);