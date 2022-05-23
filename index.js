var figlet = require('figlet');

figlet('intocode', function (err, data) {
    if (err) {
        console.log('Накосячили где-то... ');
        console.dir(err);
        return;
    }
    console.log(data)
});