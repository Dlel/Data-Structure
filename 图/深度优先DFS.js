const Colors = {
  WHITE : 0,
  GREY : 1,
  BLACK : 2
};
const initializeColor = vertices => {
const color = {};
  for(let i = 0; i<vertices.length; i++ ) {
    color[vertices[i]] = Colors.WHITE
  }
  return color
};

const dfs = (graph,callback) => {
  const vertices = graph.vertices;
  const adjList = graph.adjList;
  const color = initializeColor(vertices);
  for(let i = 0; i<vertices.length; i++) {
    if(color[vertices[i]] == Colors.WHITE) {
      dfsSerch(vertices[i], color, adjList, callback)
    }
  }
};

const dfsSerch = (u, color, adjList, callback) => {
  color[u] = Colors.GREY;
  if(callback) {
    callback(u)
  }
  const neighbors = adjList.get(u);
  for(let i = 0; i< neighbors.length; i++) {
    const w = neighbors[i]
    if(color[w] == Colors.WHITE) {
      // color[w] = Colors.GREY;  //在dfs的下一次调用开头会有变色
      dfsSerch(w, color, adjList, callback)
    }
  }
  color[u] == Colors.BLACK
}