const dfs = function (start, target) {
  if (start.value === target) {
    return start;
  }

  // recurse child nodes
  for (let i = 0; i < start.children.length; i++) {
    const result = dfs(start.children[i], target);
    if (result != null) {
        return result;
    }
  }

  // goal node not found
  return null;
};