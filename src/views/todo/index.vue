<template>
  <section class="todo-app">
    <div class="todo-app__container">
      <div class="todo-app__name">
        <h1>TODO</h1>
        <dark-icon />
      </div>

      <todo-input @create="add" />

      <todo-container>
        <todo-item
          v-for="(todo, idx) in todos"
          :key="idx"
          :value="todo.title"
          :completed="todo.completed"
          @update="update(todo.id, $event)"
          @remove="remove(todo.id)"
          @complete="check(todo.id)"
        />
      </todo-container>
    </div>
  </section>
</template>

<script src="./script.ts" />
<style src="./style.css" />
