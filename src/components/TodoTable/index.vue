<template>
  <div class="todo-app__table">
    <ul>
      <slot />
    </ul>

    <div class="todo-app__filter">
      <p>{{ total }} items left</p>
      <div>
        <button
          :class="{ selected: selected === 'all' }"
          @click="filter('all')"
        >
          All
        </button>
        <button
          :class="{ selected: selected === 'active' }"
          @click="filter('active')"
        >
          Active
        </button>
        <button
          :class="{ selected: selected === 'completed' }"
          @click="filter('completed')"
        >
          Completed
        </button>
      </div>
      <button @click="clear">Clear completed</button>
    </div>
  </div>
</template>

<script src="./script.ts" />
<style src="./style.css" />
