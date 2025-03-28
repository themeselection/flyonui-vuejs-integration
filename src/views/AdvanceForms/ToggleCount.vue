<template>
  <div class="card w-40">
    <div class="text-base-content/90 card-body font-semibold">
      <p
        data-toggle-count='{
"target": "#toggle-duration-usage",
"min": 10,
"max": 100,
"duration":100
}'
        class="mb-2 text-center text-5xl"
      >
        10
      </p>
      <input
        id="toggle-duration-usage"
        name="toggle-count-method"
        type="checkbox"
        class="switch switch-primary mx-auto"
        aria-label="toggle count"
      />
    </div>
  </div>
</template>
