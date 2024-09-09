<script>
  export let label = "Click me";
  export let message = "";
</script>

<button class=" bg-black p-5 btn">{label}</button>
<p>gef</p>
<h1>{message}</h1>

<style>
  .btn {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #0056b3;
  }
</style>
