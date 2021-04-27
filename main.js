const cowntDown = function(count) {
    for (var i = count; i >= 0; i--) {
        const a = i;
        setTimeout(function() {
            console.log(a);
        }, 1000 * (count - 1));
    }
}
cowntDown(10);