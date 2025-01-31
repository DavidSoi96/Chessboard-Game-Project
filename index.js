let selectedPiece = null; 

function insertImages() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class = 'all-img all-pawn'
                src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
            else { 
                image.innerHTML = `${image.innerText} <img class = 'all-img'
                src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    });
}

function moveBpawn() {
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('click', function() {

            if (!selectedPiece && this.innerText.includes('Bpawn') && this.id.startsWith('b7')) {
                selectedPiece = this;
                this.style.backgroundColor = '#002d6a'; 
            }

            else if (selectedPiece && this !== selectedPiece) {

                if (this.id.startsWith('b6') && 
                    this.innerText.length === 0 && 
                    this.id.slice(-2) === selectedPiece.id.slice(-2)) {                     
                    this.innerHTML = selectedPiece.innerHTML;
                    selectedPiece.innerHTML = '';
                    
                    if (selectedPiece.id.charAt(3) % 2 === 0) {
                        selectedPiece.style.backgroundColor = selectedPiece.id.charAt(2) % 2 === 0 ? 'white' : 'red';
                    } else {
                        selectedPiece.style.backgroundColor = selectedPiece.id.charAt(2) % 2 === 0 ? 'red' : 'white';
                    }
                    
                    selectedPiece = null;
                }
            }
         
        });
    });
}

insertImages();
moveBpawn();