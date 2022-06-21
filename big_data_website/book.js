// random array
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }
  // pictures of dedications
  const array = [
    "./dedications/dedication_1.jpeg", 
    "./dedications/dedication_2.jpeg", 
    "./dedications/dedication_3.jpeg", 
    "./dedications/dedication_4.jpeg", 
    "./dedications/dedication_5.jpeg",
    "./dedications/dedication_6.jpeg", 
    "./dedications/dedication_7.jpeg",
    "./dedications/dedication_8.jpeg", 
    "./dedications/dedication_9.jpeg", 
    "./dedications/dedication_10.jpeg" ];
  
  const chosenDedication = getRandomItem(array);
  
  // OCR
  Tesseract.recognize(chosenDedication, "eng")
  .then(({data: {text}}) => {
      var output = text;
      document.getElementById("shownDedication").innerText = output;
      responsiveVoice.speak(output);
  });

