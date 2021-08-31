<template>
  <div class="todo-app__input">
    <input type="search" v-model.trim="value" placeholder="describe your task here" />
    <button @click="create">+</button>
  </div>
</template>

<script src="./script.ts" />
<style src="./style.css" />
