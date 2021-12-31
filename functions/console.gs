
 // const _dev_cs = 'off'
 const _dev_cs = {
     sheetData_replaceValuesInRows: false,
     sheetData_getMergedData: false,
     sheetData_parseToSheet: false


 }

function cs(variable, symbol = '=', qty = 10) {
    const func_name = Object.keys(variable)[0]
    if (typeof _dev_cs !== 'undefined' && (_dev_cs[func_name] === false || _dev_cs === 'off')) {
        return;
    }
    let filler = new Array(qty);
    filler.fill(symbol);
    console.log(filler.join('') + ' ' + func_name + ' ' + filler.join(''));
    console.log(Object.values(variable)[0]);
}

