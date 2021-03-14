<template>
  <div class="top-nav">
    <theme-switcher class="switcher" />
    <div class="title">
      A Curation of
      <span class="year"> 2020 <IconsArrowDownIcon class="down-icon" /></span>
      <br />
      Nigerian Albums.
    </div>
    <div class="sub-title">
      by <br />
      <span class="underline">WeTalkSound</span>
    </div>
  </div>
</template>

<style>
.top-nav {
  @apply flex flex-col;
  padding: 8px 0;
  font-weight: 500;
  width: 100%;
}

.switcher {
  align-self: flex-end;
}

.title {
  font-size: 24px;
  align-self: flex-start;
}

.year {
  text-decoration: underline;
}

.down-icon {
  @apply inline;
}

.sub-title {
  align-self: flex-end;
}
</style>
