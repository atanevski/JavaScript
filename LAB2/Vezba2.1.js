firstArray = [];
function flatten(text) {
    for (var arg = 0; arg < arguments.length; arg++) {
        if (arguments[arg].constructor === Array) {
            for (var i = 0; i < arguments[arg].length; i++) {
                flatten(arguments[arg][i]);
            }
        } else {
            console.log(arguments[arg]);
            firstArray.push(arguments[arg]);
        }
    }
}
/**
 * Created by Aleksandar Tanevski on 24-Oct-15.
 */
