function lotterySim() {
    const luckyPrizes = {
        0: "$4",
        1: "$6",
        2: "25",
        3: "$200",
        4: "$5,000",
        5: "$7,000 a WEEK for LIFE"
    };
    const unluckyPrizes = {
        0: "$0",
        1: "$0",
        2: "$3",
        3: "$20",
        4: "$200",
        5: "$25,000 a YEAR for LIFE"
    };

    let myNums = [];
    while (myNums.length < 5) {
    let newNum = Math.floor(Math.random() * 47) + 1;
        if (myNums.indexOf(newNum) == -1) {
            myNums.push(newNum);
        }
    }

    let sorted = myNums.sort();
    let luckyBall = Math.floor(Math.random() * 17) + 1;
    const winningNums = prompt("Please enter the first 5 winning numbers separated by a space.").split(" ").map((x) => parseInt(x, 10)).sort();
    const winningLB = parseInt(prompt("Please enter the winning lucky ball number"), 10);
    let matches = winningNums.reduce((total, current) => ((myNums.indexOf(current) != -1) ? ++total : total), 0);
    const lucky = winningLB == luckyBall;
    prize = lucky ? luckyPrizes[matches] : unluckyPrizes[matches];

    document.write( 
        `<style>
            #col1 { 
                display: inline-block;
                padding: 16px;
                color: blue;
                font-size: 24px
            }
            #col2 {
                display: inline-block;
                padding: 16px;
                color: red;
                font-size: 24px
            }
        </style>
        <div id=col1>
            <p>Random Pick:&nbsp;</p> 
            <p>Pick sorted:&nbsp;</p>
            <p>Winning numbers sorted:&nbsp;</p>
            <p>Number matching:&nbsp;</p>
            <p>Lucky ball:&nbsp;</p>
            <p>Your winnings:&nbsp;</p>
        </div>
        <div id=col2>
            <p>${myNums.join(" ")} lucky ${luckyBall}</p>
            <p>${sorted.join(" ")} lucky ${luckyBall}</p>
            <p>${winningNums.join(" ")} lucky ${winningLB}</p>
            <p>${matches}</p>
            <p>${lucky ? "matches" : "does not mach"}</p>
            <p>${prize}</p>
        </div>`);
    document.close();
}