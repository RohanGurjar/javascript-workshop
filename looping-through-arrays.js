var pets = ['cat', 'dog', 'rat'];
pets.forEach(function(item, index, arr) {
    arr[index] = item + 's';
});
console.log(pets);