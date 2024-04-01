<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Form-editors component
 */
export default {
  page: {
    title: "Form Editors",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader,
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      title: "Form Editors",
      items: [
        {
          text: "Forms",
        },
        {
          text: "Form Editors",
          active: true,
        },
      ],
      editor: ClassicEditor,
      editorData:
        "<h3>Hello World!</h3><h5><b>This is a simple editable area.</b></h5>",
      content: "<h1>Some initial content</h1>",
      plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor",
      ],
      toolbar:
        "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",
      options: {
        height: 300,
        style_formats: [
          { title: "Bold text", inline: "b" },
          { title: "Red text", inline: "span", styles: { color: "#ff0000" } },
          { title: "Red header", block: "h1", styles: { color: "#ff0000" } },
          { title: "Example 1", inline: "span", classes: "example1" },
          { title: "Example 2", inline: "span", classes: "example2" },
          { title: "Table styles" },
          { title: "Table row 1", selector: "tr", classes: "tablerow1" },
        ],
      },
      snowContent: `<h3><span class='ql-size-large'>Hello World!</span></h3><p><br></p><h3>This is a simple editable area.</h3><p><br></p>
              <ul>
                  <li>
                      Select a text to reveal the toolbar.
                  </li>
                  <li>
                      Edit rich document on-the-fly, so elastic!
                  </li>
              </ul>
              <p><br></p>
              <p>
                  End of simple area
              </p>`,
      editorOption: {
        theme: "bubble",
        placeholder: "every content，support html",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["link", "image"],
            ["clean"],
          ],
        },
      },
      bubbleContent: `
       <h3><span class="ql-size-large">Hello World!</span></h3>
        <p><br></p>
        <h3>This is a simple editable area.</h3>
        <p><br></p>
        <ul>
            <li>
                Select a text to reveal the toolbar.
            </li>
            <li>
                Edit rich document on-the-fly, so elastic!
            </li>
        </ul>
        <p><br></p>
        <p>
            End of simple area
        </p>
    `,
    };
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
            <h4 class="card-title">Ckeditor Classic Editor</h4>
            <a
              href="https://www.npmjs.com/package/@ckeditor/ckeditor5-vue"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <div class="card-body">
            <!-- Editor -->
            <ckeditor v-model="editorData" :editor="editor"></ckeditor>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div
          class="justify-content-between d-flex align-items-center mt-4 mb-3"
        >
          <h5 class="mb-0 pb-1 text-decoration-underline">Quilljs Editor</h5>
          <a
            href="https://www.npmjs.com/package/vue-quill-editor"
            target="_blank"
            class="btn btn-sm btn-soft-secondary"
            >Docs <i class="mdi mdi-arrow-right align-middle"></i
          ></a>
        </div>
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Snow Editor</h4>
          </div>
          <div class="card-body">
            <div class="">
              <quill-editor v-model="snowContent" output="html" style="height: 300px;" ></quill-editor>
            </div>
          </div>
        </div>
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Bubble Editor</h4>
          </div>
          <div class="card-body">
            <quill-editor
              class="editor"
              :content="bubbleContent"
              :options="editorOption"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
