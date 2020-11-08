<template>
  <div>
    <aq-card v-if="section === 'header-footer'">
      <template #header>
        <h1>Card Header</h1>
      </template>

      <template #body>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum veniam, labore nulla fugit ipsum doloremque
          nesciunt voluptas modi sapiente sequi distinctio culpa voluptatem dolores? Magni, magnam. Omnis dolores commodi
          porro.</p>
      </template>

      <template #footer>
        <aq-button color="primary">Details</aq-button>
        <aq-button>Preview</aq-button>
      </template>
    </aq-card>

    <aq-card v-if="section === 'media'">
      <aq-card-media>
        <img src="https://picsum.photos/seed/picsum/600/400" alt="Card Media">
      </aq-card-media>

      <template #body>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum veniam, labore nulla fugit ipsum doloremque
          nesciunt voluptas modi sapiente sequi distinctio culpa voluptatem dolores? Magni, magnam. Omnis dolores commodi
          porro.</p>
      </template>
    </aq-card>

    <aq-card v-if="section === 'raised'" raised>
      <aq-card-media>
        <img src="https://picsum.photos/seed/picsum/600/400" alt="Card Media">
      </aq-card-media>

      <template #body>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum veniam, labore nulla fugit ipsum doloremque
          nesciunt voluptas modi sapiente sequi distinctio culpa voluptatem dolores? Magni, magnam. Omnis dolores commodi
          porro.</p>
      </template>
    </aq-card>
  </div>
</template>

<script>
export default {
  props: ['section'],
}
</script>