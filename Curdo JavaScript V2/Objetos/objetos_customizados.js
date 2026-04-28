       function changeName (newName) {
            this.name = newName;
            this.updatedAt = new Date();
        }   


const task1 = {
        name: 'Study JavaScript',
        description: 'Learn the basics of JavaScript programming language.',
        dueDate: new Date('2024-07-01'),
        priority: 'High',
        status: 'In Progress',
        completed: false  ,
        updatedAt: null,
        changeName
    };
    const task2 = {
        name: 'Study HTML',
        description: 'Learn the basics of HTML markup language.',
        dueDate: new Date('2024-07-02'),
        priority: 'Medium',
        status: 'Not Started',
        completed: false,
        updatedAt: null,
        changeName: function(newName) {
            this.name = newName;
            this.updatedAt = new Date();
        }   
    };
    task1.name = 'Study JavaScript and React';
    task2.status = 'In Progress';
    task1.changeName('Study JavaScript, React and Node.js 2024');

    console.log(task1);
    console.log(task2); 
//questão problemática se casso  eu precisar fazer uma alteração 
// em todas as tarefas, como por exemplo, adicionar um novo campo
//  "assignedTo" para indicar a pessoa responsável pela tarefa, 
// eu teria que modificar cada objeto individualmente, o que pode
//  ser trabalhoso e propenso a erros. Além disso, se eu quiser criar 
// muitas tarefas, isso pode levar a uma duplicação de código e dificultar
//  a manutenção do sistema.

// oque devo fazer para resolver esse problema?
// Para resolver esse problema, você pode criar uma função construtora ou 
// uma classe para representar as tarefas.
// Isso permitirá que você defina um modelo para as tarefas e crie
//  instâncias de tarefas de forma mais eficiente. 
// Aqui está um exemplo usando uma função construtora: