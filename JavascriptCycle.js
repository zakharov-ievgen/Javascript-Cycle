let i = 1;
let b;
for (i; (b = prompt("Choose your action - break or continue")); i++) {
    if (b === "continue") continue;
    else if (b === "break") break;
}
alert(i);
