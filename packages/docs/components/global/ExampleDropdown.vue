<template>
  <div>
    <aq-dropdown v-if="!type">
      <template #activator="{on, attrs}">
        <aq-button v-on="on" v-bind="attrs" color="primary">Dropdown</aq-button>
      </template>
      <a href="#" role="menu">Details</a>
      <a href="#" role="menu">Edit</a>
    </aq-dropdown>

    <aq-dropdown v-if="type === 'icon'">
      <template #activator="{on, attrs}">
        <aq-button v-on="on" v-bind="attrs" color="primary">
          Dropdown
        </aq-button>
      </template>
      <a href="#" role="menu">
        <aq-icon name="exclamation-circle"/>
        Detail
      </a>
      <hr class="aq-divider" v-if="divider">
      <a href="#" role="menu">
        <aq-icon name="pencil"/>
        Edit
      </a>
    </aq-dropdown>
  </div>
</template>

<script>
export default {
  props: ['type', 'divider']
}
</script>