const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }

  getSize() {
    return this._size;
  }
}

function getLastCard(n) {
  const cards = new LinkedList();

  for (let i = 1; i <= n; i++) {
    cards.add(i);
  }
  while (cards.getSize() !== 1) {
    cards.removeHead();
    cards.add(cards.getHead());
    cards.removeHead();
  }

  return cards.getHead();
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const n = +input[0];

  const card = getLastCard(n);

  console.log(card);
});

/*
(풀이)


(시간초과)
  const n = +input[0];
  const cardArray = Array.from({ length: n }, (_, i) => i + 1);
  let count = 0;

  while (cardArray.length > 1) {
    const firstCard = cardArray.shift();

    if (count % 2 === 0) {
      count++;
      continue;
    } else {
      cardArray.push(firstCard);
    }
    count++;
  }
  console.log(cardArray[0]);

(메모리 초과)
  const n = +input[0];
  let multipleCards = Array.from({ length: n }, (_, i) => i + 1).join("");
  let count = 0;

  while (multipleCards.length > 1) {
    const firstCard = multipleCards[0];

    if (count % 2 === 0) {
      multipleCards = multipleCards.replace(firstCard, "");
    } else {
      multipleCards += firstCard;
      multipleCards = multipleCards.replace(firstCard, "");
    }

    count++;
  }
  console.log(+multipleCards);

*/
