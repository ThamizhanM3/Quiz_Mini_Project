let questions = [
    {
        question: "How is an array initialized in C language?",
        answer:[
            {
                option: "int a[3] = {1, 2, 3};",
                check: true,
            },
            {
                option: "int a = {1, 2, 3};",
                check: false,
            },
            {
                option: "int a[] = new int [3];",
                check: false,
            },
            {
                option: "int a(3) = [1, 2, 3];",
                check: false,
            },
        ],
    },
    {
        question: "How are Strings represented in the memory of C",
        answer:[
            {
                option: "An array of Characters",
                check: true,
            },
            {
                option: "Object of some class",
                check: false,
            },
            {
                option: "Same as other premitive data types",
                check: false,
            },
            {
                option: "Linked list of characters",
                check: false,
            },
        ],
    },
    {
        question: "Which of the following is exit controlled loop?",
        answer:[
            {
                option: "while loop",
                check: false,
            },
            {
                option: "for loop",
                check: false,
            },
            {
                option: "do while loop",
                check: true,
            },
            {
                option: "None of the above",
                check: false,
            },
        ],
    },
    {
        question: "What is the size of int data type in C",
        answer:[
            {
                option: "4",
                check: true,
            },
            {
                option: "8",
                check: false,
            },
            {
                option: "2",
                check: false,
            },
            {
                option: "1",
                check: false
            },
        ],
    },
    {
        question: "How to declare a double pointer in C",
        answer:[
            {
                option: "int *val",
                check: false,
            },
            {
                option: "int **val",
                check: true,
            },
            {
                option: "int &val",
                check: false,
            },
            {
                option: "int *&val",
                check: false
            },
        ],
    },
    {
        question: "Which of the following are not standard header files in C?",
        answer:[
            {
                option: "stdio.h",
                check: false,
            },
            {
                option: "conio.h",
                check: false,
            },
            {
                option: "stdlib.h",
                check: false,
            },
            {
                option: "None of these",
                check: true
            },
        ],
    },
    {
        question: "How is the 3rd element in an array accessed based on pointer notation?",
        answer:[
            {
                option: "*a + 3",
                check: false,
            },
            {
                option: "*(a + 3)",
                check: true,
            },
            {
                option: "*(*a + 3)",
                check: false,
            },
            {
                option: "&(a + 3)",
                check: false
            },
        ],
    },
    {
        question: "In which of the following languages is function overloading not possible?",
        answer:[
            {
                option: "C",
                check: true,
            },
            {
                option: "C++",
                check: false,
            },
            {
                option: "Java",
                check: false,
            },
            {
                option: "Python",
                check: false
            },
        ],
    },
    {
        question: "How to find the length of an array in C?",
        answer:[
            {
                option: "sizeof(a)",
                check: false,
            },
            {
                option: "sizeof(a[0])",
                check: false,
            },
            {
                option: "sizeof(a)/sizeof(a[0])",
                check: true,
            },
            {
                option: "sizeof(a)*sizeof(a[0])",
                check: false
            },
        ],
    },
    {
        question: "Which data structure is used to handle recursion in C?",
        answer:[
            {
                option: "Stack",
                check: true,
            },
            {
                option: "Queue",
                check: false,
            },
            {
                option: "Deque",
                check: false,
            },
            {
                option: "Tree",
                check: false
            },
        ],
    },
];

let score = 0;
let marked = [];

for(p=0;p<questions.length;p++){
    marked[p] = {
        op1: false,
        op2: false,
        op3: false,
        op4: false,
    }
}

let i=0

loadQuestion()

function checkScore(){
    for(p=0;p<marked.length;p++){
        a1 = marked[p].op1 == questions[p].answer[0].check
        a2 = marked[p].op2 == questions[p].answer[1].check
        a3 = marked[p].op3 == questions[p].answer[2].check
        a4 = marked[p].op4 == questions[p].answer[3].check
        if(a1 && a2 && a3 && a4){
            score++
        }
    }
}

function saveAnswer(){
    marked[i] = {
        op1: document.getElementById("ans1").checked,
        op2: document.getElementById("ans2").checked,
        op3: document.getElementById("ans3").checked,
        op4: document.getElementById("ans4").checked,
    }
}

function loadQuestion(){
    document.getElementById("qno").innerHTML = "Question No: " + (i+1);
    document.getElementById("question").innerHTML = questions[i].question;
    document.getElementById("opt1").innerHTML = questions[i].answer[0].option;
    document.getElementById("opt2").innerHTML = questions[i].answer[1].option;
    document.getElementById("opt3").innerHTML = questions[i].answer[2].option;
    document.getElementById("opt4").innerHTML = questions[i].answer[3].option;

    i == 0 ? document.getElementById("prev").style = "display: none;" : document.getElementById("prev").style = "display: block;"
}

function loadOption(){
    document.getElementById("ans1").checked = marked[i].op1;
    document.getElementById("btn1").style = (marked[i].op1 == true)?"background: #5ada86;":"background: #fff";
    document.getElementById("ans2").checked = marked[i].op2;
    document.getElementById("btn2").style = (marked[i].op2 == true)?"background: #5ada86;":"background: #fff";
    document.getElementById("ans3").checked = marked[i].op3;
    document.getElementById("btn3").style = (marked[i].op3 == true)?"background: #5ada86;":"background: #fff";
    document.getElementById("ans4").checked = marked[i].op4;
    document.getElementById("btn4").style = (marked[i].op4 == true)?"background: #5ada86;":"background: #fff";
}

function clearColor(){
    document.getElementById("btn1").style = "";
    document.getElementById("btn2").style = "";
    document.getElementById("btn3").style = "";
    document.getElementById("btn4").style = "";
}

function nextQues(){
    i++;

    if(i == (questions.length - 1)){
        document.getElementById("next").innerHTML = "Submit";
    }
    else{
        document.getElementById("next").innerHTML = "Next";
    }
    
    if(i == questions.length){
        checkScore()
        document.getElementById("content").style = "display: none;"
        document.getElementById("result").style = "display: flex;"
        document.getElementsByClassName("container")[0].style = "background: #fff; height: 8%"
        document.getElementById("score").innerHTML = "Total score is: " + score + " of " + questions.length;
    }

    clearColor()
    loadQuestion()
    loadOption()
} 

function prevQues(){
    if(i>0){
        i--;
    }
    
    loadQuestion()
    clearColor()
    loadOption()

    if(i == (questions.length - 1)){
        document.getElementById("next").innerHTML = "Submit";
    }
    else{
        document.getElementById("next").innerHTML = "Next";
    }
}

function loadColor(btn){
    document.getElementById(btn).style = "background: #5ada86;"
}

check1 = () => {
    document.getElementById("ans1").checked = true;
    saveAnswer() 
    clearColor()
    loadColor("btn1")
}
check2 = () => {
    document.getElementById("ans2").checked = true;
    saveAnswer()
    clearColor()
    loadColor("btn2")
}
check3 = () => {
    document.getElementById("ans3").checked = true;
    saveAnswer()
    clearColor()
    loadColor("btn3")
}
check4 = () => {
    document.getElementById("ans4").checked = true;
    saveAnswer()
    clearColor()
    loadColor("btn4")
}