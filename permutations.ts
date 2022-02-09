const testcase = [1,2,1,1]
const swap = (array: number[], idx1: number, idx2: number) => {
  const tmp = array[idx1]
  array[idx1] = array[idx2]
  array[idx2] = tmp
}
const res = []
testcase.sort((a, b) => a - b)
const visited = Array.from({ length: testcase.length }).map(() => false)
const dfs = (idx: number, array: number[]) => {
  // idx左侧为已经准备好的部分排列，右侧为待加入的排列
  if(idx === array.length) res.push([...array])
  for(let i = idx; i < array.length; i++) {
    // 重复元素只考虑一次
    if(array[i] === array[i + 1]) continue
    swap(array, i, idx)
    dfs(idx + 1, array)
    swap(array, i, idx)
  }
}
dfs(0, testcase)
console.log(res)