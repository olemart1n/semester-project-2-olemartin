export const debounce = (fn, ms = 0) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};

// code from https://www.30secondsofcode.org/js/s/debounce
