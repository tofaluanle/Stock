/**
 *
 *
 * Created by songjj on 2017/3/16.
 */


console.log(['123', 4].join());

m(1);
// setTimeout(m(1));
// setTimeout(function () {
//     m(1)
// });

function m(i) {
    if (i > 10) {
        return;
    }
    console.log(i);
    i++;
    setTimeout(function () {
        m(i)
    }, 1000);
}