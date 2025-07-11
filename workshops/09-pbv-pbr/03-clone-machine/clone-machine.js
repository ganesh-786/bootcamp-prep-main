// YOUR CODE BELOW
function cloneMachine(obj) {
  debugger;
  //   let clonepush = [];
  //   clone = obj.name + "Clone";
  //   clonepush.push(clone);
  //   return clonepush;

  let objClone = { ...obj, offspring: [] };
  objClone.name = obj.name + "Clone";
  obj.offspring.push(objClone.name);

  return objClone;
}
