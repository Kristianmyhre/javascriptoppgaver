let nr1 = 3;
var nr2 = 6;
function adding(){
console.log(`resultatet av nr2 pluss nr1: ${nr2+nr1}`)
}


function sub(){
    console.log(`resultatet av nr2 minus nr1: ${nr2-nr1}`)
    }



    function munlitply(){
        console.log(`resultatet av nr2 gange nr1: ${nr2*nr1}`)
        }


        function divide(){
            console.log(`resultatet av nr2 delt på nr1: ${nr2/nr1}`)
            }
adding.call()
sub.call()
munlitply.call()
divide.call()

