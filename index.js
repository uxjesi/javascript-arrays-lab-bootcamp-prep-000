// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
var newCat = ["Broom"]

function destructivelyAppendKitten(kitten) {
 kittens.push(kitten)
  return kittens
}

function destructivelyPrependKitten (kitten) {
  kittens.unshift(kitten)
  return kittens
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten () {
  kittens.shift()
  return kittens
}

function appendKitten() {
   
  return (kittens.concat(newCat))
}

function prependKitten(kitten) {
  return (kittens.splice(0,1, kitten))
}


