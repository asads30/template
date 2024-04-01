<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

/**
 * Sidepanel component
 */
export default {
  components: { ckeditor: CKEditor.component },
  data() {
    return {
      showModal: false,
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>"
    };
  }
};
</script>

<template>
  <div class="email-leftbar card">
    <b-button variant="danger" class="w-100 fw-semibold" @click="showModal = true">Compose</b-button>
    <div class="mail-list mt-4">
      <router-link tag="a" to="/email/inbox" class="active">
        <i class="bx bxs-inbox font-size-16 align-middle me-2"></i> Inbox
        <span class="ms-1 float-end">(18)</span>
      </router-link>
      <router-link tag="a" to="/email/inbox">
        <i class="bx bx-star font-size-16 align-middle me-2"></i>Starred
      </router-link>
      <router-link tag="a" to="/email/inbox">
        <i class="bx bxs-bookmark font-size-16 align-middle me-2"></i>Important
      </router-link>
      <router-link tag="a" to="/email/inbox">
        <i class="bx bx-file font-size-16 align-middle me-2"></i>Draft
      </router-link>
      <router-link tag="a" to="/email/inbox">
        <i class="bx bx-mail-send font-size-16 align-middle me-2"></i>Sent Mail
      </router-link>
      <router-link tag="a" to="/email/inbox">
        <i class="bx bx-trash font-size-16 align-middle me-2"></i>Trash
      </router-link>
    </div>

    <h6 class="mt-4">Labels</h6>

    <div class="mail-list mt-1">
      <a href="#"><span class="mdi mdi-circle-outline text-info me-2"></span>Theme Support</a>
      <a href="#"><span class="mdi mdi-circle-outline text-warning me-2"></span>Freelance</a>
      <a href="#"><span class="mdi mdi-circle-outline text-primary me-2"></span>Social</a>
      <a href="#"><span class="mdi mdi-circle-outline text-danger me-2"></span>Friends</a>
      <a href="#"><span class="mdi mdi-circle-outline text-success me-2"></span>Family</a>
    </div>

    <b-modal v-model="showModal" title="New Message" centered>
      <form>
        <div class="mb-3">
          <input type="email" class="form-control" placeholder="To" />
        </div>

        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Subject" />
        </div>
        <div class="mb-3">
          <ckeditor v-model="editorData" :editor="editor"></ckeditor>
        </div>
      </form>
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="showModal = false">Close</b-button>
        <b-button variant="primary">
          Send
          <i class="fab fa-telegram-plane ms-1"></i>
        </b-button>
      </template>
    </b-modal>
  </div>
</template>