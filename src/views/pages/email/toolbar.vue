<template>
  <div>
    <div class="btn-group me-2 mb-2 mb-sm-0">
      <button type="button" class="btn btn-primary">
        <i class="fa fa-inbox"></i>
      </button>
      <button type="button" class="btn btn-primary">
        <i class="fa fa-exclamation-circle"></i>
      </button>
      <button type="button" class="btn btn-primary">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>

    <b-dropdown class="btn-group me-2 mb-2 mb-sm-0" variant="primary">
      <template slot="button-content">
        <i class="fa fa-folder"></i>
        <i class="mdi mdi-chevron-down ms-2"></i>
      </template>

      <b-dropdown-item>Updates</b-dropdown-item>
      <b-dropdown-item>Social</b-dropdown-item>
      <b-dropdown-item>Team Manage</b-dropdown-item>
    </b-dropdown>

    <b-dropdown class="btn-group me-2 mb-2 mb-sm-0" variant="primary">
      <template slot="button-content">
        <i class="fa fa-tag"></i>
        <i class="mdi mdi-chevron-down ms-2"></i>
      </template>
      <b-dropdown-item>Updates</b-dropdown-item>
      <b-dropdown-item>Social</b-dropdown-item>
      <b-dropdown-item>Team Manage</b-dropdown-item>
    </b-dropdown>

    <b-dropdown class="btn-group me-2 mb-2 mb-sm-0" variant="primary">
      <template slot="button-content">
        More
        <i class="mdi mdi-dots-vertical ms-2"></i>
      </template>
      <b-dropdown-item>Mark as Unread</b-dropdown-item>
      <b-dropdown-item>Add to Tasks</b-dropdown-item>
      <b-dropdown-item>Add Star</b-dropdown-item>
      <b-dropdown-item>Mute</b-dropdown-item>
    </b-dropdown>
  </div>
</template>