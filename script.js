function calculateMinCost() {
  //your code here


	const ropeLengths = document.getElementById("input").value.split(",").map(Number);
  const minHeap = new MinHeap(ropeLengths); // initialize a min-heap with rope lengths
  
  let totalCost = 0;
  while (minHeap.size() > 1) { // repeat until there's only one rope left
    const min1 = minHeap.extractMin(); // extract two smallest ropes
    const min2 = minHeap.extractMin();
    const sum = min1 + min2;
    totalCost += sum; // add the cost of connecting the two ropes
    minHeap.insert(sum); // insert the new rope back into the min-heap
  }
  
  document.getElementById("result").innerHTML = totalCost; // output the total cost
}

// MinHeap class with insert, extractMin, and size methods
class MinHeap {
  constructor(arr = []) {
    this.heap = arr;
    this.buildHeap();
  }
  
  buildHeap() {
    const firstParentIdx = Math.floor((this.size() - 2) / 2);
    for (let i = firstParentIdx; i >= 0; i--) {
      this.siftDown(i);
    }
  }
  
  insert(val) {
    this.heap.push(val);
    this.siftUp(this.size() - 1);
  }
  
  extractMin() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = last;
      this.siftDown(0);
    }
    return min;
  }
  
  siftUp(idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] > this.heap[idx]) {
        [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  
  siftDown(idx) {
    const leftChildIdx = idx * 2 + 1;
    const rightChildIdx = idx * 2 + 2;
    let minIdx = idx;
    if (leftChildIdx < this.size() && this.heap[leftChildIdx] < this.heap[minIdx]) {
      minIdx = leftChildIdx;
    }
    if (rightChildIdx < this.size() && this.heap[rightChildIdx] < this.heap[minIdx]) {
      minIdx = rightChildIdx;
    }
    if (minIdx !== idx) {
      [this.heap[minIdx], this.heap[idx]] = [this.heap[idx], this.heap[minIdx]];
      this.siftDown(minIdx);
    }
  }
  
  size() {
    return this.heap.length;
  }
  
  
  
}  
