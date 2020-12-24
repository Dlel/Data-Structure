const Colors = {
  WHITE : 0,
  GREY : 1,
  BLACK : 2
};
const initializeColor = vertices => {
  const color = {};
  for(let i = 0; i < vertices.length; i++ ) {
    color[vertices[i]] = Colors.WHITE
  }
  return color
};

export const dfsFirst = graph => {
  const vertices = graph.vertices;
  const adjList = graph.adjList;
  const color = initializeColor(vertices);
  const d = {}; //被发现的时间
  const f = {}; //访问完成的时间
  const p = {}; //前溯点
  const time = {count : 0}; 
  for(let i =0; i < vertices.length; i++) {
    d[vertices[i]] = 0;
    f[vertices[i]] = 0;
    p[vertices[i]] = null;
  }
  for(let i = 0; i < vertices.length; i++) {
    if(color[vertices[i]] === Colors.WHITE){
      dfsVisit(vertices[i],color, d, f, p, time, adjList)      
    }
  }
  return {
    discover: d,
    finished : f,
    predecessors: p
  };
};
// ++i 在i自+1 然后赋值。   i++ 先赋值在自+1
const dfsVisit = (u, color, d, f, p, time, adjList) => {
  color[u] = Colors.GREY;
  d[u] =  ++time.count;
  let neighbors = adjList.get(u)
  for(let i = 0; i < neighbors.length; i++) {
    const w  = neighbors[i];
    if(color[w]==Colors.WHITE) {
      p[w] = u
      dfsVisit(w, color, d, f, p, time, adjList)
    }
  }
  color[u] = Colors.BLACK;
  f[u] = ++time.count
};

























// const dfs = (graph,callback) => {
//   const vertices = graph.vertices;
//   const adjList = graph.adjList;
//   const color = initializeColor(vertices);

//   for(let i = 0; i<vertices.length; i++) {
//     if(color[vertices[i]] == Colors.WHITE) {
//       dfsSerch(vertices[i], color, adjList, callback)
//     }
//   }
// };

// const dfsSerch = (u, color, adjList, callback) => {
//   color[u] = Colors.GREY;
//   if(callback) {
//     callback(u)
//   }
//   const neighbors = adjList.get(u);
//   for(let i = 0; i<neighbors.length; i++) {
//     const w = neighbors[i]
//     if(color[w] == Colors.WHITE) {
//       // color[w] = Colors.GREY;  //在dfs的下一次调用开头会有变色
//       dfsSerch(w, color, adjList, callback)
//     }
//   }
//   color[u] == Colors.BLACK
// }