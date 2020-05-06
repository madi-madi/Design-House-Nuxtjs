<template>
  <div>
            <!-- Start Hero -->
            <section class="hero text-center bg-secondary text-white">
                <div class="container">
                    <h1 class="font-28 fw-600 text-uppercase">
                        Upload a design
                    </h1>
                </div>
            </section>
            <!-- End Hero -->

            <!-- Upload Shot -->
            <div class="upload-shot">
                <div class="container">
                    <div
                        class="row justify-content-center align-items-center text-center"
                    >
                        <div class="col-md-5">
                            <div class="upload white-bg-color">
                                <form>
                                    <div class="box-input">
                                        <div class="uload-icon font-28">
                                            <i
                                                class="fas fa-cloud-upload-alt"
                                            ></i>
                                        </div>
                                        <label
                                            class="fileContainer font-18 fw-500"
                                        >
                                            <input type="file" />
                                            <span
                                                >Drag an image here or
                                                <a>Browse</a> for an image to
                                                upload.</span
                                            >
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <div class="upload-para mt-2">
                                <p class="font-14 fw-400">
                                    JPG, GIF or PNG. Dribbble shots are
                                    <strong>400 × 300</strong> pixels or
                                    <strong>800 × 600</strong> (for HiDPI
                                    displays).
                                </p>
                                <p class="font-12 fw-300">
                                    If your image is bigger than the sizes
                                    above, we’ll help you crop it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Upload Shot -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>