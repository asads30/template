<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import Choices from "choices.js";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

/**
 * Form advanced component
 */
export default {
  page: {
    title: "Form Advanced Plugins",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Advanced Plugins",
      items: [
        {
          text: "Forms",
        },
        {
          text: "Advanced Plugins",
          active: true,
        },
      ],
      date: null,
      datetime: new Date(),
      config: {
        enableTime: true,
        dateFormat: "m-d-Y H:i",
      },
      humanfriendly: null,
      humanfriendlyOptions: {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
      },
      minMax: null,
      minMaxOptions: {
        minDate: "today",
        maxDate: new Date().fp_incr(14),
      },
      disabled: null,
      disabledOptions: {
        onReady: function() {
          this.jumpToDate("2025-01");
        },
        disable: [
          "2025-01-30",
          "2025-02-21",
          "2025-03-08",
          new Date(2025, 4, 9),
        ],
        dateFormat: "Y-m-d",
      },
      multiple: null,
      multipleOptions: {
        mode: "multiple",
        dateFormat: "Y-m-d",
      },
      isRange: null,
      rangeOptions: {
        mode: "range",
      },
      isTime: null,
      timeOptions: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
      },
      inlineOptions: {
        inline: true,
      },
      inlinePicker: null
    };
  },
  components: {
    Layout,
    PageHeader,
    flatPickr,
  },
  mounted() {
    const genericExamples = document.querySelectorAll("[data-trigger]");

    for (let i = 0; i < genericExamples.length; ++i) {
      let element = genericExamples[i];
      new Choices(element, {
        placeholderValue: "This is a placeholder set in the config",
        searchPlaceholderValue: "This is a search placeholder",
      });
    }

    new Choices("#choices-single-no-search", {
      searchEnabled: false,
      removeItemButton: true,
      choices: [
        {
          value: "One",
          label: "Label One",
        },
        {
          value: "Two",
          label: "Label Two",
          disabled: true,
        },
        {
          value: "Three",
          label: "Label Three",
        },
      ],
    }).setChoices(
      [
        {
          value: "Four",
          label: "Label Four",
          disabled: true,
        },
        {
          value: "Five",
          label: "Label Five",
        },
        {
          value: "Six",
          label: "Label Six",
          selected: true,
        },
      ],
      "value",
      "label",
      false
    );

    new Choices("#choices-single-no-sorting", {
      shouldSort: false,
    });

    new Choices("#choices-multiple-remove-button", {
      removeItemButton: true,
    });

    new Choices(document.getElementById("choices-multiple-groups"));

    new Choices(document.getElementById("choices-text-remove-button"), {
      delimiter: ",",
      editItems: true,
      maxItemCount: 5,
      removeItemButton: true,
    });

    new Choices("#choices-text-unique-values", {
      paste: false,
      duplicateItemsAllowed: false,
      editItems: true,
    });

    new Choices("#choices-text-disabled", {
      addItems: false,
      removeItems: false,
    }).disable();
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-12">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Css Switch</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row">
              <div class="col-xl-6">
                <h5 class="font-size-14 mb-3">Example Switch</h5>
                <div class="d-flex flex-wrap gap-2">
                  <input type="checkbox" id="switch1" switch="none" checked />
                  <label
                    for="switch1"
                    data-on-label="On"
                    data-off-label="Off"
                    class="mb-0"
                  ></label>

                  <input
                    type="checkbox"
                    id="switch2"
                    switch="default"
                    checked
                  />
                  <label
                    for="switch2"
                    data-on-label=""
                    data-off-label=""
                    class="mb-0"
                  ></label>

                  <input type="checkbox" id="switch3" switch="bool" checked />
                  <label
                    for="switch3"
                    data-on-label="Yes"
                    data-off-label="No"
                    class="mb-0"
                  ></label>

                  <input
                    type="checkbox"
                    id="switch6"
                    switch="primary"
                    checked
                  />
                  <label
                    for="switch6"
                    data-on-label="Yes"
                    data-off-label="No"
                    class="mb-0"
                  ></label>

                  <input
                    type="checkbox"
                    id="switch4"
                    switch="success"
                    checked
                  />
                  <label
                    for="switch4"
                    data-on-label="Yes"
                    data-off-label="No"
                    class="mb-0"
                  ></label>

                  <input type="checkbox" id="switch7" switch="info" checked />
                  <label
                    for="switch7"
                    data-on-label="Yes"
                    data-off-label="No"
                    class="mb-0"
                  ></label>

                  <input
                    type="checkbox"
                    id="switch5"
                    switch="warning"
                    checked
                  />
                  <label
                    for="switch5"
                    data-on-label="Yes"
                    data-off-label="No"
                    class="mb-0"
                  ></label>

                  <input type="checkbox" id="switch8" switch="danger" checked />
                  <label
                    for="switch8"
                    data-on-label="Yes"
                    data-off-label="No"
                    class="mb-0"
                  ></label>

                  <input type="checkbox" id="switch9" switch="dark" checked />
                  <label
                    for="switch9"
                    data-on-label="Yes"
                    data-off-label="No"
                    class="mb-0"
                  ></label>
                </div>
              </div>
              <!-- end col -->

              <div class="col-xl-6">
                <div class="mt-4 mt-xl-0">
                  <h5 class="font-size-14 mb-3">Square Switch</h5>
                  <div class="d-flex flex-wrap gap-2">
                    <div class="square-switch">
                      <input
                        type="checkbox"
                        id="square-switch1"
                        switch="none"
                        checked
                      />
                      <label
                        for="square-switch1"
                        data-on-label="On"
                        data-off-label="Off"
                        class="mb-0"
                      ></label>
                    </div>
                    <div class="square-switch">
                      <input
                        type="checkbox"
                        id="square-switch2"
                        switch="info"
                        checked
                      />
                      <label
                        for="square-switch2"
                        data-on-label="Yes"
                        data-off-label="No"
                        class="mb-0"
                      ></label>
                    </div>
                    <div class="square-switch">
                      <input
                        type="checkbox"
                        id="square-switch3"
                        switch="bool"
                        checked
                      />
                      <label
                        for="square-switch3"
                        data-on-label="Yes"
                        data-off-label="No"
                        class="mb-0"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Choices</h4>
            <a
              href="https://www.cssscript.com/demo/customizable-select-box-input-field-enhancement-library-choices-js/"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div>
              <h5 class="font-size-14 mb-3">Single select input Example</h5>
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="mb-3">
                    <label
                      for="choices-single-default"
                      class="form-label font-size-13 text-muted"
                      >Default</label
                    >
                    <select
                      class="form-control"
                      data-trigger
                      name="choices-single-default"
                      id="choices-single-default"
                    >
                      <option value="">This is a placeholder</option>
                      <option value="Choice 1">Choice 1</option>
                      <option value="Choice 2">Choice 2</option>
                      <option value="Choice 3">Choice 3</option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="mb-3">
                    <label
                      for="choices-single-groups"
                      class="form-label font-size-13 text-muted"
                      >Option groups</label
                    >
                    <select
                      class="form-control"
                      data-trigger
                      name="choices-single-groups"
                      id="choices-single-groups"
                    >
                      <option value="">Choose a city</option>
                      <optgroup label="UK">
                        <option value="London">London</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Liverpool">Liverpool</option>
                      </optgroup>
                      <optgroup label="FR">
                        <option value="Paris">Paris</option>
                        <option value="Lyon">Lyon</option>
                        <option value="Marseille">Marseille</option>
                      </optgroup>
                      <optgroup label="DE" disabled>
                        <option value="Hamburg">Hamburg</option>
                        <option value="Munich">Munich</option>
                        <option value="Berlin">Berlin</option>
                      </optgroup>
                      <optgroup label="US">
                        <option value="New York">New York</option>
                        <option value="Washington" disabled>Washington</option>
                        <option value="Michigan">Michigan</option>
                      </optgroup>
                      <optgroup label="SP">
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Malaga">Malaga</option>
                      </optgroup>
                      <optgroup label="CA">
                        <option value="Montreal">Montreal</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Vancouver">Vancouver</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="mb-3">
                    <label
                      for="choices-single-no-search"
                      class="form-label font-size-13 text-muted"
                      >Options added via config with no search</label
                    >
                    <select
                      class="form-control"
                      name="choices-single-no-search"
                      id="choices-single-no-search"
                    >
                      <option value="0">Zero</option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="mb-3">
                    <label
                      for="choices-single-no-sorting"
                      class="form-label font-size-13 text-muted"
                      >Options added via config with no search</label
                    >
                    <select
                      class="form-control"
                      name="choices-single-no-sorting"
                      id="choices-single-no-sorting"
                    >
                      <option value="Madrid">Madrid</option>
                      <option value="Toronto">Toronto</option>
                      <option value="Vancouver">Vancouver</option>
                      <option value="London">London</option>
                      <option value="Manchester">Manchester</option>
                      <option value="Liverpool">Liverpool</option>
                      <option value="Paris">Paris</option>
                      <option value="Malaga">Malaga</option>
                      <option value="Washington" disabled>Washington</option>
                      <option value="Lyon">Lyon</option>
                      <option value="Marseille">Marseille</option>
                      <option value="Hamburg">Hamburg</option>
                      <option value="Munich">Munich</option>
                      <option value="Barcelona">Barcelona</option>
                      <option value="Berlin">Berlin</option>
                      <option value="Montreal">Montreal</option>
                      <option value="New York">New York</option>
                      <option value="Michigan">Michigan</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- end row -->
            </div>
            <!-- Single select input Example -->

            <div class="mt-4">
              <h5 class="font-size-14 mb-3">Multiple select input</h5>

              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="mb-3">
                    <label
                      for="choices-multiple-default"
                      class="form-label font-size-13 text-muted"
                      >Default</label
                    >
                    <select
                      class="form-control"
                      data-trigger
                      name="choices-multiple-default"
                      id="choices-multiple-default"
                      multiple
                    >
                      <option value="Choice 1" selected>Choice 1</option>
                      <option value="Choice 2">Choice 2</option>
                      <option value="Choice 3">Choice 3</option>
                      <option value="Choice 4" disabled>Choice 4</option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="mb-3">
                    <label
                      for="choices-multiple-remove-button"
                      class="form-label font-size-13 text-muted"
                      >With remove button</label
                    >
                    <select
                      class="form-control"
                      name="choices-multiple-remove-button"
                      id="choices-multiple-remove-button"
                      multiple
                    >
                      <option value="Choice 1" selected>Choice 1</option>
                      <option value="Choice 2">Choice 2</option>
                      <option value="Choice 3">Choice 3</option>
                      <option value="Choice 4">Choice 4</option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="mb-3">
                    <label
                      for="choices-multiple-groups"
                      class="form-label font-size-13 text-muted"
                      >Option groups</label
                    >
                    <select
                      class="form-control"
                      name="choices-multiple-groups"
                      id="choices-multiple-groups"
                      multiple
                    >
                      <option value="">Choose a city</option>
                      <optgroup label="UK">
                        <option value="London">London</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Liverpool">Liverpool</option>
                      </optgroup>
                      <optgroup label="FR">
                        <option value="Paris">Paris</option>
                        <option value="Lyon">Lyon</option>
                        <option value="Marseille">Marseille</option>
                      </optgroup>
                      <optgroup label="DE" disabled>
                        <option value="Hamburg">Hamburg</option>
                        <option value="Munich">Munich</option>
                        <option value="Berlin">Berlin</option>
                      </optgroup>
                      <optgroup label="US">
                        <option value="New York">New York</option>
                        <option value="Washington" disabled>Washington</option>
                        <option value="Michigan">Michigan</option>
                      </optgroup>
                      <optgroup label="SP">
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Malaga">Malaga</option>
                      </optgroup>
                      <optgroup label="CA">
                        <option value="Montreal">Montreal</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Vancouver">Vancouver</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
              </div>
              <!-- end row -->
            </div>
            <!-- multi select input Example -->

            <div class="mt-4">
              <h5 class="font-size-14 mb-3">Text inputs</h5>

              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="mb-3">
                    <label
                      for="choices-text-remove-button"
                      class="form-label font-size-13 text-muted"
                      >Limited to 5 values with remove button</label
                    >
                    <input
                      class="form-control"
                      id="choices-text-remove-button"
                      type="text"
                      value="Task-1,Task-2"
                    />
                  </div>
                </div>
                <!-- end col -->

                <div class="col-lg-4 col-md-6">
                  <div class="mb-3">
                    <label
                      for="choices-text-unique-values"
                      class="form-label font-size-13 text-muted"
                      >Unique values only, no pasting</label
                    >
                    <input
                      class="form-control"
                      id="choices-text-unique-values"
                      type="text"
                      value="Project-A, Project-B"
                    />
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->

              <div>
                <label
                  for="choices-text-disabled"
                  class="form-label font-size-13 text-muted"
                  >Disabled</label
                >
                <input
                  class="form-control"
                  id="choices-text-disabled"
                  type="text"
                  value="josh@joshuajohnson.co.uk, joe@bloggs.co.uk"
                />
              </div>
            </div>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Datepicker</h4>
            <a
              href="https://www.npmjs.com/package/vue-flatpickr-component"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <form action="#">
              <div class="row">
                <div class="col-xl-6">
                  <div class="mb-3">
                    <label class="form-label">Basic</label>
                    <flat-pickr
                      v-model="date"
                      placeholder="Select a date"
                      name="birthdate"
                      class="form-control"
                    ></flat-pickr>
                  </div>

                  <div class="mb-3">
                    <label class="form-label">DateTime</label>
                    <flat-pickr
                      v-model="datetime"
                      :config="config"
                      placeholder="Select a date"
                      name="birthdate"
                      class="form-control"
                    ></flat-pickr>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Human-friendly Dates</label>
                    <flat-pickr
                      v-model="humanfriendly"
                      :config="humanfriendlyOptions"
                      placeholder="Select a date"
                      name="birthdate"
                      class="form-control"
                    ></flat-pickr>
                  </div>

                  <div class="mb-3">
                    <label class="form-label">MinDate and MaxDate</label>
                    <flat-pickr
                      v-model="minMax"
                      :config="minMaxOptions"
                      placeholder="Select a date"
                      name="birthdate"
                      class="form-control"
                    ></flat-pickr>
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Disabling dates</label>
                    <flat-pickr
                      v-model="disabled"
                      :config="disabledOptions"
                      placeholder="Select a date"
                      name="birthdate"
                      class="form-control"
                    ></flat-pickr>
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Selecting multiple dates</label>
                    <flat-pickr
                      v-model="multiple"
                      :config="multipleOptions"
                      placeholder="Select a date"
                      name="birthdate"
                      class="form-control"
                    ></flat-pickr>
                  </div>
                </div>
                <!-- end col -->

                <div class="col-xl-6">
                  <div class="mt-3 mt-lg-0">
                    <div class="mb-3">
                      <label class="form-label">Range</label>
                      <flat-pickr
                        v-model="isRange"
                        :config="rangeOptions"
                        placeholder="Select a date"
                        class="form-control"
                      ></flat-pickr>
                    </div>

                    <div class="mb-3">
                      <label class="form-label">Timepicker</label>
                      <flat-pickr
                        v-model="isTime"
                        :config="timeOptions"
                        placeholder="Select a date"
                        class="form-control"
                      >
                      </flat-pickr>
                    </div>

                    <div>
                      <label class="form-label">Inline</label>
                      <flat-pickr
                        v-model="inlinePicker"
                        :config="inlineOptions"
                        class="form-control"
                      >
                      </flat-pickr>
                    </div>
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </form>
            <!-- end form -->
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
