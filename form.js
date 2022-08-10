let e = { params: []};
if (document.forms.length > 0) {
    e.action = document.forms[0].action;
    const inputs = document.querySelectorAll('div[jsmodel]');
    for (let i = 0; i < inputs.length; i++) {
        const params = inputs[i].getAttribute('data-params');
        const id = params.split(`[[`)[1].split(`,[]`)[0];
        const name = params.split(`,"`)[1].split(`",`)[0];
        e.params.push({ id, name });
    }
}
console.debug(e);
