/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    
    const dfs = (node, val,depth) => {
        if (depth === 1) return new TreeNode(val, node, null);
        if (depth === 2) {
            node.left = new TreeNode(val, node.left, null);
            node.right = new TreeNode(val, null, node.right);
        } else {
            if (node.left) dfs(node.left, val, depth - 1);
            if (node.right) dfs(node.right, val, depth - 1);
        }
        return node;
    }
    
    return dfs(root, val, depth);
};