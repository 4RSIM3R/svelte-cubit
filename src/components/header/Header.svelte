<script>
    import PrimaryButton from "../button/PrimaryButton.svelte";
</script>

<nav class="px-2 sm:px-4 py-2.5 w-full">
    <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <a href="https://flowbite.com/" class="flex items-center">
            <img
                src="https://marketplace.canva.com/EAFLVvhg6_c/1/0/1600w/canva-logo-rumah-makan-padang-_rc9_1HUjrk.jpg"
                class="mr-3 h-16 w-16 object-cover"
                alt="Flowbite Logo"
            />
        </a>
        <div class="flex order-2">
            <div>
                <PrimaryButton>Order Now</PrimaryButton>
            </div>
        </div>
        <div
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
        >
            <ul
                class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
            >
                <li>
                    <a
                        href="/"
                        class="block py-2 pr-4 pl-3 text-gray-700 bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700  md:p-0 "
                        aria-current="page">Home</a
                    >
                </li>
                <li>
                    <a
                        href="/about"
                        class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                        >About</a
                    >
                </li>
                <li>
                    <a
                        href="/"
                        target="_blank"
                        class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                        >Contact</a
                    >
                </li>
            </ul>
        </div>
    </div>
</nav>
