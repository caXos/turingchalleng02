// Add JS here
function findSublists() {
    let constraints = {
        minListLength: 1,
        maxListLength: 200,
        minElementValue: 1,
        maxElementValue: 200,
        maxLimit: 0
    }

    let list = document.getElementById("listInput").value;
    // Constraint Rule # 1 Validation
    if (list.length < 1) {
        document.getElementById("error").innerText = "Constraint Rule #1 Error -> Invalid list length";
        document.getElementById("errorsDiv").style.display = "block";

        throw new Error("Constraint Rule #1 Error -> Invalid list length")
    }

    list = list.split(",");
    list = list.map((element) => {
        return Number(element);
    })
    let limit = Number(document.getElementById("limitInput").value);
    let divisor = Number(document.getElementById("divisorInput").value);

    constraints.maxLimit = list.length;
    
    // Constraint Rule # 2 Validation
    list.forEach((element) => {
        if (element < constraints.minElementValue || element > constraints.maxElementValue) {
            document.getElementById("error").innerText += "Constraint Rule #2 Error -> At least one element in input list is invalid";
            document.getElementById("errorsDiv").style.display = "block";

            throw new Error("Constraint Rule #2 Error -> At least one element in input list is invalid")
        }
    })

    // Constraint Rule # 3 Validation
    if (limit > constraints.maxLimit) {
        document.getElementById("error").innerText += "Constraint Rule #3 Error -> Limit is greater than list length";
        document.getElementById("errorsDiv").style.display = "block";

        throw new Error("Constraint Rule #3 Error -> Limit is greater than list length")
    }

    let sublistMap = new Map();
    let invalidSublistsMap = new Map();
    for (endingPoint = 1; endingPoint <= list.length; endingPoint++) {
        for (startingPoint = 0; startingPoint < endingPoint; startingPoint++) {
            let sublist = list.slice(startingPoint, endingPoint);
            if (!sublistMap.has(sublist.toString())) {
                let filteredSublist = sublist.filter((element) => {
                    return element % divisor === 0;
                });
                if (filteredSublist.length <= limit) {
                    sublistMap.set(sublist.toString(), filteredSublist);
                } else {
                    invalidSublistsMap.set(sublist.toString(), filteredSublist);
                }
            }
        }
    }
    document.getElementById("result").innerText = sublistMap.size

    console.log("-----> Valid sublists <-----");
    console.log(sublistMap);
    console.log("-----> Invalid sublists <-----");
    console.log(invalidSublistsMap);
}