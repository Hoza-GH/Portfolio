const text = document.getElementsByClassName('name_title');
const prog = 'Deville Lucas';

let idx = 1;

setInterval(write, 100);

function write() {
    text.innerText = prog.slice(0,idx);
    idx ++;
    if (idx > prog.length) {
        idx=1;
    }

    
}
setInterval(write(), 100);
