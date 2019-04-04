let elements = {
    leftBlock: document.querySelector('#leftPhoto'),
    rightBlock: document.querySelector('#rightPhoto'),
    blocks: document.getElementsByClassName('wholeBlock'),
    mainDiv: document.querySelector('.wheatherForFiveDaysBlock')
}

let leftBlocksArray = [];

function rightClick() {
    if (leftBlocksArray.length <= 1) {
        leftBlocksArray.unshift(elements.blocks[0]);
        elements.blocks[0].remove();
        
        for (let i = 0; i < elements.blocks.length; i++) {
            if (elements.blocks[i].classList.contains('hidden')) {
                elements.blocks[i].classList.remove('hidden')
                break
            }
        }
    }
}

function leftClick() {
    
    if (leftBlocksArray.length > 0) {
        elements.mainDiv.insertBefore(leftBlocksArray[0], elements.blocks[0])
        leftBlocksArray.shift();
    
        for (let i = 0; i < elements.blocks.length; i++) {
            if (elements.blocks[i].classList.contains('hidden')) {
                elements.blocks[i - 1].classList.add('hidden')
                break;
          }
    }
    
    elements.blocks[3].classList.add('hidden')
}
}
    elements.rightBlock.addEventListener('click', rightClick)
    elements.leftBlock.addEventListener('click', leftClick)