// interface defination
interface IRender {
  (): Array<IElement>|[]
}
interface IElement {
  name: string;
  render: IRender;
}
// fiber node 
class FiberNode {
  child: FiberNode | null;
  slibing: FiberNode|null;
  name: string;
  return: FiberNode|null;
  instance: IElement;

  constructor(element: IElement) {
    this.instance = element;
    this.child = null;
    this.slibing = null;
    this.name = element.name;
    this.return = null;
  }
}

// link the parent and children
const link = (parent: FiberNode, children: Array<IElement>): FiberNode => {
  parent.child = children.reduceRight((previous: FiberNode|null, current: IElement): FiberNode => {
    const node = new FiberNode(current);
    node.slibing = previous;
    node.return = parent;
    return node;
  }, null);
  return parent.child;
}

const doWork = (node: FiberNode): FiberNode => {
  console.log(node.name);
  const children = node.instance.render();
  return link(node, children);
}

// 
const performWork = (node: FiberNode) => {
  let current = node;
  let root = node;
  while(true) {
    const child = doWork(current);
    if (child) {
      current = child
      continue;
    }

    if (current === root) return;
    
    while(!current.slibing) {
      if (current.return === null || current.return === root) {
        return;
      }
      current = current.return;
    }
    current = current.slibing;
  }
}