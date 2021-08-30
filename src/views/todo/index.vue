<template>
  <section class="todo-app">
    <h1 class="todo-app__name">WSFC Todo</h1>

    <div class="todo-app__container">
      <div class="todo-app__input">
        <input type="search" v-model.trim="addInput" />
        <button @click="addFunc">+</button>
      </div>

      <ul class="todo-app__items">
        <todo-item
          v-for="(todo, idx) in todos"
          :key="idx"
          :value="todo"
          @update="updateFunc(idx, $event)"
          @remove="delFunc(idx)"
        />
      </ul>
    </div>
  </section>
</template>

<script src="./script.ts" />
<style src="./style.css" />
