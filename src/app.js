console.log('Hello world');

function checkNames(names) { 
    /*const updateNames = [];
    names.forEach(name => {
        if (name.toLowerCase().indexOf('x') === -1) {
            updateNames.push(name);
        }
    });
    return updateNames;*/

    return names.filter(name => name.toLowerCase().indexOf('x') === -1);
} 
module.exports = checkNames;