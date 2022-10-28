<script>
    import PrimaryButton from "../components/button/PrimaryButton.svelte";
    import Header from "../components/header/Header.svelte";

    let menus = [
        "Nasi Padang Tier 1",
        "Nasi Padang Tier 2",
        "Nasi Padang Tier 3",
        "Ayam Kalasan",
        "Rendang Ayam",
        "Rendang Unta",
        "Rendang Gajah",
    ];

    const scrollMenuLeft = () => {
        let menusView = document.getElementById("menu");
        menusView.scroll({
            left: 20,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        let menusView = document.getElementById("menu");
        menusView.scroll({
            left: menusView.scrollWidth,
            behavior: "smooth",
        });
    };
</script>

<div class="min-h-screen w-full flex flex-col bg-white text-gray-900">
    <Header />
    <div class="w-full max-w-7xl mx-auto mt-12">
        <div class="grid grid-cols-12">
            <div class="col-span-6 flex flex-col">
                <p class="text-lg  mb-2">Rancak Bana</p>
                <p class="text-2xl font-medium max-w-md mb-6">
                    Authentic 'Minang' Taste, That Made You Feel To Tasting An
                    Indonesia Culinary Masterpiece
                </p>
                <div class="mb-6">
                    <PrimaryButton>Order Now</PrimaryButton>
                </div>
                <div class="mb-4">
                    <p>Our Happy Customers</p>
                    <span class="text-sm">
                        <i class="bx bxs-star text-amber-500" /> 4.8 (12.5K Reviews)
                    </span>
                </div>
                <div class="flex flex-row mb-4">
                    <div class="flex flex-row">
                        <img
                            class="h-12 w-12 object-cover rounded-full -translate-x-24 order-2 border-solid border-white"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                            alt=""
                        />
                        <img
                            class="h-12 w-12 object-cover rounded-full translate-x-10 border-2 border-solid border-white"
                            src="https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg"
                            alt=""
                        />
                        <img
                            class="h-12 w-12 object-cover rounded-full translate-x-8 border-2 border-solid border-white"
                            src="https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div class="mb-4 max-w-sm">
                    <span class="text-sm">
                        Loving to eat nasi padang, and you want to eat more? can
                        you find the Coupon Code <a
                            href="/"
                            class="text-blue-500">Here</a
                        >
                    </span>
                </div>
            </div>
            <div class="col-span-6">
                <div class="w-full">
                    <img
                        src="https://t-2.tstatic.net/medan/foto/bank/images/ilustrasi-nasi-padang.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="w-full max-w-7xl mx-auto my-24">
        <div class="flex flex-row justify-between items-center">
            <p class="mb-4 text-lg font-medium">Main Stay Menu</p>
            <div class="flex flex-row space-x-2">
                <div
                    on:click={scrollMenuLeft}
                    class="h-10 w-10 rounded-full border border-solid border-gray-300 flex items-center justify-center"
                >
                    <i class="bx bx-chevron-left text-gray-500 text-2xl" />
                </div>
                <div
                    on:click={scrollRight}
                    class="h-10 w-10 rounded-full border border-solid border-gray-300 flex items-center justify-center"
                >
                    <i class="bx bx-chevron-right text-gray-500 text-2xl" />
                </div>
            </div>
        </div>
        <p class="max-w-lg text-sm mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ea
            nulla aliquid, unde.
        </p>
        <div
            class="flex overflow-x-scroll gap-6 snap-x snap-mandatory scrollbar-hide"
            kind="menu"
            id="menu"
        >
            {#each menus as menu}
                <div class="flex flex-col shrink-0 snap-center">
                    <img
                        class="w-72 h-48 object-cover mb-2 rounded-sm"
                        src="https://inibaru.id/media/5100/large/normal/b879e94c-9dfd-4b9d-afa6-4759066cdc60__large.jpg"
                        alt=""
                    />
                    <p class="font-medium mb-2">{menu}</p>
                    <p class="text-xs max-w-xs mb-4">
                        Basic Nasi Padang That Feed Your Mouth Delightly
                    </p>
                    <div class="flex flex-row justify-between items-center">
                        <p>RP 15.000</p>
                        <div>
                            <PrimaryButton>Order Now</PrimaryButton>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <!-- <div class="w-full max-w-7xl mx-auto mt-24">
        <p class="mb-4 text-lg font-medium">Do It Your Self</p>
        <p class="max-w-lg text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ea
            nulla aliquid, unde.
        </p>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-6">
                <img
                    class="h-48 w-full object-cover rounded-sm"
                    src="https://inibaru.id/media/5100/large/normal/b879e94c-9dfd-4b9d-afa6-4759066cdc60__large.jpg"
                    alt=""
                />
            </div>
            <div class="col-span-6">
                <img
                    class="h-48 w-full object-cover rounded-sm"
                    src="https://inibaru.id/media/5100/large/normal/b879e94c-9dfd-4b9d-afa6-4759066cdc60__large.jpg"
                    alt=""
                />
            </div>
            <div class="col-span-6 ">
                <img
                    class="h-48 w-full object-cover rounded-sm"
                    src="https://inibaru.id/media/5100/large/normal/b879e94c-9dfd-4b9d-afa6-4759066cdc60__large.jpg"
                    alt=""
                />
            </div>
            <div class="col-span-6 ">
                <img
                    class="h-48 w-full object-cover rounded-sm"
                    src="https://inibaru.id/media/5100/large/normal/b879e94c-9dfd-4b9d-afa6-4759066cdc60__large.jpg"
                    alt=""
                />
            </div>
        </div>
    </div> -->
</div>
