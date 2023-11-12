let id = 1;
let entered;
let flag;
let course;
let currentBox = document.getElementById("id" + id)
currentBox.focus();
document.addEventListener('keydown', function (event) {
        navigateBoxes(event);
});
let c1 = "#435334";
let c2 = "#9EB384";
function navigateBoxes(event) {
    switch (event.key) {
        case 'ArrowRight':
            id++;
            currentBox = document.getElementById("id" + id);
            if (!(id == 2 || id == 3)) {
                document.getElementById("id" + (id - 1)).style.backgroundColor = c2;
                document.getElementById("id" + (id - 1)).style.color = "black";
            }
            break;
            case 'ArrowLeft':
            id--;
            currentBox = document.getElementById("id" + id);
            if (!(id == 1 || id == 2)) {
                document.getElementById("id" + (id + 1)).style.backgroundColor = c2;
                document.getElementById("id" + (id + 1)).style.color = "black";
            }
            break;
        default:
            return;
    }
    if (flag == 1) {
        document.getElementById("id" + entered).style.backgroundColor = "#242424";
        document.getElementById("id" + entered).style.color = "#ececec";
    }
    if (id == 1 || id == 2) {
        currentBox.focus();
        if (id == 2) {
            document.getElementById("id" + (id - 1)).blur();
        }
    } else {
        document.getElementById("id2").blur();
        currentBox.style.backgroundColor = c1;
        currentBox.style.color = "#ececec";
    }
    if (id == 8) {
        document.getElementById("id9").style.backgroundColor = "#242424"
    }
    console.log(id);
}
addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        currentBox.style.backgroundColor = "#242424";
        currentBox.style.color = "#ececec";
        if (id != 9) {
            entered = id;
            flag = 1;
        }
    }
    if (id == 9 && event.keyCode === 13) {
        submit();
    }
});
function submit() {
    switch (entered) {
        case 3:
            course = "C++";
            break;
        case 4:
            course = "C#";
            break;
        case 5:
            course = "java";
            break;
        case 6:
            course = "Python";
            break;
        case 7:
            course = "JavaScript";
            break;
        case 8:
            course = "Ruby";
            break;
        default:
            break;
    }
    console.log(entered);
    alert(`You have successfully registered for ${course} course`)
};