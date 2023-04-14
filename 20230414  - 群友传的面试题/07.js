
function Node(key = null,value = null) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.maxSize = capacity 
    this.hashTable = new Map()
    this.head = new Node()
    this.tail = new Node()
    this.head.next = this.tail
    this.tail.prev = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const currentNode = this.hashTable.get(key)
    if(typeof currentNode === 'undefined') return -1
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
    currentNode.next = this.head.next;
    currentNode.prev = this.head;
    this.head.next.prev = currentNode;
    this.head.next = currentNode;
    return currentNode.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.get(key) !== -1) {
        const currentNode = this.hashTable.get(key)
        currentNode.value = value
        return
    }
    // 若缓存已满，要进行清理
    if(this.hashTable.size + 1 > this.maxSize) {
        const deleteNode = this.tail.prev
        deleteNode.prev.next = this.tail
        this.tail.prev = deleteNode.prev
        deleteNode.prev = null
        deleteNode.next = null
        this.hashTable.delete(deleteNode.key)
    }
    const newNode = new Node(key,value);
    this.hashTable.set(key,newNode);
    newNode.next = this.head.next
    newNode.prev = this.head
    this.head.next.prev = newNode
    this.head.next = newNode
};
