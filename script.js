//your JS code here. If required.
function removeFunction(){
	const select = document.getElementById("colorSelect");
      function removeFunction() {
        const options = document.getElementsByTagName("option");
        for (let i = 0; i < options.length; i++) {
          if (options[i].innerText === select.value) {
            options[i].remove();
          }
        }
      }
} 