exports.titleCase = (name) => {
    return name
        .trim()
        .toLowerCase()
        .split(/[ \t]+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

exports.addCountryCode = (num) => {
    if (num.search(/^[+]880[0-9]{10}/) !== -1){
        return num;
    } else if(num.search(/^880[0-9]{10}/) !== -1){
        return "+" + num;
    } else if(num.search(/^0[0-9]{10}/) !== -1){
        // console.log(num);
        return "+88" + num;
    } else {
        return num;
    }
}