  function incrementNumber1() {
                document.getElementById('number1').value =
                    Number(document.getElementById('number1').value) + 1;

                document.getElementById('result').textContent =
                    document.getElementById('number1').value;
            }