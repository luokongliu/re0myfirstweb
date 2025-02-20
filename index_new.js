function tomato() {
    //document.getElementById("fanQieZhongBtn").innerHTML = "你好，欢迎来到我的博客";
}

function Interest() {
    let shiJian;
    let touZi = Math.ceil(Math.random() * 5);
    switch (touZi) {
        case 1:
            shiJian = "painting";
            break;
        case 2:
            shiJian = "code";
            break;
        case 3:
            shiJian = "book";
            break;
        case 4:
            shiJian = "English";
            break;
        case 5:
            shiJian = "Japanese";
            break;
        default:
            shiJian = "error";
            break;
    }
    document.getElementById("Interest").innerHTML = shiJian;
}

function HIG() {
    let shiJian;
    let touZi = Math.ceil(Math.random() * 4);
    switch (touZi) {
        case 1:
            shiJian = "RabiRibi";
            break;
        case 2:
            shiJian = "只狼";
            break;
        case 3:
            shiJian = "aimlab";
            break;
        case 4:
            shiJian = "osu/SR";
            break;
        default:
            shiJian = "error";
            break;
    }
    document.getElementById("HIG").innerHTML = shiJian;
}
function LIG() {
    let shiJian;
    let touZi = Math.ceil(Math.random() * 4);
    switch (touZi) {
        case 1:
            shiJian = "novel";
            break;
        case 2:
            shiJian = "music";
            break;
        case 3:
            shiJian = "animation";
            break;
        case 4:
            shiJian = "galgame";
            break;
        default:
            shiJian = "error";
            break;
    }
    document.getElementById("LIG").innerHTML = shiJian;
}

// 以下为时钟代码
function clock() {
    const week = ['天', '一', '二', '三', '四', '五', '六'],
        checkTime = i => (i < 10) ? `0${i}` : i; // 在小于10的数字前加一个‘0’
    let today;

    function startTime() {
        today = new Date();
        document.getElementById("clock").innerHTML = `星期${week[today.getDay()]} ：${checkTime(today.getHours())}:${checkTime(today.getMinutes())}:${checkTime(today.getSeconds())}`;
    }
    setInterval(startTime, 500); //循环计时
}
clock();

// todoist 代码(添加储存功能，每当刷新页面时，显示之前的任务)(储存功能待完善)
let todoList = [];

function getTodo() {
    let todo = localStorage.getItem("todoList"),
        ol = document.getElementById("todoList"),
        li = document.createElement("li");
    if (todo === null) {
        return;
    }
    todo = JSON.parse(todo);
    todo.forEach(item => {
        li.innerHTML = item;
        ol.appendChild(li);
    });
}

getTodo();

function saveTodo() {
    let todo = [];
    let ol = document.getElementById("todoList");
    let li = ol.children;
    for (let i = 0; i < li.length; i++) {
        todo.push(li[i].innerHTML);
    }
    localStorage.setItem("todoList", JSON.stringify(todo));
}

function addTodo() {
    let input = document.getElementById("todoInput").value;
    let ol = document.getElementById("todoList");
    let li = document.createElement("li");
    let list = ol.children;
    let index = document.getElementById("todoIndex").value;
    if (input === "") {
        return;
    }
    li.innerHTML = input;
    ol.insertBefore(li, list[index]);
    saveTodo();
    // 以下为清空输入框和索引
    document.getElementById("todoInput").value = "";
    document.getElementById("todoIndex").value = 0;
}

function deleteTodo() {
    let ol = document.getElementById("todoList");
    let list = ol.children;
    let index = document.getElementById("todoIndex").value;
    ol.removeChild(list[index]);
    saveTodo();
    // 以下为清空输入框和索引
    document.getElementById("todoInput").value = "";
    document.getElementById("todoIndex").value = 0;
}

