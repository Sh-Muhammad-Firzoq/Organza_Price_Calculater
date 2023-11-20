function OPC() {

    console.log("OPC is runnung");

    let PPI = document.getElementById('PPI').value
    PPI = Number.parseInt(PPI)
    console.log("PPI:", PPI);

    let EPI = document.getElementById('EPI').value
    EPI = Number.parseInt(EPI) / 2

    console.log("EPI:", typeof EPI, EPI);

    let b = document.getElementById('wof').value
    b = Number.parseInt(b)
    console.log("WOF:", b);

    let yarndanier = document.getElementById('Yarndanier').value
    yarndanier = Number.parseInt(yarndanier)

    let DLF = document.getElementById('DLF').value
    DLF = Number.parseInt(DLF)
    console.log("DESIRE LENGTH:", DLF);

    let choice = document.getElementById('choice').value
    choice = Number.parseInt(choice)
    console.log("CHOICE:", choice);

    let yarnrate = document.getElementById('yarnrate').value
    yarnrate = Number.parseInt(yarnrate)
    console.log("YARNRATE:", yarnrate);

    let divider
    let WarpWeight
    let WeftWeight
    let PriceWarpWeight
    let PriceWeftWeight

    let unit = ""

    //cost of 1 pound of yarnrate
    yarnrate /= 2.205;


    if (choice == 1) {
        divider = 4082373
        console.log("Metres Divider Selected:", divider);

        unit = "Metres"
        console.log("Choice is Metres:", choice);
    } else if (choice == 2) {
        divider = 4464483
        console.log("Yards Divider Selected:", divider);

        unit = "Yards"
        console.log("Choice is Yards:", choice);
    }

    //Warp Weight and Weft Weight
    WarpWeight = (PPI * b * yarndanier * DLF) / divider; //Show Result: WarpWeight of <DLF> <unit> is (Result)
    WeftWeight = (EPI * b * yarndanier * DLF) / divider; //Show Result: WeftpWeight of <DLF> <unit> is (Result)

    //Price of Yarn of above warpweight and weftweight
    PriceWarpWeight = yarnrate * WarpWeight; //Show Result: Price of <Inout> Y/M of Fabric of <WarpWeight> is :
    PriceWeftWeight = yarnrate * WeftWeight; //Show Result: Price of <Inout> Y/M of Fabric of <WeftpWeight> is :

    let Price = PriceWarpWeight + PriceWeftWeight; // Show Result: Final Price of Fabric

    let Itemcategory = (WarpWeight + WeftWeight) * 453.592; //Show REsult: Item Gram


    let Warp_ans = document.getElementById('Warp_ans')
    Warp_ans.value = DLF;
    console.log("Warp_ans Value:", Warp_ans.value);

    let Unit_ans = document.getElementById('Unit_ans')
    Unit_ans.value = unit;
    console.log("Unit_ans Value:", Unit_ans.value);

    let Weft_ans = document.getElementById('Weft_ans')
    Weft_ans.value = DLF;
    console.log("Weft_ans Value:", Weft_ans.value);


    let Unit1_ans = document.getElementById('Unit2')
    Unit1_ans.value = unit;
    console.log("Unit1_ans.value:", Unit1_ans.value);

    let Unit3 = document.getElementById("Unit3")
    Unit3.value = unit
    console.log("UNIT 3:", Unit3, Unit3.value);


    let warpweight_ans = document.getElementById('Warpweight=ans')
    warpweight_ans.value = WarpWeight;
    let weftweight_ans = document.getElementById('Weftweight=ans')
    weftweight_ans.value = WeftWeight;

    let PriceLength = document.getElementById('PriceLength')
    PriceLength.value = DLF
    console.log("Price Leghth/unit :", PriceLength.value, unit);

    let PriceShow = document.getElementById('PriceShow')
    PriceShow.value = Price
    console.log("PriceShow Value:", PriceShow.value);


}