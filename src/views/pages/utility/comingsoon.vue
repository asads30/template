<script>
import appConfig from "@/app.config";

/**
 * Coming-soon component
 */
export default {
  page: {
    title: "Coming-soon",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      starttime: "Nov 5, 2020 15:37:25",
      endtime: "Dec 31, 2021 16:37:25",
    };
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
  methods: {
    timerCount: function(start, end) {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = start - now;
      var passTime = end - now;

      if (distance < 0 && passTime < 0) {
        clearInterval(this.interval);
        return;
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime);
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance);
      }
    },
    calcTime: function(dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    },
  },
};
</script>

<template>
  <div class="authentication-bg min-vh-100">
    <div class="bg-overlay bg-white"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="d-flex flex-column min-vh-100 px-3 pt-4">
            <div class="text-center my-auto py-5">
              <div class="mb-4 mb-md-5">
                <router-link to="/" class="d-block auth-logo">
                  <img
                    src="@/assets/images/logo-dark.png"
                    alt=""
                    height="22"
                    class="auth-logo-dark"
                  />
                  <img
                    src="@/assets/images/logo-light.png"
                    alt=""
                    height="22"
                    class="auth-logo-light"
                  />
                </router-link>
              </div>
              <div class="text-muted mb-5">
                <h4>Let's get started with Dashonic</h4>
                <p>
                  It will be as simple as Occidental in fact it will be
                  Occidental.
                </p>
              </div>

              <div class="row justify-content-center mt-5 countdownlist">
                <div class="col-md-8">
                  <div class="countdownlist">
                    <div class="countdownlist-item">
                      <div class="count-title">Days</div>
                      <div class="count-num">{{ days }}</div>
                    </div>
                    <div class="countdownlist-item">
                      <div class="count-title">Hours</div>
                      <div class="count-num">{{ hours }}</div>
                    </div>
                    <div class="countdownlist-item">
                      <div class="count-title">Minutes</div>
                      <div class="count-num">{{ minutes }}</div>
                    </div>
                    <div class="countdownlist-item">
                      <div class="count-title">Seconds</div>
                      <div class="count-num">{{ seconds }}</div>
                    </div>
                  </div>
                </div>
                <!-- end col-->
              </div>
              <!-- end row-->

              <div class="input-group countdown-input-group mx-auto my-5">
                <input
                  type="email"
                  class="form-control border-light shadow"
                  placeholder="Enter your email address"
                  aria-label="search result"
                  aria-describedby="button-email"
                />
                <button class="btn btn-primary" type="button" id="button-email">
                  Send <i class="bx bx-paper-plane ms-1"></i>
                </button>
              </div>
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
