const value = 'global'

function getGlobal()
{
    console.log(value)
}

function getLocal()
{
    const value = 'local'
    getGlobal()
}

getGlobal()
getLocal()