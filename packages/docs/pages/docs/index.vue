<template>
  <div>
    Redirect
  </div>
</template>

<script>
export default {
  middleware({redirect}) {
    return redirect('/docs/introduction')
  }
}
</script>