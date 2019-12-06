// closure is the scope created when a function is declared
// this escope allows the function acesses and manipulates the external variable
// lexical context in action

const value = 'global'

function fora()
{
    const value ='local'
    function dentro()
    {
        return value
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())
