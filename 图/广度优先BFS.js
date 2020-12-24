import { Queue } from '../队列.js'
const Colors = {
  WHITE : 0,
  GREY : 1,
  BLACK : 2
};
const initializeColor = vertices => {
  const color = {};
  for (let i =0; i<vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color
}
export const bfs = (graph, startVertex, callback) =>　{  // 遍历的图， 开始顶点， 回调函数
   const vertices = graph.vertices; //获取图中所有顶点数组
   const adjList = graph.adjList; //获取图中的各顶点以及邻接节点数组组成的对象
   const color  = initializeColor(vertices); //所有节点都初始化为白色
   const queue = new Queue(); // 创建一个队列Q
   color[startVertex] = Colors.GREY; //将xx标记为灰色
   queue.enqueue(startVertex); //将xx加入队列
   while(!queue.isEmpty()) {  //(邻接节点的加入，所以会一直循环) 循环直到队列为空也就是邻接节点的邻接节点...都被发现并探索了。 
     const u = queue.dequeue(); // 将xx出队列
     const neighbors = adjList.get(u); //找到xx的所有邻接节点
     for(let i = 0; i<neighbors.length; i++) { //遍历xx的所有邻接节点
       const w = neighbors[i]; 
       if(color[w] === Colors.WHITE) { //判断邻接节点是否已访问
         color[w] = Colors.GREY; //未访问则标记为灰色
         queue.enqueue(w); //将xx的邻接节点1入队列
       }
     }
     color[u] = Colors.BLACK; //访问完u的所有邻接节点后将u标记为黑色
     if(callback) {//回调函数用来打印访问的节点
       callback(u);
     }
   }
}

