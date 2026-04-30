// Função construtora Task (molde para criar tarefas)
function Task(name, description, dueDate, priority, status) {
    // Definimos as propriedades básicas da tarefa
    this.name = name; // Nome da tarefa
    this.description = description; // Descrição da tarefa
    this.dueDate = dueDate; // Data de vencimento
    this.priority = priority; // Prioridade (alta, média, baixa)
    this.status = status; // Status (ex: em progresso, concluído)
    this.createdAt = new Date(); // Armazenamos a data de criação

    // Método para alterar o nome da tarefa
    this.changeName = function (newName) {
        this.name = newName; // Atualiza o nome
        this.updatedAt = new Date(); // Registra a data da última atualização
    };
}

// Criamos uma nova instância de tarefa (task1) usando o molde (construtor)
const task1 = new Task(
    'Study JavaScript', // Nome
    'Learn the basics of JavaScript programming language.', // Descrição
    new Date('2024-07-01'), // Data de vencimento
    'High', // Prioridade
    'In Progress' // Status
);

// Criamos outra instância (task2)
const task2 = new Task(
    'Study HTML',
    'Learn the basics of HTML markup language.',
    new Date('2024-07-02'),
    'Medium',
    'Not Started'
);

// Usamos o método para alterar o nome da task1
task1.changeName('Study JavaScript, React and Node.js 2024');

// Imprimimos as tarefas no console para ver os resultados
console.log(task1);
console.log(task2);