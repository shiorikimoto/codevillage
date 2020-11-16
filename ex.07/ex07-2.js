let animals = ['たぬき', 'ハムスター', 'ぶた']

console.log(Array.isArray(animals))

let newLength = animals.unshift('きりん')

console.log(animals)

animals.splice(1,0,'うさぎ')

console.log(animals)