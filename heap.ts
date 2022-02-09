enum HeapType {
  large = 1,
  small = 2
}
class Heap {
  arr: number[] = [null]
  constructor(readonly heapType: HeapType = HeapType.large) {}
  get size() {
    return this.arr.length - 1
  }
  swap(idx1: number, idx2: number) {
    const tmp = this.arr[idx1]
    this.arr[idx1] = this.arr[idx2]
    this.arr[idx2] = tmp
  }
  compare(idx1: number, idx2: number) {
    if(this.heapType === HeapType.large) {
      return this.arr[idx1] >= this.arr[idx2]
    } else return this.arr[idx1] <= this.arr[idx2]
  }
  down(idx: number) {
    const leftIdx = idx * 2
    const rightIdx = idx * 2 + 1
    if (leftIdx > this.size) return
    let targetIdx = leftIdx
    if (rightIdx <= this.size && this.compare(rightIdx, leftIdx)) {
      targetIdx = rightIdx
    }
    if (!this.compare(idx, targetIdx)) {
      this.swap(idx, targetIdx)
      this.down(targetIdx)
    }
  }
  up(idx: number) {
    const parentIdx = Math.floor(idx / 2);
    if (parentIdx < 1) return
    if(!this.compare(parentIdx, idx)) {
      this.swap(parentIdx, idx)
      this.up(parentIdx)
    }
  }
  push(val: number) {
    this.arr.push(val)
    this.up(this.size)
  }
  pop() {
    this.swap(1, this.size)
    this.arr.pop()
    this.down(1)
  }
}