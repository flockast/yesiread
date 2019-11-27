<template>
  <div class="page-books">
    <h1>List of your books</h1>
    <div class="books-list">
      <div class="books-list__item" v-for="item in [0, 1, 2, 3, 4]" :key="item">
        <div class="book-item book-item--ready">
          <div class="book-item__photo"></div>
          <div class="book-tem__title">
            <div class="book-item__name">Тайные виды на гору Фудзи</div>
            <div class="book-item__auth text-sm">В. О. Пелевин</div>
          </div>
          <div class="book-item__time">30 мин</div>
          <div class="book-item__pages">300 стр.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {

    }
  }
}
</script>

<style lang="scss">
.books-list {
  &__item {
    margin-bottom: 4rem;
  }
}
.book-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 4px;
  border: 2px solid var(--color-border);
  padding: 2rem;
  &__photo {
    width: 6rem;
    height: 6rem;
    background: #dfdfdf;
    border-radius: 50%;
  }
}
</style>
