let names = ['gokul', 'dev', 'jaggu', 'siva']

let new_Names = []
for (name of names) {
    new_Names.push(name.substr(0, 3).toUpperCase())
}
console.log(names)
console.log(new_Names)