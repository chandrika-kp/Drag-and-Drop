let allItems = document.getElementsByClassName("items");
let Container = document.getElementsByClassName("Containers");
let selected = null;

 for(let eachitem of allItems){
  eachitem.addEventListener("dragstart",dragStart);
  eachitem.addEventListener("dragEnd",dragEnd);
}
function dragStart(e){
  selected = e.target;
  console.log(selected)
  settimeout(()=>this.style.display = "none",0)
}
function dragEnd(){
  settimeout(()=>this.style.display = "block", 0);
}

for(let item of Container){
  item.addEventListener('dragover',dragOver);
  item.addEventListener('dragleave',dragleave);
  item.addEventListener('drop',Drop);
}
function dragOver(e){
    e.preventDefault();
    this.style.border = "2px dotted red";
}
function dragleave(){
    this.style.border = "2px dotted  rgb(166, 105, 251)";
}
function Drop(){
  this.append(selected);
  alert("Dropped succesfully")
}

function reset(){
  window.location.reload();
} 