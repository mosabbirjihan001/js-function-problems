function woodQuantity(chairQuantity , tableQuantity ,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = chairQuantity * perChairWood ;
    const totalTableWood = tableQuantity * perTableWood ;
    const totalBedWood = bedQuantity * perBedWood ;

    const totalWood = totalBedWood + totalChairWood + totalTableWood ;

    return totalWood ;
}

const all = woodQuantity(2,2,2)
console.log(all);