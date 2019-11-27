<template>
  <router-link :to="{ 'name': 'settings' }" exact class="user-acc">
    <div class="user-acc__photo"></div>
    <div class="user-acc__name">flockast</div>
  </router-link>
</template>

<style lang="scss">
.user-acc {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: var(--color-text);
  text-decoration: none;
  &:hover {
    background: #92ceff;
    color: white;
  }
  &.is-active {
    background: none;
    color: #92ceff;
    &:hover {
      background: none;
    }
  }
  &__photo {
    width: 6rem;
    height: 6rem;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 1rem;
    background: #dfdfdf;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  &__name {

  }
}
</style>
