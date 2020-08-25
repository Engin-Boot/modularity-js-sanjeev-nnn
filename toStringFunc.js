var GetColorFromPairNumber=require('./GetColorFromPairNumber.js');

function toString()
{
    let pairColor={}
    for(let i=1;i<=25;i++)
    {
        pairColor=GetColorFromPairNumber(i);
        colorManual=colorManual+i+":"+pairColor.major+" "+pairColor.minor;
    }
    return colorManual;
}

module.exports=toString;