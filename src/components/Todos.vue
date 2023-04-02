<template>
  <AddTodo  @add-todo="addTodo"></AddTodo>
  <TodoItem v-for="todo in abc" 
  v-bind:key="todo.id" 
  v-bind:todoProps="todo"
  
  v-on:item-completed="markCompleted"
  @delete-item="deleteTodo"
 
  ></TodoItem>
</template>

<script>
  import {ref} from 'vue';
  import {v4 as uuidv4} from 'uuid';

  import TodoItem from './TodoItem.vue';
  import AddTodo from './AddTodo.vue';
    export default{
        name: 'Todos',
        components:{TodoItem, AddTodo},
        //truyền dữ liệu đến template
        setup(){
          //trạng thái khởi điểm ref
          const todos=ref([
            {
              id:uuidv4(),
              title:'việc 1',
              completed: false,
            },
            {
              id:uuidv4(),
              title:'việc 2',
              completed: false,
            },
            {
              id:uuidv4(),
              title:'việc 3',
              completed: true,
            },
        ]);
          const markCompleted =(id) =>{
            todos.value=todos.value.map(todo => {
              if(todo.id===id)
                todo.completed=!todo.completed;
              return todo;
            })
          };
          const deleteTodo=id=>{
            todos.value=todos.value.filter(todo => todo.id !== id)
          }
          const addTodo = (newTodo)=>{
            console.log(newTodo.id)
            todos.value.push(newTodo);
          }
          // xuất trạng thái khởi điểm
          return {
           abc: todos,
           markCompleted,
           deleteTodo,
           addTodo
          } 
        }
    }
</script>

<style>
</style>
