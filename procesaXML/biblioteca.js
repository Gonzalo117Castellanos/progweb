function cargarDatos() {
  const promise = fetch("/datos.xml");

  promise.then(function (response) {
    const divContent = document.getElementById("contenedor");

    if (divContent) {
      divContent.innerHTML = response;
    }
  });
}
