<template>
    <p :class="['todo-item', 
        todoProps.completed ?  'is-completed': '']">
       
        <input type="checkbox"
        :checked="todoProps.completed"
        @change="markItem">
       
        {{ todoProps.title }}
       
       <button class="btn btn-danger"
        @click="deleteItem"
       >Delete</button>
    </p>
</template>
<script>
    // import {ref} from 'vue';
    export default {
        name: 'TodoItem',
        props: ['todoProps'],
        setup(props,context){
            const markItem =()=>{
                context.emit('item-completed',props.todoProps.id);
                // console.log(props.todoProps);
            };
            const deleteItem =()=>{
                context.emit('delete-item',props.todoProps.id);
            }
            return {
                markItem,
                deleteItem
            }
        }
    }
</script>

<style>
    .is-completed{
        text-decoration: line-through;
    }
    .todo-item{
        background: #f4f4f4;
        margin: 0;
        padding: 10px;
        border-bottom: 1px #ccc solid;

    }
    .btn-danger{
        background: red;
        color: #fff;
        cursor: pointer;
        border: none;
        float: right;
    }
</style>