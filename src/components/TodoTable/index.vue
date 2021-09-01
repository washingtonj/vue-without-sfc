<template>
  <div class="todo-app__table">
    <!-- Without items -->
    <div class="empty" v-if="!todos[filter].length">
      <p v-if="filter === 'all'">You haven't created any items yet.</p>
      <p v-else-if="filter === 'completed'">
        You haven't completed any tasks yet.
      </p>
      <p v-else-if="filter === 'active'">
        You don't have any active tasks yet.
      </p>
    </div>

    <!-- With Items -->
    <ul>
      <slot :todos="todos[filter]" :filter="filter !== 'all'" ></slot>
    </ul>

    <div class="todo-app__filter">
      <p>{{ todos["active"].length }} items left</p>
      <div>
        <button :class="{ selected: filter === 'all' }" @click="filter = 'all'">
          All
        </button>
        <button
          :class="{ selected: filter === 'active' }"
          @click="filter = 'active'"
        >
          Active
        </button>
        <button
          :class="{ selected: filter === 'completed' }"
          @click="filter = 'completed'"
        >
          Completed
        </button>
      </div>
      <button class="clear" @click="$emit('clear')">Clear completed</button>
    </div>
  </div>
</template>

<script src="./script.ts" />
<style src="./style.css" />
