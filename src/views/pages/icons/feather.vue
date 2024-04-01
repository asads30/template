<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Feather icon component
 */
export default {
  page: {
    title: "Feather Icons",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Feather Icons",
      items: [
        {
          text: "Icons",
          href: "/",
        },
        {
          text: "Feather Icons",
          active: true,
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
          <div class="card">
              <div class="card-header justify-content-between d-flex align-items-center">
                  <h4 class="card-title">Feather Icons</h4>
                    <a href="https://www.npmjs.com/package/vue-feather" target="_blank" class="btn btn-sm btn-soft-secondary">Docs <i class="mdi mdi-arrow-right align-middle"></i></a>
                </div><!-- end card header -->
              <div class="card-body">
                  <div class="row icon-demo-content">
                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="activity"></feather><span>activity</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="airplay"></feather><span>airplay</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="alert-circle"></feather><span>alert-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="alert-octagon"></feather><span>alert-octagon</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="alert-triangle"></feather><span>alert-triangle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="align-center"></feather><span>align-center</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="align-justify"></feather><span>align-justify</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="align-left"></feather><span>align-left</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="align-right"></feather><span>align-right</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="anchor"></feather><span>anchor</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="aperture"></feather><span>aperture</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="archive"></feather><span>archive</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="arrow-down-circle"></feather><span>arrow-down-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="arrow-down-left"></feather><span>arrow-down-left</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="arrow-down-right"></feather><span>arrow-down-right</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="arrow-down"></feather><span>arrow-down</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="arrow-left-circle"></feather><span>arrow-left-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="arrow-left"></feather><span>arrow-left</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="arrow-right-circle"></feather><span>arrow-right-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="arrow-right"></feather><span>arrow-right</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="arrow-up-circle"></feather><span>arrow-up-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="arrow-up-left"></feather><span>arrow-up-left</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="arrow-up-right"></feather><span>arrow-up-right</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="arrow-up"></feather><span>arrow-up</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="at-sign"></feather><span>at-sign</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="award"></feather><span>award</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="bar-chart-2"></feather><span>bar-chart-2</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="bar-chart"></feather><span>bar-chart</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="battery-charging"></feather><span>battery-charging</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="battery"></feather><span>battery</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="bell-off"></feather><span>bell-off</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="bell"></feather><span>bell</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="bluetooth"></feather><span>bluetooth</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="bold"></feather><span>bold</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="book-open"></feather><span>book-open</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="book"></feather><span>book</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="bookmark"></feather><span>bookmark</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="box"></feather><span>box</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="briefcase"></feather><span>briefcase</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="calendar"></feather><span>calendar</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="camera-off"></feather><span>camera-off</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="camera"></feather><span>camera</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="cast"></feather><span>cast</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="check-circle"></feather><span>check-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="check-square"></feather><span>check-square</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="check"></feather><span>check</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="chevron-down"></feather><span>chevron-down</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="chevron-left"></feather><span>chevron-left</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="chevron-right"></feather><span>chevron-right</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="chevron-up"></feather><span>chevron-up</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="chevrons-down"></feather><span>chevrons-down</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="chevrons-left"></feather><span>chevrons-left</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="chevrons-right"></feather><span>chevrons-right</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="chevrons-up"></feather><span>chevrons-up</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="chrome"></feather><span>chrome</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="circle"></feather><span>circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="clipboard"></feather><span>clipboard</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="clock"></feather><span>clock</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="cloud-drizzle"></feather><span>cloud-drizzle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="cloud-lightning"></feather><span>cloud-lightning</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="cloud-off"></feather><span>cloud-off</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="cloud-rain"></feather><span>cloud-rain</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="cloud-snow"></feather><span>cloud-snow</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="cloud"></feather><span>cloud</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="code"></feather><span>code</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="codepen"></feather><span>codepen</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="codesandbox"></feather><span>codesandbox</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="coffee"></feather><span>coffee</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="columns"></feather><span>columns</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="command"></feather><span>command</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="compass"></feather><span>compass</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="copy"></feather><span>copy</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="corner-down-left"></feather><span>corner-down-left</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="corner-down-right"></feather><span>corner-down-right</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="corner-left-down"></feather><span>corner-left-down</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="corner-left-up"></feather><span>corner-left-up</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="corner-right-down"></feather><span>corner-right-down</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="corner-right-up"></feather><span>corner-right-up</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="corner-up-left"></feather><span>corner-up-left</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="corner-up-right"></feather><span>corner-up-right</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="cpu"></feather><span>cpu</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="credit-card"></feather><span>credit-card</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="crop"></feather><span>crop</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="crosshair"></feather><span>crosshair</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="database"></feather><span>database</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="delete"></feather><span>delete</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="disc"></feather><span>disc</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="dollar-sign"></feather><span>dollar-sign</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="download-cloud"></feather><span>download-cloud</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="download"></feather><span>download</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="droplet"></feather><span>droplet</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="edit-2"></feather><span>edit-2</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="edit-3"></feather><span>edit-3</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="edit"></feather><span>edit</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="external-link"></feather><span>external-link</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="eye-off"></feather><span>eye-off</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="eye"></feather><span>eye</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="facebook"></feather><span>facebook</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="fast-forward"></feather><span>fast-forward</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="feather"></feather><span>feather</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="figma"></feather><span>figma</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="file-minus"></feather><span>file-minus</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="file-plus"></feather><span>file-plus</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="file-text"></feather><span>file-text</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="file"></feather><span>file</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="film"></feather><span>film</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="filter"></feather><span>filter</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="flag"></feather><span>flag</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="folder-minus"></feather><span>folder-minus</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="folder-plus"></feather><span>folder-plus</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="folder"></feather><span>folder</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="framer"></feather><span>framer</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="frown"></feather><span>frown</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="gift"></feather><span>gift</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="git-branch"></feather><span>git-branch</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="git-commit"></feather><span>git-commit</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="git-merge"></feather><span>git-merge</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="git-pull-request"></feather><span>git-pull-request</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="github"></feather><span>github</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="gitlab"></feather><span>gitlab</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="globe"></feather><span>globe</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="grid"></feather><span>grid</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="hard-drive"></feather><span>hard-drive</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="hash"></feather><span>hash</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="headphones"></feather><span>headphones</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="heart"></feather><span>heart</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="help-circle"></feather><span>help-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="hexagon"></feather><span>hexagon</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="home"></feather><span>home</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="image"></feather><span>image</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="inbox"></feather><span>inbox</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="info"></feather><span>info</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="instagram"></feather><span>instagram</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="italic"></feather><span>italic</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="key"></feather><span>key</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="layers"></feather><span>layers</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="layout"></feather><span>layout</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="life-buoy"></feather><span>life-buoy</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="link-2"></feather><span>link-2</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="link"></feather><span>link</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="linkedin"></feather><span>linkedin</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="list"></feather><span>list</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="loader"></feather><span>loader</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="lock"></feather><span>lock</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="log-in"></feather><span>log-in</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="log-out"></feather><span>log-out</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="mail"></feather><span>mail</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="map-pin"></feather><span>map-pin</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="map"></feather><span>map</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="maximize-2"></feather><span>maximize-2</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="maximize"></feather><span>maximize</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="meh"></feather><span>meh</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="menu"></feather><span>menu</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="message-circle"></feather><span>message-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="message-square"></feather><span>message-square</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="mic-off"></feather><span>mic-off</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="mic"></feather><span>mic</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="minimize-2"></feather><span>minimize-2</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="minimize"></feather><span>minimize</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="minus-circle"></feather><span>minus-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="minus-square"></feather><span>minus-square</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="minus"></feather><span>minus</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="monitor"></feather><span>monitor</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="moon"></feather><span>moon</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="more-horizontal"></feather><span>more-horizontal</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="more-vertical"></feather><span>more-vertical</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="mouse-pointer"></feather><span>mouse-pointer</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="move"></feather><span>move</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="music"></feather><span>music</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="navigation-2"></feather><span>navigation-2</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="navigation"></feather><span>navigation</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="octagon"></feather><span>octagon</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="package"></feather><span>package</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="paperclip"></feather><span>paperclip</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="pause-circle"></feather><span>pause-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="pause"></feather><span>pause</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="pen-tool"></feather><span>pen-tool</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="percent"></feather><span>percent</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="phone-call"></feather><span>phone-call</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="phone-forwarded"></feather><span>phone-forwarded</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="phone-incoming"></feather><span>phone-incoming</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="phone-missed"></feather><span>phone-missed</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="phone-off"></feather><span>phone-off</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="phone-outgoing"></feather><span>phone-outgoing</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="phone"></feather><span>phone</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="pie-chart"></feather><span>pie-chart</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="play-circle"></feather><span>play-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="play"></feather><span>play</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="plus-circle"></feather><span>plus-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="plus-square"></feather><span>plus-square</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="plus"></feather><span>plus</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="pocket"></feather><span>pocket</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="power"></feather><span>power</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="printer"></feather><span>printer</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="radio"></feather><span>radio</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="refresh-ccw"></feather><span>refresh-ccw</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="refresh-cw"></feather><span>refresh-cw</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="repeat"></feather><span>repeat</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="rewind"></feather><span>rewind</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="rotate-ccw"></feather><span>rotate-ccw</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="rotate-cw"></feather><span>rotate-cw</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="rss"></feather><span>rss</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="save"></feather><span>save</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="scissors"></feather><span>scissors</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="search"></feather><span>search</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="send"></feather><span>send</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="server"></feather><span>server</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="settings"></feather><span>settings</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="share-2"></feather><span>share-2</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="share"></feather><span>share</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="shield-off"></feather><span>shield-off</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="shield"></feather><span>shield</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="shopping-bag"></feather><span>shopping-bag</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="shopping-cart"></feather><span>shopping-cart</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="shuffle"></feather><span>shuffle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="sidebar"></feather><span>sidebar</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="skip-back"></feather><span>skip-back</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="skip-forward"></feather><span>skip-forward</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="slack"></feather><span>slack</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="slash"></feather><span>slash</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="sliders"></feather><span>sliders</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="smartphone"></feather><span>smartphone</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="smile"></feather><span>smile</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="speaker"></feather><span>speaker</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="square"></feather><span>square</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="star"></feather><span>star</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="stop-circle"></feather><span>stop-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="sun"></feather><span>sun</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="sunrise"></feather><span>sunrise</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="sunset"></feather><span>sunset</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="tablet"></feather><span>tablet</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="tag"></feather><span>tag</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="target"></feather><span>target</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="terminal"></feather><span>terminal</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="thermometer"></feather><span>thermometer</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="thumbs-down"></feather><span>thumbs-down</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="thumbs-up"></feather><span>thumbs-up</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="toggle-left"></feather><span>toggle-left</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="toggle-right"></feather><span>toggle-right</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="tool"></feather><span>tool</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="trash-2"></feather><span>trash-2</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="trash"></feather><span>trash</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="trello"></feather><span>trello</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="trending-down"></feather><span>trending-down</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="trending-up"></feather><span>trending-up</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="triangle"></feather><span>triangle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="truck"></feather><span>truck</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="tv"></feather><span>tv</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="twitch"></feather><span>twitch</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="twitter"></feather><span>twitter</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="type"></feather><span>type</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="umbrella"></feather><span>umbrella</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="underline"></feather><span>underline</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="unlock"></feather><span>unlock</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="upload-cloud"></feather><span>upload-cloud</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="upload"></feather><span>upload</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="user-check"></feather><span>user-check</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="user-minus"></feather><span>user-minus</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="user-plus"></feather><span>user-plus</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="user-x"></feather><span>user-x</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="user"></feather><span>user</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="users"></feather><span>users</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="video-off"></feather><span>video-off</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="video"></feather><span>video</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="voicemail"></feather><span>voicemail</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="volume-1"></feather><span>volume-1</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="volume-2"></feather><span>volume-2</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="volume-x"></feather><span>volume-x</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="volume"></feather><span>volume</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="watch"></feather><span>watch</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="wifi-off"></feather><span>wifi-off</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="wifi"></feather><span>wifi</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="wind"></feather><span>wind</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="x-circle"></feather><span>x-circle</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="x-octagon"></feather><span>x-octagon</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="x-square"></feather><span>x-square</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="x"></feather><span>x</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="youtube"></feather><span>youtube</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="zap-off"></feather><span>zap-off</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="zap"></feather><span>zap</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="zoom-in"></feather><span>zoom-in</span>
                      </div>

                      <div class="col-xl-3 col-lg-4 col-sm-6">
                          <feather type="zoom-out"></feather><span>zoom-out</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </Layout>
</template>
