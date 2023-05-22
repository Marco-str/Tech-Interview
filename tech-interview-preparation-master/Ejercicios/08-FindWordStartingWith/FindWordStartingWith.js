

const book = {
  id: 1,
  text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
}




function FindWordStartingWith (book, query) {
  // Your code here:

const text = book.text.toLowerCase()

const finds = []

const separador = " ";


for (let i = 0; i < text.length; i++) {
  if(query[0] === text[i]){
    if(text.slice(i, i + query.length) === query
     && text[i-1]=== separador
     || i === 0){
      finds.push(i);
    }
  }
  
}

return finds;


}

module.exports = FindWordStartingWith


console.log(FindWordStartingWith(book, "de")); // output: [23]


console.log(FindWordStartingWith(book, "un")); // output: [6, 14, 43, 78, 87]



//TRIE



/*









**/