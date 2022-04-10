let i = 1;
let b;
for (i; (b = prompt("choose your action")); i++) {
    if (b === "continue") continue;
    else if (b === "break") break;
}
alert(i);
