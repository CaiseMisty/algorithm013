let findCircleNum = function (M) {
  const visited = Array.from({ length: M.length }).fill(0);
  let res = 0;
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      dfs(i);
      res++;
    }
  }
  return res;

  function dfs(i) {
    for (let j = 0; j < M.length; j++) {
      if (i !== j && !visited[j] && M[i][j]) {
        visited[j] = 1;
        dfs(j);
      }
    }
  }
};
