<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="glossy">
      
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          <img alt="Quasar logo" src="./assets/favicon.png">
          Order App
        </q-toolbar-title>

        <div>
          most top right
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <!-- <q-item-label header>Essential Links</q-item-label> -->
        <q-item clickable tag="a" target="_blank" href="#">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <!-- <q-item-label caption>quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="#">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Order Upcoming</q-item-label>
            <!-- <q-item-label caption>github.com/quasarframework</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="#">
          <q-item-section avatar>
            <q-icon name="grid_on" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Confirmed Order</q-item-label>
            <!-- <q-item-label caption>chat.quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="#">
          <q-item-section avatar>
            <q-icon name="forum" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Delivery Form</q-item-label>
            <!-- <q-item-label caption>forum.quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="#">
          <q-item-section avatar>
            <q-icon name="restore" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Archive</q-item-label>
            <!-- <q-item-label caption>@quasarframework</q-item-label> -->
          </q-item-section>
        </q-item>
        <hr>
        <q-item-label header>INVENTORY</q-item-label>
        <q-item clickable tag="a" target="_blank" href="#">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Catalog</q-item-label>
            <!-- <q-item-label caption>@quasarframework</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="#">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Promotions</q-item-label>
            <!-- <q-item-label caption>@quasarframework</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="#">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Import From Square</q-item-label>
            <!-- <q-item-label caption>@quasarframework</q-item-label> -->
          </q-item-section>
        </q-item>
        <hr>
        <q-item-label header>STATISTICS</q-item-label>
        <q-item clickable tag="a" target="_blank" href="javascript:void(0)">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Delivery Main</q-item-label>
            <!-- <q-item-label caption>@quasarframework</q-item-label> -->
          </q-item-section>
        </q-item>
        <hr>
        <a href="#">About</a> <a href="#">Press</a> <a href="#">Copyright</a> <a href="#">Contact us</a><br>
        <a href="#">Creators</a> <a href="#">Advertise</a> <a href="#">Developers</a><br><br>

        <a href="#">Terms</a> <a href="#">Provacy</a> <a href="#">Policy & Safety</a>
      </q-list>
    </q-drawer>

    <q-page-container>
      <HelloWorld />
    </q-page-container>


  </q-layout>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
