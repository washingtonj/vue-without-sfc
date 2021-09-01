<template>
  <section class="todo-app">
    <div class="todo-app__container">
      <div class="todo-app__name">
        <h1>TODO</h1>
        <button><dark-icon /></button>
      </div>

      <todo-input @create="add" />

      <todo-table :data="todos" @clear="clearCompleted">
        <template v-slot="scope">
          <draggable
            item-key="id"
            :list="scope.todos"
            :disabled="scope.filter"
          >
            <template #item="{ element: todo }">
              <todo-item
                :key="todo.id"
                :value="todo.title"
                :completed="todo.completed"
                @update="update(todo.id, $event)"
                @remove="remove(todo.id)"
                @complete="check(todo.id)"
              />
            </template>
          </draggable>
        </template>
      </todo-table>
    </div>
  </section>
</template>

<script src="./script.ts" />
<style src="./style.css" />
