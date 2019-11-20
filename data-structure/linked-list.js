// add, remove, searchNodeAt

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyList {
  constructor() {
    this._length = 0;
    this.head = null;
  }

  add(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this._length++;

      return node;
    }

    let lastNode = this.searchNodeAt(this._length);
    lastNode.next = node;
    this._length++;

    return node;
  }

  remove(position) {
    if (position > this._length || position < 0) {
      throw new Error('Failure to remove');
    }

    let deletedNode = this.searchNodeAt(position);
    if (!position || position === 1) {
      this.head = this.head.next;
      this._length--;
      return deletedNode;
    }
    let previousNode = this.searchNodeAt(position - 1);
    previousNode.next = deletedNode.next;
    this._length--;

    return deletedNode;
  }

  searchNodeAt(position) {
    if (!this._length || position > this._length || position < 0) {
      throw new Error('Failure');
    }
    let count = 1;
    let node = this.head;

    while (count < position) {
      node = node.next;
      count++;
    }

    return node;
  }
}

let list = new SinglyList();
list.add('1');
list.add('2');
list.add('3');
list.add('4');
list.add('5');
list.add('6');
list.add('7');
console.log({ list });