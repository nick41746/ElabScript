var inputs = document.getElementsByTagName("input");

var saveBtns = [];

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].value === "Save") {
    saveBtns.push(inputs[i]);
  }
}

var saveFunc = (index) => {
  setTimeout(() => {
    saveBtns[index].click();
    index++;
    if(index < saveBtns.length) {
      saveFunc(index);
    }
  }, 1000)
}

saveFunc(0);

