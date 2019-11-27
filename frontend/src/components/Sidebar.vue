<template>
  <aside class="sidebar">
    <div class="sidebar__container">
      <div class="sidebar__header">
        <UserAccount />
      </div>
      <div class="sidebar__content">
        <div class="sidebar__list">
          <div class="sidebar__item">
            <router-link :to="{ 'name': 'dashboard' }" exact class="sidebar__link">Dashboard</router-link>
          </div>
          <div class="sidebar__item">
            <router-link :to="{ 'name': 'books' }" exact class="sidebar__link">Books</router-link>
          </div>
          <div class="sidebar__item">
            <router-link :to="{ 'name': 'statistics' }" exact class="sidebar__link">Statistics</router-link>
          </div>
        </div>
      </div>
      <div class="sidebar__footer">
        <a href="#" class="sidebar__link">Exit</a>
      </div>
    </div>
  </aside>
</template>

<script>
import UserAccount from './UserAccount';

export default {
  components: {
    UserAccount
  }
}
</script>

<style lang="scss">
.sidebar {
  height: 100%;
  border-right: 2px solid var(--color-border);
  background: var(--color-sidebar-bg);
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  &__header {
    border-bottom: 2px solid var(--color-border);
  }
  &__content {
    flex: 1;
    overflow-y: auto;
  }
  &__footer {
    border-top: 2px solid var(--color-border);
  }
  &__list {
    overflow-y: auto;
  }
  &__item {
   border-bottom: 2px solid var(--color-border);
  }
  &__link {
    display: block;
    padding: 2rem;
    text-decoration: none;
    color: var(--color-text);
    &:hover {
      background: var(--color-accent);
      color: white;
    }
    &.is-active {
      color: var(--color-accent);
      &:hover {
        background: none;
      }
    }
  }
}
</style>
