<script>
import simplebar from "simplebar-vue";
import { required } from "vuelidate/lib/validators";

/**
 * Chat list - Renders a chat list with a form to enter new message
 */
export default {
  components: {
    simplebar,
  },
  props: {
    title: {
      type: String,
      default: "Chat",
    },
    chatWindowHeight: {
      type: String,
      default: "200",
    },
    chatMessages: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  data() {
    return {
      chats: {
        message: "",
      },
      submitform: false,
    };
  },
  validations: {
    chats: {
      message: { required },
    },
  },
  methods: {
    /**
     * Chat form submit
     */
    saveMessage() {
      this.submitform = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        var id = this.chatMessages.length;
        const message = this.chats.message;
        const currentDate = new Date();

        // Message Push in Chat
        this.chatMessages.push({
          image: require("@/assets/images/users/avatar-1.jpg"),
          id: id + 1,
          name: "Kate",
          message,
          time: currentDate.getHours() + ":" + currentDate.getMinutes(),
        });
      }
      this.submitform = false;
      this.chats = {};
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="p-3 px-lg-4 border-bottom">
      <div class="row">
        <div class="col-xl-4 col-7">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 avatar me-3 d-sm-block d-none">
              <img
                src="@/assets/images/users/avatar-2.jpg"
                alt=""
                class="img-thumbnail d-block rounded-circle"
              />
            </div>
            <div class="flex-grow-1">
              <h5 class="font-size-14 mb-1 text-truncate">
                <a href="javascript:void(0);" class="text-dark">Daniel Pickering</a>
              </h5>
              <p class="text-muted text-truncate mb-0">Online</p>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-5">
          <ul class="list-inline user-chat-nav text-end mb-0">
            <li class="list-inline-item">
              <b-dropdown variant="white" toggle-class="nav-btn" right>
                <template v-slot:button-content>
                  <i class="uil uil-search"></i>
                </template>
                <form class="px-2">
                  <div>
                    <input
                      type="text"
                      class="form-control bg-light rounded"
                      placeholder="Search..."
                    />
                  </div>
                </form>
              </b-dropdown>
            </li>
            <!-- end li -->
            <li class="list-inline-item">
              <b-dropdown variant="white" toggle-class="nav-btn" right>
                <template v-slot:button-content>
                  <i class="uil uil-ellipsis-h"></i>
                </template>
                <b-dropdown-item>Profile</b-dropdown-item>
                <b-dropdown-item>Archive</b-dropdown-item>
                <b-dropdown-item>Muted</b-dropdown-item>
                <b-dropdown-item>Delete</b-dropdown-item>
              </b-dropdown>
            </li>
            <!-- end li -->
          </ul>
          <!-- end ul -->
        </div>
      </div>
    </div>

    <simplebar :style="`max-height:${chatWindowHeight}`">
      <div class="chat-conversation p-3 px-2 widget-chat">
        <ul class="list-unstyled mb-0">
          <li
            v-for="(chat, index) in chatMessages"
            :key="index"
            :class="{ right: `${chat.align}` === 'right' }"
          >
            <div class="conversation-list">
              <div class="ctext-wrap">
                <div class="chat-avatar">
                  <img :src="`${chat.image}`" alt="avatar-2" />
                </div>
                <div class="ctext-wrap-content">
                  <h5 class="conversation-name">
                    <a href="javascript:void(0);" class="user-name">{{ chat.name }}</a>
                    <span class="time">{{ chat.time }}</span>
                  </h5>
                  <p class="mb-0">{{ chat.message }}</p>
                </div>
                <b-dropdown variant="white" class="align-self-start">
                  <template v-slot:button-content>
                    <i class="uil uil-ellipsis-v"></i>
                  </template>
                  <b-dropdown-item>Copy</b-dropdown-item>
                  <b-dropdown-item>Save</b-dropdown-item>
                  <b-dropdown-item>Forward</b-dropdown-item>
                  <b-dropdown-item>Delete</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </simplebar>
    <form @submit.prevent="saveMessage">
      <div class="p-3 chat-input-section">
        <div class="row">
          <div class="col">
            <input
              id="message"
              v-model="chats.message"
              type="text"
              class="form-control"
              placeholder="Enter your text"
              name="message"
              :class="{ 'is-invalid': submitform && $v.chats.message.$error }"
            />
            <div
              v-if="submitform && !$v.chats.message.required"
              class="invalid-feedback"
            >
              This value is required.
            </div>
          </div>

          <div class="col-auto">
            <button type="submit" class="btn btn-primary chat-send w-md">
              <span class="d-none d-sm-inline-block me-2">Send</span>
              <i class="mdi mdi-send float-end"></i>
            </button>
          </div>
        </div>
        <!-- end row -->
      </div>
    </form>
    <!-- end form -->
  </div>
</template>
