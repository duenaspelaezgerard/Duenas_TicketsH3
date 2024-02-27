import { login } from "./Login";

export const registro = {
    template: //html 
    `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h1 class="text-center mt-3 mb-5">Registro</h1>
          <div class="card">
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label for="InputNombre1" class="form-label">Nombre:</label>
                  <input type="nombre" class="form-control">
                </div>
                <div class="mb-3">
                  <label for="InputEmail1" class="form-label">Apellidos:</label>
                  <input type="email" class="form-control">
                </div>
                <div class="mb-3">
                  <label for="InputEmail1" class="form-label">Email:</label>
                  <input type="email" class="form-control">
                </div>
                <div class="mb-3">
                  <label for="InputPassword1" class="form-label">Contraseña: </label>
                  <input type="password" class="form-control">
                </div>
                <button id="butRegistro" type="" class="btn btn-primary w-100">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,

    script : ()=>{
        document.querySelector('#butRegistro').addEventListener
        ('click', () => {
            document.querySelector('main').innerHTML= login.template;
            login.script()
        });
    }
}
