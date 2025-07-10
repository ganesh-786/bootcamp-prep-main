// YOUR CODE BELOW
function removeColumns(orig, colno) {
  return orig.map((row) => {
    let keepcount = row.length - colno;
    return row.slice(0, keepcount);
  });
}
