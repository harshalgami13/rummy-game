// hearts, clubs, diamonds and spades
var aValue = [
    {
        "nLabel": "A",
        "nValue": 10,
        "type": "hearts",
        "isJoker": false,
        "nGroupId": 4
    },
    {
        "nLabel": 2,
        "nValue": 2,
        "type": "clubs",
        "isJoker": false,
        "nGroupId": 1
    },
    {
        "nLabel": 3,
        "nValue": 3,
        "type": "diamonds",
        "isJoker": false,
        "nGroupId": 2
    },
    {
        "nLabel": 4,
        "nValue": 4,
        "type": "clubs",
        "isJoker": false,
        "nGroupId": 1
    },
    {
        "nLabel": 4,
        "nValue": 4,
        "type": "hearts",
        "isJoker": false,
        "nGroupId": 2
    },
    {
        "nLabel": 5,
        "nValue": 5,
        "type": "hearts",
        "isJoker": false,
        "nGroupId": 2
    },
    {
        "nLabel": 6,
        "nValue": 6,
        "type": "clubs",
        "isJoker": true,
        "nGroupId": 4
    },
    {
        "nLabel": 7,
        "nValue": 7,
        "type": "diamonds",
        "isJoker": false,
        "nGroupId": 3
    },
    {
        "nLabel": 8,
        "nValue": 8,
        "type": "spades",
        "isJoker": false,
        "nGroupId": 2
    },
    {
        "nLabel": 9,
        "nValue": 9,
        "type": "hearts",
        "isJoker": false,
        "nGroupId": 2
    },
    {
        "nLabel": 10,
        "nValue": 10,
        "type": "clubs",
        "isJoker": false,
        "nGroupId": 2
    },
    {
        "nLabel": "K",
        "nValue": 13,
        "type": "diamonds",
        "isJoker": false,
        "nGroupId": 4
    },
    {
        "nLabel": 6,
        "nValue": 6,
        "type": "diamonds",
        "isJoker": false,
        "nGroupId": 3
    },
    {
        "nLabel": 9,
        "nValue": 9,
        "type": "clubs",
        "isJoker": false,
        "nGroupId": 5
    },
    {
        "nLabel": 10,
        "nValue": 10,
        "type": "clubs",
        "isJoker": false,
        "nGroupId": 5
    },
    {
        "nLabel": "Q",
        "nValue": 11,
        "type": "clubs",
        "isJoker": true,
        "nGroupId": 5
    }
]


for (let i = 0; i < aValue.length; i++) {
    if (aValue[i].nLabel == "K") aValue[i].nLabel = 13
    else if (aValue[i].nLabel == "Q") aValue[i].nLabel = 12
    else if (aValue[i].nLabel == "J") aValue[i].nLabel = 11
    else if (aValue[i].nLabel == "A") aValue[i].nLabel = 1
}
aValue.sort((a, b) => a.nLabel - b.nLabel)

// make joker card value 0
for (let i = 0; i < aValue.length; i++) {
    if (aValue[i].isJoker) {
        aValue[i].nValue = 0
    }
}

for (let i = 0; i < aValue.length; i++) {
    if (aValue[i].nValue > 10) {
        aValue[i].nValue = 10
    }
}


// console.log(aValue)

var aGroupTotal = new Set()

for (let i = 0; i < aValue.length; i++) {
    aGroupTotal.add(aValue[i].nGroupId)
}

var tempArray = []
var sum = 0
for (let i = 1; i <= aGroupTotal.size; i++) {
    for (let j = 1; j < aValue.length; j++) {
        if (i === aValue[j].nGroupId) {
            tempArray.push(aValue[j])
        }
    }
    if (aValue.length === 0) {
        break
    }
    
    console.log(tempArray)
    count = 0
    for (let k = 0; k < tempArray.length - 1; k++) {

        if ((
            tempArray[k].nLabel) + 1 === tempArray[k + 1].nLabel &&
            tempArray[k].type == tempArray[k + 1].type) {
            count++
        }

        if (count === tempArray.length - 1) {
            for (let m = 0; m < tempArray.length; m++) {
                tempArray[m].nValue = 0;
            }
        }

    }

    for (let l = 0; l < tempArray.length; l++) {
        sum += tempArray[l].nValue;

    }

    tempArray = []

}
document.getElementById("Answer").innerHTML = sum
console.log(sum)

// console.log(aValue)


