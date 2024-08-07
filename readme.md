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





