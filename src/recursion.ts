import { a1 } from './elements';

const doWork = function (o) {
    console.log(o.name);
    const children = o.render();
    children.forEach(function (c) {
        doWork(c);
    });
};
doWork(a1);