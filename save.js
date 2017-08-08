var saveAllFromIndex = (index) => {
  setTimeout(() => {
    saveBtns[index].click();
    index++;
    if(index < saveBtns.length) {
      saveFunc(index);
    }
  }, 1000)
}

