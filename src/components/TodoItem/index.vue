<template>
  <li class="todo-app__item">
    <input type="checkbox" :checked="completed" @change="complete" />

    <!-- View -->
    <template v-if="!isEditMode">
      <p :class="{ completed: completed }" @dblclick="toggleEditMode">
        {{ value }}
      </p>
      <button @click="remove"><close-icon /></button>
    </template>

    <!-- Edit -->
    <template v-else>
      <input type="text" v-model="inputValue" />
      <button @click="update"><save-icon /></button>
    </template>
  </li>
</template>

<script src="./script.ts" />
<style src="./style.css" />
