/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const res = [];
    
    const dfs = (node) => {
        if (!node) {
            res.push("N");
            return;
        }
        
        res.push(String(node.val));
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root)
    return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const vals = data.split(",");
    const N = vals.length;
    let i = 0;
    
    const dfs = (nodes) => {
        if (vals[i] === "N") {
            i += 1;
            return null;
        }
        
        const node = new TreeNode(Number(vals[i]));
        i += 1;
        node.left = dfs();
        node.right = dfs();
        return node;
    }
    
    return dfs(vals)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */