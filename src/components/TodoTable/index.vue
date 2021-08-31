<template>
  <div class="todo-app__table">
    <ul>
      <!-- Without items -->
      <div class="empty" v-if="isEmpty">
        <p v-if="selected === 'all'">
          You haven't created any items yet.
        </p>
        <p v-else-if="selected === 'completed'">
          You haven't completed any tasks yet.
        </p>
        <p v-else-if="selected === 'active'">
          You don't have any active tasks yet.
        </p>
      </div>

      <!-- With Items -->
      <slot v-else />
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
