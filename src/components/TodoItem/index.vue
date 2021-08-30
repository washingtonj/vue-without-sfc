<template>
  <li>
    <!-- View -->
    <template v-if="!isEditMode">
      <p @dblclick="toggleEditMode">{{ value }}</p>
      <button @click="remove">X</button>
    </template>

    <!-- Edit -->
    <template v-else>
      <input type="text" v-model="inputValue" />
      <button @click="update">O</button>
    </template>
  </li>
</template>

<script src="./script.ts" />
<style src="./style.css" />
