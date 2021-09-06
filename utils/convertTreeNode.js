
const input = [ {id: 0, pid: null},  {id: 1, pid: 0} ,  {id: 2, pid: 0} ,  {id: 3, pid: 1}];

function ConvertTreeNode(input)  {
  var treenode = {}

  const pidMap = {};

  input.forEach(item => {
    const { id, pid } = item;
    if (!pidMap[pid]) {
      pidMap[pid] = [];
    }
    pidMap[pid].push(item);
  });

  console.log(pidMap);

  function tarser(pid) {
    const items = pidMap[pid];
    return items.map(item => ({ id: item.id, chs: tarser(item.id) }));
  }

  rootId = pidMap['null'][0].id;
  treenode.id = rootId;
  treenode.chs = tarser(rootId);
  
  return treenode;
}

console.log(ConvertTreeNode(input));
