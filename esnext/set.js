// não aceita repetição, e não é indexada
const times = new Set()
times.add('vasco')
times.add('corintians').add('palmeiras').add('sao paulo')
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))// é case sensitive vai dar false
console.log(times.has('vasco'))
console.log(times.delete('corintians'))
console.log(times.has('corintians'))