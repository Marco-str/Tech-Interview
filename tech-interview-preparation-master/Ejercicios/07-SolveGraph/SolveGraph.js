

const graph1 = {
  a: ['b', "x", "z"],
  b: ['c', 'd'],
  c: ['d'],
  d: ["x"],
  x: [],
  z:[]       
}  
//Problema -> para u ngrafo necesitamos el corte del ciclo


function SolveGraph (graph, start, end, visited ={}) {
  // Your code here:

if (visited[start]) return false
visited[start] = true // {a:true} -> casp base o corte para cortar lo ciclico en los grafos


for (let i = 0; i < graph[start].length; i++) {
  const node = graph[start][i]
  if (node === end) return true
  if (SolveGraph(graph, node, end, visited)) {
    return true
  }
}

return false
}

console.log(SolveGraph(graph1, 'a', 'd')) // ['a', 'b', 'd']
console.log(SolveGraph(graph1, 'b', 'x')) //true
console.log(SolveGraph(graph1, 'b', 'z')) //false

module.exports = SolveGraph
