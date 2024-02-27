import { panel } from "./Panel";
import { registro } from "./Registro";

export const login = {
    template: //html 
    `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h1 class="text-center mt-3 mb-5">Iniciar Sesión</h1>
          <div class="card">
            <div class="card-body">
              <form action="proyectos.html">
                <div class="mb-3">
                  <label for="InputEmail1" class="form-label">Email:</label>
                  <input type="email" class="form-control" aria-describedby="emailHelp" >
                </div>
                <div class="mb-3">
                  <label for="InputPassword1" class="form-label">Contraseña: </label>
                  <input type="password" class="form-control">
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="Check1">
                  <label class="form-check-label" for="Check1">Recordar Contraseña</label>                 
                </div>
                <div class="text-end mb-3">
                  <a href="#" >¿Has olvidado la contraseña?</a>
                </div>
                <a href=""><button id="butLogin" type="" class="btn btn-primary w-100">Iniciar Sesión</button></a>
              </form>
            </div>
          </div>
          <div class="mt-5">
            <a id="butRegistro" href="registro.html" class="btn btn-secondary w-100">¿Eres nuevo? Regístrate</a>
          </div>
        </div>
      </div>
    </div>
    `,
    script : ()=>{
        document.querySelector('#butLogin').addEventListener('click', (event) => {
          event.preventDefault()
          document.querySelector('main').innerHTML= panel.template;
        });

        document.querySelector('#butRegistro').addEventListener('click', (event) => {
          event.preventDefault()
          document.querySelector('main').innerHTML= registro.template;
          registro.script()
        });
    }
}
