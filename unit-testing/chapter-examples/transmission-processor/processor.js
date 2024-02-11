function processor(transmission) {
    if (transmission.includes(" ")) {
        return transmission.trim();
    }

    if (transmission.indexOf("::") < 0) {
        // Data is invalid
        return -1;
    }

    let res = transmission.match(/::/g);

    if (res.length > 1) {
        return -1;
    }

    let parts = transmission.split("::");
    let rawData = parts[1];
    let idNum = parts[0];

    if (rawData[0] !== "<") {
        rawData = -1;
    }

    if (isNaN(idNum)) {
        idNum = -1;
     } else {
        idNum = Number(idNum);
     }
    
    return {
        id: idNum,
        rawData: rawData
    };

 }

 module.exports = processor;
