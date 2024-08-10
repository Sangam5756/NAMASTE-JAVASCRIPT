# HOISTING

IN JAVASCRIPT -
WHEN WE WRITE A PROGRAM MEMORY IS ALLOCATED TO IT FIRST
THEN CODE IS EXECUTED AND THIS PROCESS IS CALLED HOISTING.

# Lexical Environment

<!-- SCOPE --> _>>>

    AVAILABILITY OF VARIABLE CALLED SCOPE EG IF IT INSIDE FUNCTION WE CAN ACCESS
    GLOBALLY IF ITS OUTSIDE OF FUNCTION WE CAN ACCESS IT ANYWHERE

<!-- LEXICAL --> HIERARCHY - FUNCTION INSIDE FUNCTION, AND VARIABLE DECALRATION IF
<!-- EG-->

SUPPOSE WE DECLARE A FUNCTION NAME a() INSIDE THAT DECLARE X=10 AND ALSO DECLARE ANOTHER FUNCTION INSIDE
WITH NAME B() NOW IN THAT FUNCTION WE CONSOLING X SO IT WILL WORK EVEN THE X IS DEFINED OUTSIDE THE PARENT FUNCTION SO THE LINK TO THE PARENT IS CALLED LEXICAL WHEN IT CANNOT FIND X IN HIS SCOPE IT WILL TRY TO FIND IN PARENT SCOPE SO THE PARENT ALSO DO THE SAME UNTIL IT REACHES TO NULL MEANS GLOBAL CONTEXT
THIS IS ALSO CALLED THE SCOPE CHAIN

IT IS CREATED WHENEVER A EXECUTION CONTEXT IS CREATED

# let , const , var

<!-- var is global store in memory -->
<!-- when we access var before initialization and inintialize it after it  -->

console.log - undefined.

but with const it gives us reference error so now we know the behavious of the let const and var

as we know the var store in global space

- but the const let store in the different script space

when we try to access that varible before initialization it throws error that is called temporal dead zone

# block scope and shadowing

<!-- what is block scope -->

the content within the curly brace called block

<!-- why use of block -->

to execute combined statement

<!-- what is scope -->

the statement code written inside the block.
is not accessible outside the block

<!-- what is shadowing -->

it means suppose we decalre the variable in the global space
a = 10 but inside the block we decalred the
{a= 100} when we try to console or access that variable inside the block it give the value 100 so global a is shadow by inside a with new value , but outside the block the value remain same.
in the case of let const but except var
when we decalre variable using the var when shadowing happen it change the value of that variable permenently

so good practive use var if it neccessary
otherwise use const let in day to day coding

# Closures

<!-- function with lexical scope bundled together forms a closures -->

(function + lexical scope) => closures

<!--  when we return the function or anything it have reference to that variable that persist not the value -->

uses ->
module design pattern
currying
functions like once
memoize
maintaining state in async worlds
setTimeouts
Iterators
and many more........

<!-- set timeout clousure interview asked question -->

# First Class Function

the function which take the function as input and perform operation on them are called first class function

//function expression
function which stored inside variable called function expression



# call-Back function
<!-- callback function is function in js which is call later in the program the reason we used that as we know js is single threaded language and it not go forward until the stack is empty so callback function help to execute rest of the code and it also run the code which has the callback function later in the stack -->

