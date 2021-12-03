Array.prototype.customIndexOf = function (element) {
    for (let i = 0; i < this.length; i++) {
        if (element == this[i]) {
            return i;
        }
    }
    return -1;
}

Array.prototype.customLastIndexOf = function (element) {
    for (let i = this.length - 1; i > 0; i--) {
        if (element == this[i]) {
            return i;
        }
    }
    return -1;
}

Array.prototype.customFilter = function (Func) {
    let newArray = new Array();
    let counter = 0;
    for (let i = 0; i < this.length - 1; i++) {
        if (Func(this[i], i, this)) {
            newArray[counter] = this[i];
            counter++;
        }
    }
    return newArray;
}

Array.prototype.customFind = function (Func) {
    let result = new String();
    let counter = 0;
    for (let i = 0; i < this.length - 1; i++) {
        if (Func(this[i], i, this)) {
            result += this[i];
            counter++;
            break;
        }
    }
    return result;
}


Array.prototype.customToString = function () {
    let newString = new String();
    for (let element of this) {
        newString += element;
        if (this[this.length - 1] != element) {
            newString += ",";
        }
    }
    return newString;
}

Array.prototype.customJoin = function (char) {
    let newString = new String();
    for (let element of this) {
        newString += element;
        if (this[this.length - 1] != element) {
            newString += char;
        }
    }
    return newString;
}

Array.prototype.customPop = function () {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[arr.length - 1]) {
            newArr[i] = arr[i]
        }
    }
    return newArr;
}

Array.prototype.customSlice = function (start = 0, end = this.length) {
    let newArr = new Array
    if (start < 0) {
        start = arr.length + start;
    }
    if (end < 0) {
        end = arr.length + end;
    }
    let counter = 0;
    for (let i = start; i < end; i++) {
        newArr[counter] = arr[i];
        counter++;
    }
    return newArr;

}
String.prototype.customSubstring = function (start = 0, end = this.length) {
    if (start < 0) {
        start = 0;
    }

    if (end > this.length) {
        end = this.length;
    }

    let str = "";
    let counter = 0;
    for (let i = start; i < end; i++) {
        ``
        str += this[i];
        counter++;
    }
    return str;
}

String.prototype.customSubstr = function (start = 0, end = this.length) {
    if (start < 0) {
        start += this.length;
    }

    if (start + end > this.length) {
        end = this.length - start;
    }

    let str = "";
    let counter = 0;
    for (let i = start; i < start + end; i++) {
        ``
        str += this[i];
        counter++;
    }
    return str;
}

// Stringde elementin olub olmamasini yoxlayir.
String.prototype.customSearchMap = function (searchString) {
    let newString = new String();
    let start = 0;
    let end = 0;
    for (let i = 0; i <= this.length; i++) {
        if (searchString[0] == this[i]) {
            start = i;
            break;
        }
    }
    for (let i = 0; i <= this.length; i++) {
        if (searchString[searchString.length - 1] == this[i]) {
            end = i;
            break;
        }
    }
    for (let i = start; i <= end; i++) {
        newString += this[i];
    }
    if (searchString == newString) {
        return true;
    }
    return false;
}
