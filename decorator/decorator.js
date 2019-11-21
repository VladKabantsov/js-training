function slow(value) {
    console.log(`slow function ${value}`);
    return value;
}

function cacheDecorator(fn) {
    let cache = new Map();

    return function(data) {
        if (cache.has(data)) {
            console.log('from cache');
            return cache.get(data);
        }
        
        let result = fn(data);

        cache.set(data, result);
        return result;
    }
}

slow = cacheDecorator(slow);

slow(1);
slow(2);
slow(1);