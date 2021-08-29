<template>
  <section class="todo-app">
    <h1 class="todo-app__name">WSFC Todo</h1>

    <div class="todo-app__container">
      <div class="todo-app__input">
        <input type="search" v-model.trim="addInput">
        <button @click="addFunc">+</button>
      </div>

      <ul class="todo-app__items">
        <li v-for="(todo, idx) in todos" :key="idx">
          <p>{{ todo }}</p>
          <button @click="delFunc">X</button>
        </li>
      </ul>

    </div>
  </section>
</template>

<script lang="ts" src="./script.ts" />
<style src="./style.css" />
