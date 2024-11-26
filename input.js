document.getElementById("input").addEventListener("keydown", function(event) {
    if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') {
      event.preventDefault();
    }
  });