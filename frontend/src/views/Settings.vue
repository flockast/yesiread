<template>
  <div class="page-settings">
    <h1>Your settings</h1>
    <div class="settings-list">
      <div class="setting-item">
        <div class="setting-item__label">Theme:</div>
        <div class="setting-item__content">
          <div class="themes-list">
            <div class="theme-choose theme-choose--default">
              <input type="radio" id="theme-default" value="default" v-model="currentTheme">
              <div class="theme-choose__radio"></div>
              <label class="theme-choose__label" for="theme-default">Default</label>
            </div>
            <div class="theme-choose theme-choose--dark">
              <input type="radio" id="theme-dark" value="dark" v-model="currentTheme">
              <div class="theme-choose__radio"></div>
              <label class="theme-choose__label" for="theme-default">Dark</label>
            </div>
            <div class="theme-choose theme-choose--black">
              <input type="radio" id="theme-black" value="black" v-model="currentTheme">
              <div class="theme-choose__radio"></div>
              <label class="theme-choose__label" for="theme-default">Black</label>
            </div>
          </div>
        </div>
      </div>
      <div class="setting-item">
        <div class="setting-item__label">Size:</div>
        <div class="setting-item__content">
          <div class="slider-content">
            <Vue-slider v-model="currentSize"
                        :min="1"
                        :max="10"
                        :adsorb="true"
                        :marks="true"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      currentTheme: 'default',
			currentSize: 0
    }
  },
  computed: mapGetters('settings', ['theme', 'size', 'sizePx']),
  methods: mapActions('settings', ['changeTheme', 'changeSize']),
  watch: {
		currentTheme() {
			// change theme
      this.changeTheme(this.currentTheme);
      document.documentElement.setAttribute('theme', this.currentTheme);

    },
    currentSize() {
      // change size
			this.changeSize(this.currentSize);
			setTimeout(() => {
        document.documentElement.style.fontSize = `${this.sizePx}px`;
      }, 600)
    }
  },
  mounted() {
    this.currentTheme = this.theme;
    this.currentSize = this.size;
  },
  components: {
		VueSlider
  }
}
</script>

<style lang="scss">
.settings-list {}
.setting-item {
  margin-bottom: 2rem;
  &__label {
    margin-bottom: 1rem;
  }
  &__content {

  }
}

// Выбор темы радио кнопки
.themes-list {
  display: flex;
}
.theme-choose {
  position: relative;
  margin-right: 2rem;
  &--default {
    .theme-choose__radio {
      background: rgb(255,255,255);
      background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 52%, rgba(222,222,222,1) 100%);
    }
  }
  &--dark {
    .theme-choose__radio {
      background: #15202c;
    }
  }
  &--black {
    .theme-choose__radio {
      background: black;
    }
  }
  input {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }
  &__radio {
    border-radius: 4px;
    width: 6rem;
    height: 3rem;
  }
  &__label {
    display: block;
    color: var(--color-text-grey);
    font-size: 1.6rem;
    text-align: center;
  }
  input:checked + .theme-choose__radio {
    box-shadow: 0 0 0 2px var(--color-accent);
  }
}

.slider-content {
  max-width: 50rem;
}
</style>
