<template>
  <q-page class="q-pa-md">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        default-opened
        expand-separator
        icon="settings_suggest"
        label="System"
        :header-class="['bg-grey-4']"
      >
        <q-card>
          <q-card-section>
            <q-item>
              <q-item-section>
                <q-item-label lines="1">Name</q-item-label>
                <q-item-label caption>{{pcInfoObject.systemName}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label lines="1">Description</q-item-label>
                <q-item-label caption>{{pcInfoObject.systemDescription}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const pcInfoObject = ref(null)

    pcInfoObject.value = window.myApi.pcInfo()

    return {
      pcInfoObject,
    }
  }
})
</script>
