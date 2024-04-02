class Queue {
    constructor(){
        // propriedade count para controlar o tamanho da fila
        this.count = 0;
        //manter o controle do primeiro elemento
        this.lowestCount = 0;
        //usaremos um objeto para armazenar os elementos da fila
        this.items = {};
    }
    enqueue(element){
        // incluir um elemento na fila
        this.items[this.count] = element;
        this.count++;
    }
    size(){
        // retorna o tamanho da fila
        return this.count - this.lowestCount;
    }
    isEmpty(){
        //retorna true se a fila estiver vazia
        return this.size() === 0;
    }
    dequeue() {
        //remove o elemento da frente da fila

        //verifica se a fila está vazia
        if (this.isEmpty()) {
            return undefined;
        }
        //armazenando o valor da frente da fila
        const result = this.items[this.lowestCount];
        //removendo o elemento da frente
        delete this.items[this.lowestCount];
        //será necessário incrementar a propriedade lowestCount
        this.lowestCount++;
        return result;
    }
    peek(){
        //mostra o elemento da frente da fila
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    clear(){
        //para limpar a fila 
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString(){
        //para imprimir a fila
        if (this.isEmpty()){
            return "";
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount +1 ; i <= this.count; i++){
            objString += `${objString},${this.items[i]}`;
        }
        return objString
    }
     
}

const fila = new Queue();
console.log(fila.isEmpty());//true
//add 2 pessoas na fila
fila.enqueue('João');
fila.enqueue('Maria');
console.log('A fila possui inicialmente as pessoas: ' + fila.toString());
//vamos acrescentar outra pessoa
fila.enqueue('Pedro');
console.log('A fila possui inicialmente as pessoas: ' + fila.toString());
console.log('O tamanho da fila é: ' + fila.size());
console.log('Removendo a pessoa da frente da fila: ' + fila.dequeue());
console.log('A fila agora possui os elementos: ' + fila.toString());
console.log('A pessoa da frente da fila agora é: ' + fila.peek());
console.log('Retirando o próximo da fila: ' + fila.dequeue());
console.log('A fila agora possui os elementos: ' + fila.toString());
console.log('A pessoa da frente da fila agora é: ' + fila.peek());

// declarando a classe deque e seu construtor

class Deque {
    constructor () {
        // propriedade count para controlar o tamanho do deque
        this.count = 0;
        //lowestCount para manter o controle(índice) do primeiro elemento
        this.lowestCount = 0;
        //objeto items para armazenar elementos no deque
        this.items = {};
    }
    addFront(element){ // add um novo elemento na frente do deque
        if (this.isEmpty()) {
            // neste caso chamamos o método addBack (no final do deque)
            this.addBack(element); 
        } else if (this.lowestCount > 0) {
            // o elemento é removido da frente do deque
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (var i = this.count; i > 0; i--) {
                this.items[i] = this.items[i -1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }
    addBack(element){ // add um novo elemento no fim do deque
        this.items[this.count] = element;
        this.count++;
    }
    removeFront(){ // remove o primeiro elemento do deque
        //verifica se a fila está vazia
        if(this.isEmpty( ) ) {
            return undefined;
        }
        //armazenando o valor da frente da fila
        const result = this.items[this.lowestCount];
        //removendo o elemento da frente
        delete this.items[this.lowestCount];
        //será necessário incrementar a propriedade lowestCount
        this.lowestCount++ ;
        return result;
    }
    removeBack(){ // remove o último elemento do deque
        if (this.isEmpty() ){
            return undefined;
        }
        this.count --;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peekFront(){ // devolve o primeiro elemento do deque
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    peekBack(){ //  devolve o último elemento do deque
        return this.items[this.items.length - 1];
    }
    size(){ // para retornar o tamanho do deque
        return this.count - this.lowestCount;
    }
    isEmpty(){ // verifica se o deque está vazio
        return this.size() === 0;
    }
    toString(){ // apresenta o conteúdo do deque
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1;  i <= this.count; i++) {
            objString =  `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

const deque = new Deque();
console.log(deque.isEmpty());   // true
deque.addBack('João');
deque.addBack('Pedro');
console.log(deque.toString());
deque.addBack('Camila');
console.log(deque.toString());
console.log(deque.size());      // 3
console.log(deque.isEmpty( ));  // false
deque.removeFront(); // remove  'João'
console.log(deque.toString());
deque.removeBack(); // remove 'Camila'
console.log(deque.toString());
deque.addFront('João'); //  adiciona novamente 'João' no início
console.log(deque.toString());

function hotPotato(elementslist, num) {
    //continuar em casa (ou não) mas é melhor que sim (oun não)
}