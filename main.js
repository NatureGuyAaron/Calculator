


inputBox = document.getElementById("INPUT-BOX1");

const one = document.getElementById("one")
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");

const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const equal = document.getElementById("equal");
const dot = document.getElementById("dot");
const modulus = document.getElementById("modulus");

const clearInput = document.getElementById("clear");


one.addEventListener("click", ()=>
{
    inputBox.value += 1;
})

    two.addEventListener("click", ()=>
        {
            inputBox.value += 2;
        })

        three.addEventListener("click", ()=>
            {
                inputBox.value += 3;
            })

            four.addEventListener("click", ()=>
                {
                    inputBox.value += 4;
                })
                
                five.addEventListener("click", ()=>
                    {
                        inputBox.value += 5;
                    })
                    six.addEventListener("click", ()=>
                        {
                            inputBox.value += 6;
                        })
                        seven.addEventListener("click", ()=>
                            {
                                inputBox.value += 7;
                            })
                            
                            eight.addEventListener("click", ()=>
                                {
                                    inputBox.value += 8;
                                })

            nine.addEventListener("click", ()=>
                {
                    inputBox.value += 9;
                })

                zero.addEventListener("click", ()=>
                    {
                        inputBox.value += 0;
                    })

                    plus.addEventListener("click", ()=>
                        {
                            inputBox.value += "+";
                        })


                        minus.addEventListener("click", ()=>
                            {
                                inputBox.value += "-";
                            })

                            multiply.addEventListener("click", ()=>
                                {
                                    inputBox.value += "*";
                                })
    
                            
                            modulus.addEventListener("click", ()=>
                                {
                                    inputBox.value += "%";
                                })

                                dot.addEventListener("click", ()=>
                                    {
                                        inputBox.value += ".";
                                    })
        


function calculate()
{
  let result = eval(inputBox);

  inputBox.textContent = `Result: ${result}`;

}





function clear()
{
  inputBox.value = "";
}


function calculate()
{
  let result = eval(inputBox.value);

  inputBox.value = result;

}


clearInput.addEventListener('click',clear);
equal.addEventListener('click',calculate, ()=>
{
    if(inputBox.textContent.contains("a"))
        {
            alert("NO");
        }
        
});

