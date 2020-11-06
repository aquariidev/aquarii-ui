<template>
  <!-- Default -->
  <div>
    <div v-if="!section">
      <aq-input v-model="name" :placeholder="placeholder" />

      <span>{{name}}</span>
    </div>

    <aq-input :placeholder="placeholder" v-if="section === 'group'">
      <template #append v-if="slotPosition == 'append' || slotPosition == 'both'">
        <aq-icon name="user" v-if="slotPosition !== 'both'"></aq-icon>
        <span v-else>https://</span>
      </template>

      <template #prepend v-if="slotPosition == 'prepend' || slotPosition == 'both'">
        .com
      </template>
    </aq-input>

    <div v-if="section === 'message'">
      <aq-input placeholder="Password" type="password">
        <template #message>
          Make your password short and easy to guess
        </template>
      </aq-input>

      <aq-input placeholder="Password" type="password">
        <template #message-error :name="name">
          Password must be at least 8 characters
        </template>
      </aq-input>
    </div>

    <div v-if="section === 'inline-group'">
      <aq-input :placeholder="placeholder" :append-inline="true">
        <template #append>
          $
        </template>
      </aq-input>

      <aq-input :placeholder="placeholder" :append-inline="true">
        <template #append>
          $
        </template>

        <template #prepend>
          USD
        </template>
      </aq-input>

      <aq-input :placeholder="placeholder" :append-inline="true" :prepend-inline="true">
        <template #append>
          $
        </template>

        <template #prepend>
          USD
        </template>
      </aq-input>
    </div>
  </div>
</template>

<script>
export default {
  props: ['section', 'slotPosition', 'placeholder'],
  data() {
    return {
      name: '',
    }
  }
}
</script>