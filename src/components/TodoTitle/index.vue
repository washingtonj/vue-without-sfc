<template>
  <div class="todo-app__name">
    <h1>TODO</h1>
    <button @click="themeChange">
      <dark-icon v-if="currentTheme === 'dark'" />
      <light-icon v-else/>
    </button>
  </div>
</template>

<script src="./script.ts" />
<style src="./style.css" />
