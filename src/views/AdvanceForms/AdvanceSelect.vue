<template>
  <div class="max-w-sm">
    <select
      data-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[tabler--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[tabler--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
    }'
      class="hidden"
    >
      <option value="">Choose</option>
      <option value="name">Full Name</option>
      <option value="email">Email Address</option>
      <option value="description">Project Description</option>
      <option value="user_id">User Identification Number</option>
    </select>
  </div>
</template>
