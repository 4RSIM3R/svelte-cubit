<script>
    import { onMount } from "svelte";
    import { Cubit } from "../../lib/cubit";

    const State = Object.freeze({
        Initial: "Initial",
        Loading: "Loading",
        Success: "Success",
        Failure: "Failure",
    });

    let current = State.Initial;

    let cubit = new Cubit(State.Initial);

    cubit.stream.subscribe((value) => {
        current = value;
    });

    const fetchApi = () => {
        cubit.emit(State.Loading);
        fetch("https://reqres.in/api/users?page=2") // try to change the url for reproducing error here
            .then((resp) => resp.json())
            .then((value) => {
                console.log(value.data);
                cubit.emit(State.Success, { data: value.data });
            })
            .catch((err) => {
                cubit.emit(State.Failure, { err: err });
            });
    };

    onMount(() => {
        fetchApi();
    });
</script>

<div>
    <p>Simulate Fetch API Here</p>
    {#if current == State.Initial || current == State.Loading}
        <p>Loading....</p>
    {:else if current == State.Success}
        {#each cubit.context.data as payload}
            <p>{payload.first_name} {payload.last_name}</p>
        {/each}
    {:else if current == State.Failure}
        <p>{cubit.context.err}</p>
    {/if}
</div>
