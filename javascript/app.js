console.log('hello');

const todos = [
    {
        text: 'rifare il letto',
        done: false,
    }, 
    {
        text: 'fare colazione',
        done: true,
    },
    {
        text: 'fare la doccia',
        done: false,
    },
    {
        text: 'andare a lavorare',
        done: false,
    },
    {
        text: 'andare in palestra',
        done: false,
    },
    {
        text: 'cenare',
        done: false,
    },
    
]

const app = new Vue({
    el: '#app',
    data: {
        todos,
        classiTodos: 'todo',
        newTodo: '',
    },
    methods: {
        toggleDoneOf(todo) {
            console.log(todo)
            todo.done = !todo.done
        },
        addTodo() {

            this.newTodo = this.newTodo.trim();

            if(!this.newTodo) return
            
            this.todos.push({
                text: this.newTodo,
                done: false,
            })
            this.newTodo = ''        
                   
            
        },
    },
})