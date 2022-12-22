/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const [ ROWS, COLS ] = [ isConnected.length, isConnected[0].length ];
    const n = ROWS;
    
    const unionFind = new UnionFind(n);
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (r === c) continue;
            
            if (isConnected[r][c] === 1) unionFind.union(r, c);
        }
    }
    
    return unionFind.getComponents();
};

class UnionFind {
  constructor(n) {
    this.root = Array(n)
      .fill(null)
      .map((_, i) => i);
    this.rank = Array(n).fill(1);
    this.components = n;
  }

  find(node) {
    if (node === this.root[node]) return node;

    return (this.root[node] = this.find(this.root[node]));
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return true;

    this.root[rootY] = rootX;
    this.components -= 1;
    return true;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  getComponents() {
    return this.components;
  }
}
