import React from 'react'

function Owasp1() {
  return (
    <>
      <div class="flex  justify-center items-center   bg-gray-400 " style={{ height: '400px' }}>
        <div class=" p-2 ">
          <h1 className='text-4xl uppercase font-mono'>Pérdida de Control de Acceso</h1>
        </div>
      </div>
      <div className='m-10 flex flex-row items center justify-center gap-10'>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">¿Por qué se da?</div>
            <p class="text-gray-700 text-base w-sm">


              La pérdida de control de acceso implica que un atacante puede eludir la seguridad de una aplicación web para acceder a recursos o funciones no autorizados. Esto ocurre por errores en las políticas de control de acceso o la falta de restricciones adecuadas.
            </p>
          </div>

        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Escenario 1</div>
            <p class="text-gray-700 text-base">
              El atacante busca una URL específica, esta URL contiene información que requiere derechos de administrador.
              <p className='text-blue-600'>https://example.com/app/getappInfo</p>
              <p className='text-blue-600'>https://example.com/app/admin_getappInfo</p>
            </p>
            

          </div>

          
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Prevención </div>
            <p class="text-gray-700 text-base">
            Deshabilite el listado de directorios del servidor web y asegúrese de que los archivos de metadatos (por ejemplo una carpeta .git y archivos de respaldo no puedan ser accedidos a partir de la raíz del sitio web.
            </p>
          </div>
        
        </div>


      </div>


    </>
  )
}

export default Owasp1