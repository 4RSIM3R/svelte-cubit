<script>
    import { Cubit } from "../lib/cubit";

    let cubit = new Cubit(0);

    let state = 0;

    cubit.stream.subscribe((value) => {
        state = value;
    });

    function add() {
        cubit.emit((state += 1));
    }

    function substract() {
        cubit.emit((state -= 1));
    }

    $: console.log(cubit.stream);
</script>

<div>
    <p>Halo</p>

    <br />

    <p>{state}</p>

    <button on:click={add}>+</button>

    <br />
    <br />

    <button on:click={substract}> - </button>
</div>
