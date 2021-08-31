<template>
  <div class="todo-app__table">
    <ul>
      <slot />
    </ul>

    <div class="todo-app__filter">
      <p>5 items left</p>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear completed</button>
    </div>

  </div>
</template>

<script src="./script.ts" />
<style src="./style.css" />
