function Write() {
  let sentence = document.getElementById("sentence").value; 
  const ol = document.createElement("ol");
  let number = parseInt(document.getElementById("times").value, 10); 
  for (let i = 0; i < number; i++) {
    const li = document.createElement("li");
    li.textContent = sentence;
    ol.appendChild(li);
  }

  document.getElementById("finish").appendChild(ol); 
}
