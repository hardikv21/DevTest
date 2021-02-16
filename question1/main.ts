function countSide (walkArr: string[], letter: string) {
    let count = walkArr.filter(ltr => {
        return ltr === letter;
    });
    return count.length;
}

export function isValidWalk(walk: string[]) {
    if(walk.length % 2 === 0 && walk.length <= 10) {
        return (countSide(walk, 'n') - countSide(walk, 's') === 0) && (countSide(walk, 'e') - countSide(walk, 'w') === 0)
    }
    return false;
}