<script>
import appConfig from "@/app.config";

/**
 * Maintenance component
 */
export default {
  page: {
    title: "Maintenance",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
};
</script>

<template>
  <div class="authentication-bg min-vh-100">
    <div class="bg-overlay bg-white"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex flex-column min-vh-100">
            <div class="text-center my-auto py-5">
              <div class="row justify-content-center mb-5">
                <div class="col-sm-4">
                  <div class="maintenance-img">
                    <img
                      src="@/assets/images/maintenance.png"
                      alt=""
                      class="img-fluid mx-auto d-block"
                    />
                  </div>
                </div>
              </div>
              <div class="text-muted mb-5">
                <h4>Site is Under Maintenance</h4>
                <p>Please check back in sometime.</p>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <div class="card mt-4 maintenance-box shadow-none">
                    <div class="card-body">
                      <div class="mb-4">
                        <i class="uil uil-rss-alt h1 text-primary"></i>
                      </div>

                      <h5 class="font-size-15 text-uppercase">
                        Why is the Site Down?
                      </h5>
                      <p class="text-muted mb-0">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- end col -->
                <div class="col-md-4">
                  <div class="card mt-4 maintenance-box shadow-none">
                    <div class="card-body">
                      <div class="mb-4">
                        <i class="uil uil-clock-eight h1 text-primary"></i>
                      </div>

                      <h5 class="font-size-15 text-uppercase">
                        What is the Downtime?
                      </h5>
                      <p class="text-muted mb-0">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- end col -->
                <div class="col-md-4">
                  <div class="card mt-4 maintenance-box shadow-none">
                    <div class="card-body">
                      <div class="mb-4">
                        <i class="uil uil-envelope-alt h1 text-primary"></i>
                      </div>

                      <h5 class="font-size-15 text-uppercase">
                        Do you need Support?
                      </h5>
                      <p class="text-muted mb-0">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embar..
                        <a
                          href="mailto:no-reply@domain.com"
                          class="text-decoration-underline"
                          >no-reply@domain.com</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>

            <div class="text-center p-4">
              <p class="mb-0">
                &copy; {{ new Date().getFullYear() }} Dashonic. Crafted with
                <i class="mdi mdi-heart text-danger"></i> by Pichforest
              </p>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </div>
  <!-- end authentication section -->
</template>
