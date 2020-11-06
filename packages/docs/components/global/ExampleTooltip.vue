<template>
  <div>
    <aq-tooltip v-if="!section" title="Hello Jimmy Electron">
      <aq-button color="primary">Hover</aq-button>
    </aq-tooltip>

    <div v-if="section === 'position'">
      <aq-tooltip title="Hello Jimmy Electron" :pos="position">
        <aq-button color="primary">
          <span class="capitalize">{{position}}</span>
          Tooltip</aq-button>
      </aq-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  props: ['section', 'position'],
}
</script>