function callMe(func) {
    func();
}

callMe("Al"); // returns "TypeError: func is not a function"
