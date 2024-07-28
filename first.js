let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; // player1 and player2
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// Function to show the winner message
const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
};

// Function to check for a winner
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner:", pos1val);
                showwinner(pos1val);
                return; // Exit after finding the winner
            }
        }
    }
    // Check for draw
    let allFilled = Array.from(boxes).every(box => box.innerText !== "");
    if (allFilled) {
        msg.innerText = "It's a draw!";
        msgcontainer.classList.remove("hide");
    }
};

// Event listeners for each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { // Ensure the box is empty
            if (turnO) {
                box.innerText = 'O';
            } else {
                box.innerText = 'X';
            }
            turnO = !turnO; // Toggle turn
            checkwinner();
        }
    });
});
