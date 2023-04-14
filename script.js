function calculateMinCost() {
  //your code here


	const input = document.getElementById('input').value;
  const ropes = input.split(',').map(Number);
  
  // Create a min heap with the initial ropes
  const minHeap = new MinHeap();
  for (let i = 0; i < ropes.length; i++) {
    minHeap.insert(ropes[i]);
  }
  
  // Connect the ropes with minimum cost
  let totalCost = 0;
  while (minHeap.size() > 1) {
    const rope1 = minHeap.extractMin();
    const rope2 = minHeap.extractMin();
    const newRope = rope1 + rope2;
    totalCost += newRope;
    minHeap.insert(newRope);
  }
  
  document.getElementById('result').innerHTML = totalCost;
}

// Define a MinHeap class to implement the min heap data structure
class MinHeap {
  constructor() {
    this.heap = [];
  }
  
  size() {
    return this.heap.length;
  }
  
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }
  
  extractMin() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return min;
  }
  
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }
  
  bubbleDown(index) {
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let smallestIndex = index;
      if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftIndex;
      }
      if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightIndex;
      }
      if (smallestIndex === index) {
        break;
      }
      [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
      index = smallestIndex;
    }
  }
  
  
  
}  
