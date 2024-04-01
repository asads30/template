<script>
import Swal from "sweetalert2";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Sweet-alert component
 */
export default {
  page: {
    title: "Sweet Alert 2",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "SweetAlert 2",
      items: [
        {
          text: "Extended UI",
          href: "/",
        },
        {
          text: "SweetAlert 2",
          active: true,
        },
      ],
    };
  },
  methods: {
    showAlert() {
      Swal.fire("Any fool can use a computer!");
    },
    titleText() {
      Swal.fire("The Internet?", "That thing is still around?", "question");
    },
    successmsg() {
      Swal.fire("Good job!", "You clicked the button!", "success");
    },
    position() {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    confirm() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#34c38f",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    cancel() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger ml-2",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          showCancelButton: true,
        })
        .then((result) => {
          if (result.value) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    },
    imageHeader() {
      Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: require("@/assets/images/logo-dark.png"),
        imageHeight: 20,
        confirmButtonColor: "#556ee6",
      });
    },
    timer() {
      let timerInterval;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            Swal.getContent().querySelector(
              "b"
            ).textContent = Swal.getTimerLeft();
          }, 100);
        },
        onClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.timer
        ) {
          console.log("I was closed by the timer"); // eslint-disable-line
        }
      });
    },
    custom() {
      Swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html:
          "You can use <b>bold text</b>, " +
          '<a href="//sweetalert2.github.io">links</a> ' +
          "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down",
      });
    },
    customBackground() {
      Swal.fire({
        title: "Custom width, padding, background.",
        width: 600,
        padding: 100,
        confirmButtonColor: "#556ee6",  
        background:
        '#fff url(' + require('@/assets/images/auth-bg.jpg') + ')'
          
      });
    },
    ajax() {
      Swal.fire({
        title: "Submit email to run ajax request",
        input: "email",
        showCancelButton: true,
        confirmButtonText: "Submit",
        showLoaderOnConfirm: true,
        confirmButtonColor: "#556ee6",
        cancelButtonColor: "#f46a6a",
        preConfirm: (email) => {
          // eslint-disable-next-line no-unused-vars
          return new Promise(function(resolve, reject) {
            setTimeout(function() {
              if (email === "taken@example.com") {
                Promise.reject(new Error("This email is already taken."));
              } else {
                resolve();
              }
            }, 2000);
          });
        },
        allowOutsideClick: false,
      }).then((email) => {
        Swal.fire({
          title: "Ajax request finished!",
          html: "Submitted email: " + email,
        });
      });
    }
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Examples</h4>
            <a
              href="https://sweetalert2.github.io/#examples"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-nowrap align-middle justify-content-center mb-0"
              >
                <thead>
                  <tr>
                    <th scope="col" style="width: 50%;">
                      Sweet Alert Type
                    </th>
                    <th scope="col" class="text-center">
                      Sweet Alert Examples
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      A Basic Message
                    </th>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="showAlert"
                      >
                        Click me
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      A title with a text under
                    </th>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="titleText"
                      >
                        Click me
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      A success message!
                    </th>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="successmsg"
                      >
                        Click me
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      A warning message, with a function attached to the
                      "Confirm"-button...
                    </th>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="confirm"
                      >
                        Click me
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      By passing a parameter, you can execute something else for
                      "Cancel".
                    </th>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="cancel"
                      >
                        Click me
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      A message with custom Image Header
                    </th>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="imageHeader"
                      >
                        Click me
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      A message with auto close timer
                    </th>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="timer"
                      >
                        Click me
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Custom HTML description and buttons
                    </th>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="custom"
                      >
                        Click me
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      A custom positioned dialog
                    </th>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="position"
                      >
                        Click me
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      A message with custom width, padding and background
                    </th>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="customBackground"
                      >
                        Click me
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Ajax request example
                    </th>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="ajax"
                      >
                        Click me
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
