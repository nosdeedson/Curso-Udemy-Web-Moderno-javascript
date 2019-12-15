this.ola = 'fala pessoal' 
// the command "this" allows others modules to access the variable "ola"
exports.bemVindo = 'bem vindo ao node' 
/* the command "exports" is another way to allow others modules to 
access variables or functions in a module, in this case the variable  "bemVindo"
*/
// another way
module.exports.ateLogo = 'until the nex example'

/*
 all the examples above are the way less used to allow access
 the 3 atribution above added an atribute to an object
*/
