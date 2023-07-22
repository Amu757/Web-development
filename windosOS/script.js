let windows = document.getElementsByClassName("windows")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

windows.addEventListener("click", () => {
    console.log("clicked");
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-655px"
    }
    else {
        startmenu.style.bottom = "50px"
    }
})

let picturein = document.getElementsByClassName("picturein")[0]
let picmenu = document.getElementsByClassName("picmenu")[0]

picturein.addEventListener("click", () => {
    console.log("clicked");
    if (picmenu.style.bottom == "48px") {
        picmenu.style.bottom = "-150px"
    }
    else {
        picmenu.style.bottom = "48px"
    }
})

let vscode = document.getElementsByClassName("vscode")[0]
let vsmenu = document.getElementsByClassName("vsmenu")[0]

vscode.addEventListener("click", () => {
    console.log("clicked");
    if (vsmenu.style.top == "0px") {
        vsmenu.style.top = "1000px"
    }
    else {
        vsmenu.style.top = "0px"
    }
})