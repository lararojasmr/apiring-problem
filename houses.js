// test input
const input = `3 7
1 9
2 0
5 15
4 30`;

const housesData = input.trim().split('\n');
const housesNumber = housesData.map((houseData) => {
    return parseInt(houseData.split(' ')[0]);
});
const housesPositions = housesData.map((houseData) => {
    return parseInt(houseData.split(' ')[1]);
});


function getHouse(position){
    // Getting the houses numbers.
    for (let house = 0; house < housesNumber.length; house+=1) {
        if(housesPositions[house] === position){
            return housesNumber[house];
        }
    }
}


// Creating a copy of this code.
const tmpHousesPositions = housesPositions.map(value => (value));
// Ordering
tmpHousesPositions.sort((a, b) => {
    return (a < b) ? -1 : 1;
});

// Looking for the big area.
let locations;
for (let location = 0, diff = 0; location < tmpHousesPositions.length; location+=1) {
    if(tmpHousesPositions[location + 1] - tmpHousesPositions[location] > diff){
        diff = tmpHousesPositions[location + 1] - tmpHousesPositions[location];
        locations = [getHouse(tmpHousesPositions[location + 1]), getHouse(tmpHousesPositions[location])];
    }
}

console.log(locations.sort());