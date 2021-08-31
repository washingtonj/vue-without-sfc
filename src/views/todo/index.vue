<template>
  <section class="todo-app">
    <div class="todo-app__container">
      <div class="todo-app__name">
        <h1>TODO</h1>
        <button><dark-icon /></button>
      </div>

      <todo-input @create="add" />

      <todo-table
        :total="todos.active.length"
        :isEmpty="!todos[filterBy].length"
        @filter="filter"
        @clear="clearCompleted"
      >
        <todo-item
          v-for="todo in todos[filterBy]"
          :key="todo.id"
          :value="todo.title"
          :completed="todo.completed"
          @update="update(todo.id, $event)"
          @remove="remove(todo.id)"
          @complete="check(todo.id)"
        />
      </todo-table>
    </div>
  </section>
</template>

<script src="./script.ts" />
<style src="./style.css" />
