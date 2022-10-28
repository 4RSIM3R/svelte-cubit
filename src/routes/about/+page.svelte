<script>
    import PrimaryButton from "../../components/button/PrimaryButton.svelte";
    import Header from "../../components/header/Header.svelte";
</script>

<div class="min-h-screen w-full flex flex-col bg-white text-gray-900">
    <Header />

    <div class="w-full max-w-7xl mx-auto my-12">
        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-6 flex h-32">
                <p class="text-4xl font-medium max-w-sm">
                    We build bridges between companies and customers
                </p>
            </div>
            <div class="col-span-6 flex items-end h-32">
                <p class="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    illo culpa vel, pariatur quidem omnis natus cum soluta sint
                    unde rem quae tenetur sequi incidunt, repellat voluptatibus.
                    Vitae, harum quidem!
                </p>
            </div>
        </div>
    </div>

    <div class="w-full">
        <img
            class="w-full h-96 object-cover"
            src="https://berkarir.id/wp-content/uploads/2020/07/chef-mengajari-siswa-perhotelan.jpg"
            alt=""
        />
    </div>

    <div class="w-full max-w-7xl mx-auto my-12">
        <hr class="bg-gray-500" />
        <div class="grid grid-cols-12 gap-6 mt-4">
            <div class="col-span-6 flex h-32">
                <p class="text-4xl font-medium max-w-sm">
                    Together We Are Strong
                </p>
            </div>
            <div class="col-span-6 flex flex-col space-y-4">
                <p class="max-w-md font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    illo culpa vel, pariatur quidem omnis natus cum soluta sint
                    unde rem quae tenetur sequi incidunt, repellat voluptatibus.
                    Vitae, harum quidem!
                </p>
                <p class="text-sm max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    illo culpa vel, pariatur quidem omnis natus cum soluta sint
                    unde rem quae tenetur sequi incidunt, repellat voluptatibus.
                    Vitae, harum quidem!
                </p>
            </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        <div class="col-span-6">
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe
                        title="map"
                        class="w-full h-96"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=politeknik%20negri%20malang&t=&z=19&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                    />
                    <a href="https://putlocker-is.org" />
                    <br />
                    <style>
                        .mapouter {
                            position: relative;
                            text-align: right;
                            height: 500px;
                            width: 600px;
                        }
                    </style>

                    <style>
                        .gmap_canvas {
                            overflow: hidden;
                            background: none !important;
                            height: 500px;
                            width: 600px;
                        }
                    </style>
                </div>
            </div>
        </div>
        <div class="col-span-6 flex flex-col space-y-4">
            <p>Come and join us</p>
            <p class="max-w-md text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus, distinctio.
            </p>
            <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm"
                placeholder="Name"
                required
            />
            <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm"
                placeholder="Email"
                required
            />
            <textarea
                rows="5"
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm"
                placeholder="John"
                required
            />
            <div>
                <PrimaryButton>Get A Schedule</PrimaryButton>
            </div>
        </div>
    </div>
</div>
