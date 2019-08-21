const b1 = {
    name: 'b1',
    render: function () { return [c1, c2]; }
};
const b2 = {
    name: 'b2',
    render: function () { return []; }
};
const b3 = {
    name: 'b3',
    render: function () { return []; }
};
const c1 = {
    name: 'c1',
    render: function () { return []; }
};
const c2 = {
    name: 'c2',
    render: function () { return [d1, d2]; }
};
const d1 = {
    name: 'd1',
    render: function () { return []; }
};
const d2 = {
    name: 'd2',
    render: function () { return []; }
};
export const a1 = {
    name: 'a1',
    render: function () { return [b1, b2, b3]; }
};