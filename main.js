const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector,
    this.height = height,
    this.width = width,
    this.bg = bg,
    this.fontSize = fontSize,

    this.createNewElem = function () {
         let strSelector = this.selector;

        if (strSelector.charAt(0) ==='#') {
            let parentElement = document.body;
            let element = document.createElement('P');
            element.id = strSelector.slice(1);
            element.innerHTML = 'New paragraph with id = ' + element.id;
            parentElement.appendChild(element);
            element.style.cssText = 'background:'+this.bg +';'+'height:'+this.height + ';' + 'width:' +this.width + ';' + 'font-size:' + this.fontSize;
        } else if (strSelector.charAt(0) ==='.') {
            let parentElement = document.body;
            let element = document.createElement('div');
            element.classList.add(strSelector.slice(1));
            element.innerHTML = 'New block with class = ' + element.className;
            parentElement.appendChild(element);
            element.style.cssText = 'background:'+this.bg +';'+'height:'+this.height + ';' + 'width:' +this.width + ';' + 'font-size:' + this.fontSize;
        } 
    }
}

const newElemP = new DomElement('#best', '300px', '300px', 'red', '20px');
const newElemDiv = new DomElement('.block', '300px', '300px', 'green', '20px');

newElemP.createNewElem();
newElemDiv.createNewElem();