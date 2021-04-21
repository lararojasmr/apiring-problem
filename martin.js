// test input
const input = `3 2
2 20`;

const args = input.trim().split('\n');
const X1 = parseInt(args[0].split(' ')[0]); // mts
const X2 = parseInt(args[0].split(' ')[1]); // mts
const V1 = parseInt(args[1].split(' ')[0]); // mts/step
const N = parseInt(args[1].split(' ')[1]); // steps

//Commons footstep between martin and his father.
const result = {F:0, V:0};

// First: get the positions of each land on of martin's father.
// Newton First Law: D = Velocity * Tick -> D =  V * N

const maxDisplacementFather = V1 * N; // mts
const fatherFootsteps = [];

for (let step = 0; step * V1 <= maxDisplacementFather; step++) {
    fatherFootsteps.push((step * V1) + X1);
}

for (let V2 = 1; V2 < maxDisplacementFather; V2++) {
    let F = Math.floor((X1-X2)/V2); // Common Steps
    for (let step = 0; step * V2 <= maxDisplacementFather; step++) {
        if (fatherFootsteps.includes((step * V2) + X2)) {
            F++;
        }
    }
    if(F >= result.F || (V2 > result.V && F >= result.F)){
        result.F = F;
        result.V = V2;
    }
}
console.log(result.F, result.V);