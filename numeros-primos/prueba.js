function esPrimo (numero) {
    if (numero == 1) {
        return console.log(false);
    }
    for (i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return console.log(false);
        };
    };
    return console.log(true);
};
